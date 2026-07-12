import { NextResponse } from "next/server";
import { getStripeServer } from "@/lib/stripe/server";
import { getOrderByReference, createOrder } from "@/lib/orders/store";
import { sendOrderConfirmationEmail } from "@/lib/email/send";
import type Stripe from "stripe";

export async function POST(request: Request) {
  const stripe = getStripeServer();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const body = await request.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const reference = session.metadata?.orderReference;
    if (reference) {
      const existing = getOrderByReference(reference);
      if (existing && existing.paymentStatus !== "paid") {
        const paid = createOrder({
          ...existing,
          reference: existing.reference,
          paymentStatus: "paid",
          fulfillmentStatus: "payment_received",
          demo: false,
        });
        await sendOrderConfirmationEmail(paid);
      }
    }
  }

  return NextResponse.json({ received: true });
}
