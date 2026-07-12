import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { rateLimit } from "@/lib/utilities/rate-limit";
import { sendContactAcknowledgment } from "@/lib/email/send";
import { getSupportEmail, isDemoMode } from "@/data/store-config";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  const limited = rateLimit(`contact:${ip}`, 8, 60_000);
  if (!limited.success) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", details: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  if (isDemoMode()) {
    console.info("[demo-contact]", {
      name: data.name,
      email: data.email,
      topic: data.topic,
      orderNumber: data.orderNumber || null,
      recipient: process.env.CONTACT_FORM_RECIPIENT || getSupportEmail(),
    });
  }

  await sendContactAcknowledgment(data.email, data.name);

  return NextResponse.json({
    success: true,
    message: "Thanks for contacting WB Groceries. We received your message.",
  });
}
