import { heavyItemSurcharge, lineTotal } from "@/lib/pricing";

export interface TotalsInputItem {
  price: number;
  quantity: number;
  shippingWeight: number;
}

export function computeOrderTotals(input: {
  items: TotalsInputItem[];
  shippingMethodPrice: number;
  taxEstimate?: number;
}) {
  const subtotal = Math.round(
    input.items.reduce((sum, item) => sum + lineTotal(item.price, item.quantity), 0) * 100,
  ) / 100;
  const totalWeight = Math.round(
    input.items.reduce((sum, item) => sum + item.shippingWeight * item.quantity, 0) * 100,
  ) / 100;
  const surcharge = heavyItemSurcharge(totalWeight);
  const shipping = Math.round((input.shippingMethodPrice + surcharge) * 100) / 100;
  const tax = Math.round((input.taxEstimate ?? 0) * 100) / 100;
  const total = Math.round((subtotal + shipping + tax) * 100) / 100;
  return { subtotal, shipping, tax, total, totalWeight, surcharge };
}
