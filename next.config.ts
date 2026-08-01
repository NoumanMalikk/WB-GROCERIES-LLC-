import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only. The Playwright suite drives the dev server over 127.0.0.1, which
  // Next treats as a cross-origin dev request and blocks — that blocks the
  // client bundle too, so nothing hydrates and every interactive test fails.
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    // Vercel's image optimizer is metered and returns 402
    // (OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED) on this project's plan, which
    // breaks every /_next/image request. Serve the assets directly instead:
    // scripts/optimize-images.mjs already ships them as right-sized WebP, so
    // there is nothing left for the optimizer to do.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
