import { storeConfig } from "@/data/store-config";

export function validateMinimumPrice(price: number): boolean {
  return price >= storeConfig.minimumProductPrice;
}

export function lineTotal(price: number, quantity: number): number {
  return Math.round(price * quantity * 100) / 100;
}

export function cartSubtotal(items: { price: number; quantity: number }[]): number {
  return Math.round(items.reduce((sum, item) => sum + lineTotal(item.price, item.quantity), 0) * 100) / 100;
}

export function heavyItemSurcharge(totalWeight: number): number {
  const { heavyItemWeightThreshold, heavyItemSurcharge } = storeConfig.shipping;
  if (totalWeight >= heavyItemWeightThreshold) return heavyItemSurcharge;
  return 0;
}
