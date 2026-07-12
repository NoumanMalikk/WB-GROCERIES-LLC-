import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/utilities/rate-limit";
import { sendNewsletterConfirmation } from "@/lib/email/send";
import { isDemoMode } from "@/data/store-config";

const schema = z.object({
  email: z.string().email(),
  marketingConsent: z.boolean().refine((value) => value === true),
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  const limited = rateLimit(`newsletter:${ip}`, 10, 60_000);
  if (!limited.success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email and confirm consent" }, { status: 400 });
  }

  if (isDemoMode()) {
    console.info("[demo-newsletter]", parsed.data.email);
  }

  await sendNewsletterConfirmation(parsed.data.email);
  return NextResponse.json({
    success: true,
    message: "You are on the list. Check your inbox when email delivery is connected.",
  });
}
