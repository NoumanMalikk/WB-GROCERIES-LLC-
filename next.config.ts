import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only. The Playwright suite drives the dev server over 127.0.0.1, which
  // Next treats as a cross-origin dev request and blocks — that blocks the
  // client bundle too, so nothing hydrates and every interactive test fails.
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    // Never hit Vercel's metered Image Optimization API (402 on free plans).
    // image-loader.ts swaps in prebuilt -64/-128/-256/-384/-640.webp files.
    loader: "custom",
    loaderFile: "./image-loader.ts",
    imageSizes: [64, 128, 256],
    deviceSizes: [384, 640],
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
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
      {
        source: "/products/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/categories/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/brand/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
