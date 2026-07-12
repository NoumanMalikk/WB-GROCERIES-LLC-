# Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add environment variables from `.env.example`.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Set `NEXT_PUBLIC_STORE_MODE=live` only after Stripe, tax, shipping and email are verified.
6. Deploy.
7. Configure the Stripe webhook endpoint: `https://YOUR_DOMAIN/api/stripe/webhook`.
8. Submit `/sitemap.xml` to search consoles after launch.

## Security headers

The Next.js config adds basic security headers. Review Content Security Policy before enabling third-party scripts.
