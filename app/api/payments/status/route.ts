import { NextResponse } from "next/server";
import { getActivePaymentProvider, isDemoCheckout } from "@/lib/checkout/demo";
import { getSquareEnvironment } from "@/lib/square/server";

/** Public readiness check — never returns secrets. */
export async function GET() {
  const provider = getActivePaymentProvider();
  return NextResponse.json({
    demoCheckout: isDemoCheckout(),
    provider,
    squareEnvironment: provider === "square" ? getSquareEnvironment() : null,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? null,
    storeMode: process.env.NEXT_PUBLIC_STORE_MODE ?? "demo",
  });
}
