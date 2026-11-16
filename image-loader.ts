/**
 * Legacy custom loader — unused.
 *
 * next.config.ts sets `images.unoptimized: true`, so Next/Vercel never runs
 * Image Optimization. Components call `sizedWebp()` and request prebuilt
 * `-<width>.webp` files from /public instead.
 *
 * Kept so older deploys that still reference loaderFile do not break builds.
 */
export default function wbImageLoader({ src }: { src: string; width: number }): string {
  return src;
}
