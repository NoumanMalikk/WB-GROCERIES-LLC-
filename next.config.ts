import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only. The Playwright suite drives the dev server over 127.0.0.1, which
  // Next treats as a cross-origin dev request and blocks — that blocks the
  // client bundle too, so nothing hydrates and every interactive test fails.
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    // Packshots are local WebP (see scripts/optimize-images.mjs); the optimizer
    // resizes them per breakpoint and serves AVIF where supported. Brand assets
    // are SVG, which next/image passes through untouched.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
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
