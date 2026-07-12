# Payment setup

1. Create a Stripe account.
2. Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.
3. Add `STRIPE_WEBHOOK_SECRET` for `/api/stripe/webhook`.
4. Keep `NEXT_PUBLIC_STORE_MODE=demo` until end-to-end payment tests pass.
5. Configure Stripe Tax or another tax provider; do not hardcode one rate for every customer.
6. Configure shipping methods in `data/store-config.ts` or a connected provider.
7. Test checkout, webhook verification, order creation, success page and confirmation email.

In demo mode the store never collects card numbers through custom fields and never marks an order paid.
