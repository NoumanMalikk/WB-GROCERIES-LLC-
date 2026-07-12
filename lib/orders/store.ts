import type { PaymentStatus, OrderStatus } from "@/data/types";
import { generateOrderReference } from "./reference";

export interface OrderLineItem {
  productId: string;
  sku: string;
  title: string;
  brand: string;
  packageSize: string;
  packCount: number;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  image: string;
}

export interface OrderAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface OrderRecord {
  id: string;
  reference: string;
  email: string;
  customerName: string;
  phone: string;
  items: OrderLineItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  currency: "USD";
  shippingMethodId: string;
  shippingMethodName: string;
  shippingAddress: OrderAddress;
  billingAddress: OrderAddress;
  paymentStatus: PaymentStatus;
  fulfillmentStatus: OrderStatus;
  marketingConsent: boolean;
  createdAt: string;
  demo: boolean;
}

const orders = new Map<string, OrderRecord>();

export function createOrder(
  input: Omit<OrderRecord, "id" | "reference" | "createdAt"> & { reference?: string },
): OrderRecord {
  const reference = input.reference ?? generateOrderReference();
  const order: OrderRecord = {
    ...input,
    id: reference,
    reference,
    createdAt: new Date().toISOString(),
  };
  orders.set(reference.toUpperCase(), order);
  return order;
}

export function getOrderByReferenceAndEmail(reference: string, email: string): OrderRecord | null {
  const order = orders.get(reference.trim().toUpperCase());
  if (!order) return null;
  if (order.email.toLowerCase() !== email.trim().toLowerCase()) return null;
  return order;
}

export function getOrderByReference(reference: string): OrderRecord | null {
  return orders.get(reference.trim().toUpperCase()) ?? null;
}
