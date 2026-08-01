import { isSquareConfigured, isStripeConfigured, storeConfig } from "@/data/store-config";
import type { ShippingMethod } from "@/data/types";

/** Client-safe: only uses NEXT_PUBLIC_* values. */
export function isPaymentProviderConfiguredPublic(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID?.trim() ||
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim(),
  );
}

/**
 * Demo checkout only when NO payment provider is configured.
 * If Square/Stripe keys are present, always run real hosted checkout
 * (Square sandbox still uses test cards when SQUARE_ENVIRONMENT=sandbox).
 */
export function isDemoCheckout(): boolean {
  if (typeof window === "undefined") {
    return !isSquareConfigured() && !isStripeConfigured();
  }
  return !isPaymentProviderConfiguredPublic();
}

export function getActivePaymentProvider(): "square" | "stripe" | "demo" {
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
