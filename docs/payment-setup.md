# Payment setup

Primary provider for this storefront: **Square** (embedded Web Payments card form on checkout).

See the full walkthrough: [square-setup.md](./square-setup.md)

## Quick path

1. Create a Square Developer app.
2. Add these env vars (Vercel or `.env.local`):
   - `SQUARE_APPLICATION_ID`
   - `NEXT_PUBLIC_SQUARE_APPLICATION_ID` (same value)
   - `SQUARE_ACCESS_TOKEN` (secret)
   - `SQUARE_LOCATION_ID`
   - `NEXT_PUBLIC_SQUARE_LOCATION_ID` (same value — required for on-page card fields)
   - `SQUARE_ENVIRONMENT=sandbox` (then `production`)
   - `SQUARE_WEBHOOK_SIGNATURE_KEY` (secret)
   - `NEXT_PUBLIC_SITE_URL=https://your-domain`
   - Keep `NEXT_PUBLIC_STORE_MODE=demo` until sandbox tests pass, then `live`
3. Webhook endpoint: `https://your-domain/api/square/webhook`  
   Events: `payment.updated`, `order.updated`
4. Redeploy and run a sandbox checkout test (card fields stay on `/checkout`).
5. Switch to production credentials + `SQUARE_ENVIRONMENT=production` + `NEXT_PUBLIC_STORE_MODE=live`.

## Security

- Never commit secrets.
- Never put `SQUARE_ACCESS_TOKEN` or `SQUARE_WEBHOOK_SIGNATURE_KEY` in `NEXT_PUBLIC_*` vars.
- Card data is tokenized by Square’s Web Payments SDK on your checkout page; raw card numbers never hit our API.
- Webhooks reject unsigned / invalid signatures.

Stripe remains an optional fallback if Square is not configured and Stripe keys are present.
