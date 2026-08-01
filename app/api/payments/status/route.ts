import { NextResponse } from "next/server";
import { getActivePaymentProvider, isDemoCheckout } from "@/lib/checkout/demo";
import {
  getSquareApplicationId,
  getSquareEnvironment,
  getSquareLocationId,
} from "@/lib/square/server";

/** Public readiness check — never returns secrets. */
export async function GET() {
  const provider = getActivePaymentProvider();
  const applicationId =
    process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID?.trim() || getSquareApplicationId();
  const locationId =
    process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID?.trim() || getSquareLocationId();

  return NextResponse.json({
    demoCheckout: isDemoCheckout(),
    provider,
    squareEnvironment: provider === "square" ? getSquareEnvironment() : null,
    squareApplicationId: provider === "square" ? applicationId : null,
    squareLocationId: provider === "square" ? locationId : null,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? null,
    storeMode: process.env.NEXT_PUBLIC_STORE_MODE ?? "demo",
  });
}
