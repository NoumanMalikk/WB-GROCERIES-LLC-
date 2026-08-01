import { NextResponse } from "next/server";
import { z } from "zod";
import { getOrderByReferenceAndEmail, markOrderPaid } from "@/lib/orders/store";
import { verifySquarePaymentId } from "@/lib/square/payments";
import { rateLimit } from "@/lib/utilities/rate-limit";

const schema = z.object({
  reference: z.string().min(6),
  email: z.string().email(),
  paymentId: z.string().min(4).optional(),
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  const limited = rateLimit(`pay-verify:${ip}`, 30, 60_000);
  if (!limited.success) {
    return NextResponse.json({ error: "Too many attempts" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ verified: false, error: "Invalid verification request" }, { status: 400 });
  }

  const { reference, email, paymentId } = parsed.data;
  let order = getOrderByReferenceAndEmail(reference, email);

  if (paymentId) {
    const verified = await verifySquarePaymentId(paymentId, reference, email);
    if (verified) {
      order = markOrderPaid(reference) ?? order;
      return NextResponse.json({
        verified: true,
        paymentStatus: "paid",
        reference,
        email,
        order,
      });
    }
  }

  if (order?.paymentStatus === "paid") {
    return NextResponse.json({
      verified: true,
      paymentStatus: "paid",
      reference,
      email,
      order,
    });
  }

  return NextResponse.json({
    verified: false,
    paymentStatus: order?.paymentStatus ?? "unknown",
    reference,
    email,
    order,
  });
}
