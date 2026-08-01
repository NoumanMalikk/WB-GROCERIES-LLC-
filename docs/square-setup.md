# Square payment setup — WB Groceries

## What you will paste (from Square)

| Env variable | Where to get it | Public? |
|---|---|---|
| `SQUARE_APPLICATION_ID` | Developer Dashboard → your app → **Credentials** → Application ID | Copy also to `NEXT_PUBLIC_SQUARE_APPLICATION_ID` |
| `NEXT_PUBLIC_SQUARE_APPLICATION_ID` | Same Application ID as above | Yes (safe in browser) |
| `SQUARE_ACCESS_TOKEN` | Credentials → **Sandbox Access Token** (test) or **Production Access Token** (live) | **SECRET — server only** |
| `SQUARE_LOCATION_ID` | Developer Dashboard → **Locations** (or Square Dashboard → Account & Settings → Business → Locations) → Location ID | Server only |
| `SQUARE_ENVIRONMENT` | `sandbox` for testing, `production` for live cards | Server only |
| `SQUARE_WEBHOOK_SIGNATURE_KEY` | Developer Dashboard → your app → **Webhooks** → create subscription → Signature Key | **SECRET — server only** |
| `NEXT_PUBLIC_STORE_MODE` | Set `demo` until tests pass, then `live` | Public |
| `NEXT_PUBLIC_SITE_URL` | Your live site URL, e.g. `https://wb-groceries-llc.vercel.app` | Public |

## Exact clicks in Square

1. Go to [Square Developer Dashboard](https://developer.squareup.com/apps) and sign in with the client Square account.
2. Click **+** / **Create app** (name it e.g. `WB Groceries`).
3. Open the app → **Credentials**:
   - Copy **Sandbox Application ID** → paste as both `SQUARE_APPLICATION_ID` and `NEXT_PUBLIC_SQUARE_APPLICATION_ID`
   - Copy **Sandbox Access Token** → paste as `SQUARE_ACCESS_TOKEN`
4. Open **Locations** and copy the **Location ID** → `SQUARE_LOCATION_ID`
5. Set `SQUARE_ENVIRONMENT=sandbox`
6. Open **Webhooks** → **Add subscription**:
   - URL: `https://www.wbgroceries.com/api/square/webhook`
   - Events: at least `payment.updated` and `order.updated`
   - Copy the **Signature Key** → `SQUARE_WEBHOOK_SIGNATURE_KEY`
7. Put all values in **Vercel → Project → Settings → Environment Variables** (Production + Preview), then Redeploy.
8. Test checkout with Square sandbox test cards.
9. When ready for real money:
   - Switch Credentials tab to **Production**
   - Paste Production Application ID + Access Token + Location ID
   - Set `SQUARE_ENVIRONMENT=production`
   - Set `NEXT_PUBLIC_STORE_MODE=live`
   - Update webhook URL/subscription for production if needed
   - Redeploy

## Security rules already built into this site

- Access token and webhook signature key are **server-only** (never exposed to the browser).
- Customers pay on **Square-hosted checkout** (card data does not touch our form fields).
- Webhook requests must pass Square HMAC signature verification.
- Checkout API is rate-limited.
- Demo mode blocks live charging until `NEXT_PUBLIC_STORE_MODE=live` and Square keys are present.
- Do **not** paste Access Token / Signature Key into GitHub, chat screenshots, or public docs.

## After you paste values here

Send only these (you can redact middle characters if you want):

1. Application ID  
2. Access Token (sandbox first)  
3. Location ID  
4. Webhook Signature Key  
5. Confirm environment: `sandbox` or `production`  
6. Confirm site URL  

Then we will fill `.env.local` / Vercel and verify a test checkout.
