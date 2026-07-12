import { isDemoMode, isStripeConfigured, storeConfig } from "@/data/store-config";
import type { ShippingMethod } from "@/data/types";

export function isDemoCheckout(): boolean {
  return isDemoMode() || !isStripeConfigured();
}

export function getShippingMethods(): ShippingMethod[] {
  return storeConfig.shipping.demoMethods.map((method) => ({ ...method }));
}
