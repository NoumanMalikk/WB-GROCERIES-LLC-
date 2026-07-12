# Setup

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to your local or production URL.
3. Leave `NEXT_PUBLIC_STORE_MODE=demo` until Stripe and order services are ready.
4. Optionally set `SUPPORT_EMAIL` and `CONTACT_FORM_RECIPIENT`.
5. Run `npm install` and `npm run dev`.

## Demo mode behavior

- All 26 products load
- Search, filters, sorting, wishlist and cart work
- Checkout UI is testable
- No real card collection
- No paid order confirmation
- Emails are logged instead of sent

## Optional integrations

- Stripe keys for live checkout
- Supabase for accounts and durable order storage
- Resend for transactional email
- GA / Meta Pixel IDs after consent configuration
