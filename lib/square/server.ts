import { SquareClient, SquareEnvironment } from "square";

let client: SquareClient | null | undefined;

export function getSquareEnvironment(): "sandbox" | "production" {
  return process.env.SQUARE_ENVIRONMENT === "production" ? "production" : "sandbox";
}

export function isSquareConfigured(): boolean {
  return Boolean(
    process.env.SQUARE_ACCESS_TOKEN?.trim() &&
      process.env.SQUARE_LOCATION_ID?.trim() &&
      process.env.SQUARE_APPLICATION_ID?.trim(),
  );
}

export function getSquareLocationId(): string | null {
  const id = process.env.SQUARE_LOCATION_ID?.trim();
  return id || null;
}

export function getSquareApplicationId(): string | null {
  const id = process.env.SQUARE_APPLICATION_ID?.trim();
  return id || null;
}

export function getSquareWebhookSignatureKey(): string | null {
  const key = process.env.SQUARE_WEBHOOK_SIGNATURE_KEY?.trim();
  return key || null;
}

export function getSquareClient(): SquareClient | null {
  if (client !== undefined) return client;

  const token = process.env.SQUARE_ACCESS_TOKEN?.trim();
  if (!token || !isSquareConfigured()) {
    client = null;
    return client;
  }

  client = new SquareClient({
    token,
    environment:
      getSquareEnvironment() === "production"
        ? SquareEnvironment.Production
        : SquareEnvironment.Sandbox,
  });

  return client;
}

export function dollarsToCents(amount: number): bigint {
  return BigInt(Math.round(amount * 100));
}
