import { isDemoMode, isSquareConfigured, isStripeConfigured, storeConfig } from "@/data/store-config";
import type { ShippingMethod } from "@/data/types";

/** Client-safe: only uses NEXT_PUBLIC_* values. */
export function isPaymentProviderConfiguredPublic(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID?.trim() ||
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim(),
  );
}

export function isDemoCheckout(): boolean {
  // Server uses full secret checks; client falls back to public keys.
  if (typeof window === "undefined") {
    return isDemoMode() || (!isSquareConfigured() && !isStripeConfigured());
  }
  return isDemoMode() || !isPaymentProviderConfiguredPublic();
}

export function getActivePaymentProvider(): "square" | "stripe" | "demo" {
  if (isDemoCheckout()) return "demo";

  if (typeof window === "undefined") {
    if (isSquareConfigured()) return "square";
    if (isStripeConfigured()) return "stripe";
    return "demo";
  }

  if (process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID?.trim()) return "square";
  if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim()) return "stripe";
  return "demo";
}

export function getShippingMethods(): ShippingMethod[] {
  return storeConfig.shipping.demoMethods.map((method) => ({ ...method }));
}
