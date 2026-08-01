import { NextResponse } from "next/server";
import { WebhooksHelper } from "square";
import { getOrderByReference, markOrderPaid } from "@/lib/orders/store";
import { sendOrderConfirmationEmail } from "@/lib/email/send";
import { getSquareWebhookSignatureKey } from "@/lib/square/server";
import { getSiteUrl } from "@/data/store-config";

type SquareWebhookBody = {
  type?: string;
  data?: {
    object?: {
      payment?: {
        status?: string;
        note?: string | null;
        orderId?: string | null;
        order_id?: string | null;
        referenceId?: string | null;
        reference_id?: string | null;
      };
      order?: {
        referenceId?: string | null;
        reference_id?: string | null;
        state?: string | null;
        metadata?: Record<string, string> | null;
      };
    };
  };
};

function extractOrderReference(body: SquareWebhookBody): string | null {
  const payment = body.data?.object?.payment;
  const order = body.data?.object?.order;

  const candidates = [
    payment?.note,
    payment?.referenceId,
    payment?.reference_id,
    order?.referenceId,
    order?.reference_id,
    order?.metadata?.orderReference,
  ];

  for (const value of candidates) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return null;
}

export async function POST(request: Request) {
  const signatureKey = getSquareWebhookSignatureKey();
  if (!signatureKey) {
    return NextResponse.json({ error: "Square webhook is not configured" }, { status: 503 });
  }

  const signature = request.headers.get("x-square-hmacsha256-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing Square signature" }, { status: 400 });
  }

  const body = await request.text();
  const notificationUrl = `${getSiteUrl()}/api/square/webhook`;

  const valid = await WebhooksHelper.verifySignature({
    requestBody: body,
    signatureHeader: signature,
    signatureKey,
    notificationUrl,
  });

  if (!valid) {
    return NextResponse.json({ error: "Invalid Square signature" }, { status: 401 });
  }

  let payload: SquareWebhookBody;
  try {
    payload = JSON.parse(body) as SquareWebhookBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const type = payload.type ?? "";
  const paymentStatus = payload.data?.object?.payment?.status?.toUpperCase();
  const orderState = payload.data?.object?.order?.state?.toUpperCase();

  const paidEvent =
    (type === "payment.updated" && paymentStatus === "COMPLETED") ||
    (type === "order.updated" && (orderState === "COMPLETED" || orderState === "OPEN"));

  if (paidEvent) {
    const reference = extractOrderReference(payload);
    if (reference) {
      const existing = getOrderByReference(reference);
      if (existing && existing.paymentStatus !== "paid") {
        const paid = markOrderPaid(reference);
        if (paid) await sendOrderConfirmationEmail(paid);
      }
    }
  }

  return NextResponse.json({ received: true });
}
