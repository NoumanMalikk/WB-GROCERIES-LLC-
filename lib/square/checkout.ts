import { randomUUID } from "crypto";
import { getSiteUrl, getSupportEmail } from "@/data/store-config";
import type { OrderRecord } from "@/lib/orders/store";
import {
  dollarsToCents,
  getSquareClient,
  getSquareLocationId,
} from "@/lib/square/server";

export async function createSquareCheckoutUrl(order: OrderRecord): Promise<string> {
  const square = getSquareClient();
  const locationId = getSquareLocationId();
  if (!square || !locationId) {
    throw new Error("Square is not configured");
  }

  const lineItems = [
    ...order.items.map((item) => ({
      name: item.title.slice(0, 512),
      quantity: String(item.quantity),
      note: `${item.brand} · ${item.packageSize}`.slice(0, 500),
      basePriceMoney: {
        amount: dollarsToCents(item.unitPrice),
        currency: "USD" as const,
      },
    })),
    {
      name: `Shipping · ${order.shippingMethodName}`.slice(0, 512),
      quantity: "1",
      basePriceMoney: {
        amount: dollarsToCents(order.shipping),
        currency: "USD" as const,
      },
    },
  ];

  if (order.tax > 0) {
    lineItems.push({
      name: "Estimated tax",
      quantity: "1",
      basePriceMoney: {
        amount: dollarsToCents(order.tax),
        currency: "USD" as const,
      },
    });
  }

  const successUrl = `${getSiteUrl()}/checkout/success?reference=${encodeURIComponent(order.reference)}&email=${encodeURIComponent(order.email)}&provider=square`;
  const supportEmail = resolveMerchantSupportEmail(order.email);

  const response = await square.checkout.paymentLinks.create({
    idempotencyKey: randomUUID(),
    description: `WB Groceries order ${order.reference}`,
    order: {
      locationId,
      referenceId: order.reference,
      lineItems,
    },
    checkoutOptions: {
      allowTipping: false,
      askForShippingAddress: false,
      ...(supportEmail ? { merchantSupportEmail: supportEmail } : {}),
      redirectUrl: successUrl,
    },
    prePopulatedData: {
      buyerEmail: order.email,
      buyerPhoneNumber: normalizeSquarePhone(order.phone),
    },
    paymentNote: order.reference,
  });

  const url = response.paymentLink?.url;
  if (!url) {
    const detail = response.errors?.map((e) => e.detail).filter(Boolean).join("; ");
    throw new Error(detail || "Square did not return a checkout URL");
  }

  return url;
}

function normalizeSquarePhone(phone: string): string | undefined {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (phone.startsWith("+") && digits.length >= 10) return `+${digits}`;
  return undefined;
}

/** Square rejects placeholder domains like example.com. */
function resolveMerchantSupportEmail(fallbackBuyerEmail: string): string | undefined {
  const configured = getSupportEmail().trim();
  if (isUsableMerchantEmail(configured)) return configured;
  if (isUsableMerchantEmail(fallbackBuyerEmail)) return fallbackBuyerEmail.trim();
  return undefined;
}

function isUsableMerchantEmail(email: string): boolean {
  const value = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return false;
  if (value.endsWith("@example.com") || value.endsWith("@example.org") || value.endsWith("@test.com")) {
    return false;
  }
  return true;
}
