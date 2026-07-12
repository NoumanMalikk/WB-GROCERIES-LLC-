import Stripe from "stripe";

let stripe: Stripe | null | undefined;

export function getStripeServer(): Stripe | null {
  if (stripe !== undefined) return stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    stripe = null;
    return stripe;
  }
  stripe = new Stripe(key);
  return stripe;
}
