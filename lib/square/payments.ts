import { randomUUID } from "crypto";
import type { OrderRecord } from "@/lib/orders/store";
import { dollarsToCents, getSquareClient, getSquareLocationId } from "@/lib/square/server";

export async function chargeSquareCardPayment(order: OrderRecord, sourceId: string): Promise<string> {
  const square = getSquareClient();
  const locationId = getSquareLocationId();
  if (!square || !locationId) {
    throw new Error("Square is not configured");
  }

  const response = await square.payments.create({
    sourceId,
    idempotencyKey: randomUUID(),
    amountMoney: {
      amount: dollarsToCents(order.total),
      currency: "USD",
    },
    locationId,
    referenceId: order.reference.slice(0, 40),
    note: `WB Groceries order ${order.reference}`.slice(0, 500),
    autocomplete: true,
    buyerEmailAddress: order.email,
  });

  const payment = response.payment;
  const status = payment?.status?.toUpperCase();
  if (!payment?.id || (status !== "COMPLETED" && status !== "APPROVED")) {
    const detail = response.errors?.map((item) => item.detail).filter(Boolean).join("; ");
    throw new Error(detail || "Square payment was not completed");
  }

  return payment.id;
}

export async function verifySquarePaymentId(paymentId: string, reference: string, email: string): Promise<boolean> {
  const square = getSquareClient();
  if (!square) return false;

  try {
    const response = await square.payments.get({ paymentId });
    const payment = response.payment;
    if (!payment) return false;

    const status = payment.status?.toUpperCase();
    const paid = status === "COMPLETED" || status === "APPROVED";
    const referenceMatches =
      payment.referenceId?.toUpperCase() === reference.toUpperCase() ||
      payment.note?.toUpperCase().includes(reference.toUpperCase());
    const emailMatches =
      !payment.buyerEmailAddress || payment.buyerEmailAddress.toLowerCase() === email.trim().toLowerCase();

    return Boolean(paid && referenceMatches && emailMatches);
  } catch {
    return false;
  }
}
