# WB Groceries

Customer-facing grocery e-commerce storefront for **WB GROCERIES LLC** (public brand: **WB Groceries**).

Tagline: **Stock the kitchen. Simplify the week.**

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zustand (cart / wishlist)
- Zod + React Hook Form
- Stripe readiness
- Supabase readiness
- Resend readiness
- Vitest + Playwright

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Demonstration mode is the default when Stripe/Supabase/Resend credentials are absent. Shopping works; paid orders are not created.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript
- `npm test` — unit tests
- `npm run test:e2e` — Playwright tests

## Documentation

- [Setup](docs/setup.md)
- [Deployment](docs/deployment.md)
- [Product editing](docs/product-editing.md)
- [Image sourcing](docs/image-sourcing.md)
- [Payment setup](docs/payment-setup.md)
- [Launch checklist](docs/launch-checklist.md)

## Important launch notes

1. Replace every product image placeholder with authorized exact packshots.
2. Confirm supplier, size, pack count, price, weight, ingredients, nutrition and allergens with the owner.
3. Connect Stripe, tax, shipping, Resend and optional Supabase before accepting real orders.
4. Have legal templates reviewed before launch.

Legal business name used in footer copyright, policies, checkout documentation, emails and organization schema: **WB GROCERIES LLC**.
