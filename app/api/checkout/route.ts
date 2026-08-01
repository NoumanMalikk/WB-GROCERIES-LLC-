import { NextResponse } from "next/server";
import { checkoutSchema } from "@/lib/validation/checkout";
import { getProductById } from "@/data/products";
import { getActivePaymentProvider, getShippingMethods, isDemoCheckout } from "@/lib/checkout/demo";
import { computeOrderTotals } from "@/lib/checkout/totals";
import { createOrder } from "@/lib/orders/store";
import { sendOrderConfirmationEmail } from "@/lib/email/send";
import { getStripeServer } from "@/lib/stripe/server";
import { createSquareCheckoutUrl } from "@/lib/square/checkout";
import { getSiteUrl, storeConfig } from "@/data/store-config";
import { rateLimit } from "@/lib/utilities/rate-limit";
import { lineTotal } from "@/lib/pricing";
import { z } from "zod";

const bodySchema = checkoutSchema.and(
  z.object({
    items: z.array(z.object({ productId: z.string(), quantity: z.number().int().positive() })).min(1),
  }),
);

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  const limited = rateLimit(`checkout:${ip}`, 20, 60_000);
  if (!limited.success) {
    return NextResponse.json({ error: "Too many checkout attempts. Please try again shortly." }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Checkout validation failed", details: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const lines = [];
  for (const item of data.items) {
    const product = getProductById(item.productId);
    if (!product || !product.active) {
      return NextResponse.json({ error: "One or more products are unavailable" }, { status: 400 });
    }
    if (product.stockStatus === "out_of_stock") {
      return NextResponse.json({ error: `${product.title} is out of stock` }, { status: 400 });
    }
    if (item.quantity > product.maximumOrderQuantity) {
      return NextResponse.json({ error: `Quantity exceeds maximum for ${product.title}` }, { status: 400 });
    }
    if (product.price < storeConfig.minimumProductPrice) {
      return NextResponse.json({ error: "Invalid product pricing" }, { status: 400 });
    }
    lines.push({ product, quantity: item.quantity });
  }

  const methods = getShippingMethods();
  const method = methods.find((m) => m.id === data.shippingMethodId);
  if (!method) {
    return NextResponse.json({ error: "Invalid shipping method" }, { status: 400 });
  }

  const totals = computeOrderTotals({
    items: lines.map(({ product, quantity }) => ({
      price: product.price,
      quantity,
      shippingWeight: product.shippingWeight,
    })),
    shippingMethodPrice: method.price,
    taxEstimate: 0,
  });

  if (totals.totalWeight > storeConfig.shipping.maximumOrderWeight) {
    return NextResponse.json({ error: "Order exceeds maximum shipping weight" }, { status: 400 });
  }

  const billing = data.billingSameAsShipping ? data.shipping : data.billing!;
  const orderItems = lines.map(({ product, quantity }) => ({
    productId: product.id,
    sku: product.sku,
    title: product.title,
    brand: product.brand,
    packageSize: product.packageSize,
    packCount: product.packCount,
    quantity,
    unitPrice: product.price,
    lineTotal: lineTotal(product.price, quantity),
    image: product.images[0]?.src ?? "",
  }));

  const sharedOrderInput = {
    email: data.customer.email,
    customerName: `${data.customer.firstName} ${data.customer.lastName}`,
    phone: data.customer.phone,
    items: orderItems,
    subtotal: totals.subtotal,
    shipping: totals.shipping,
    tax: totals.tax,
    total: totals.total,
    currency: "USD" as const,
    shippingMethodId: method.id,
    shippingMethodName: method.name,
    shippingAddress: {
      line1: data.shipping.line1,
      line2: data.shipping.line2 || undefined,
      city: data.shipping.city,
      state: data.shipping.state,
      zip: data.shipping.zip,
      country: data.shipping.country,
    },
    billingAddress: {
      line1: billing.line1,
      line2: billing.line2 || undefined,
      city: billing.city,
      state: billing.state,
      zip: billing.zip,
      country: billing.country,
    },
    marketingConsent: data.marketingConsent,
  };

  if (isDemoCheckout()) {
    const order = createOrder({
      ...sharedOrderInput,
      paymentStatus: "demo",
      fulfillmentStatus: "awaiting_payment",
      demo: true,
    });

    await sendOrderConfirmationEmail(order);

    return NextResponse.json({
      demo: true,
      provider: "demo",
      reference: order.reference,
      message: "Demo checkout request recorded. Payment was not collected.",
    });
  }

  const provider = getActivePaymentProvider();
  const order = createOrder({
    ...sharedOrderInput,
    paymentStatus: "requires_payment",
    fulfillmentStatus: "awaiting_payment",
    demo: false,
  });

  try {
    if (provider === "square") {
      const checkoutUrl = await createSquareCheckoutUrl(order);
      return NextResponse.json({
        demo: false,
        provider: "square",
        reference: order.reference,
        checkoutUrl,
      });
    }

    const stripe = getStripeServer();
    if (!stripe) {
      return NextResponse.json({ error: "Payment provider is not configured" }, { status: 503 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: data.customer.email,
      line_items: [
        ...orderItems.map((item) => ({
          quantity: item.quantity,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(item.unitPrice * 100),
            product_data: {
              name: item.title,
              description: `${item.brand} · ${item.packageSize}`,
              images: item.image.startsWith("http") ? [item.image] : undefined,
            },
          },
        })),
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(totals.shipping * 100),
            product_data: { name: `Shipping · ${method.name}` },
          },
        },
      ],
      success_url: `${getSiteUrl()}/checkout/success?reference=${order.reference}&email=${encodeURIComponent(data.customer.email)}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getSiteUrl()}/checkout`,
      metadata: {
        orderReference: order.reference,
      },
    });

    return NextResponse.json({
      demo: false,
      provider: "stripe",
      reference: order.reference,
      checkoutUrl: session.url,
    });
  } catch (error) {
    const message = formatCheckoutError(error);
    console.error("[checkout]", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

function formatCheckoutError(error: unknown): string {
  if (error && typeof error === "object" && "errors" in error) {
    const errors = (error as { errors?: Array<{ detail?: string; field?: string }> }).errors;
    if (Array.isArray(errors) && errors.length > 0) {
      return errors
        .map((item) => item.detail || item.field || "Payment provider rejected the request")
        .join("; ");
    }
  }
  if (error instanceof Error && error.message) {
    // Avoid dumping full Square JSON blobs into the UI.
    if (error.message.includes("INVALID_EMAIL_ADDRESS") || error.message.includes("merchant_support_email")) {
      return "Store support email is invalid. Add SUPPORT_EMAIL in Vercel with a real email, then redeploy.";
    }
    if (error.message.length > 180 || error.message.includes("Status code:")) {
      return "Unable to start Square checkout. Please redeploy the latest site update and try again.";
    }
    return error.message;
  }
  return "Unable to start secure checkout. Please try again or contact support.";
}

