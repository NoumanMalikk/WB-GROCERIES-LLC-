import { NextResponse } from "next/server";
import { z } from "zod";
import { getOrderByReferenceAndEmail } from "@/lib/orders/store";
import { rateLimit } from "@/lib/utilities/rate-limit";
import { isSupabaseConfigured } from "@/data/store-config";

const schema = z.object({
  reference: z.string().min(6),
  email: z.string().email(),
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  const limited = rateLimit(`tracking:${ip}`, 20, 60_000);
  if (!limited.success) {
    return NextResponse.json({ error: "Too many attempts" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Order reference and matching email are required" }, { status: 400 });
  }

  const order = getOrderByReferenceAndEmail(parsed.data.reference, parsed.data.email);
  if (!order) {
    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        found: false,
        message:
          "Online order tracking will become available after checkout and order services are connected. No matching local demo order was found for that reference and email.",
      });
    }
    return NextResponse.json({ found: false, message: "No order matched that reference and email." });
  }

  return NextResponse.json({
    found: true,
    order: {
      reference: order.reference,
      email: order.email,
      paymentStatus: order.paymentStatus,
      fulfillmentStatus: order.fulfillmentStatus,
      total: order.total,
      createdAt: order.createdAt,
      shippingMethodName: order.shippingMethodName,
      items: order.items.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        packageSize: item.packageSize,
      })),
    },
  });
}
