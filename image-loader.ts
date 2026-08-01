/**
 * next/image loader for statically pre-sized assets.
 *
 * Vercel's Image Optimization is metered and returns 402 on this project's
 * plan, which blanked every product image in production. Rather than pay per
 * request to resize files we control, `scripts/optimize-images.mjs` emits a
 * `-<width>.webp` next to each packshot and this loader picks the right one,
 * so `sizes`/`srcSet` still work and phones stop downloading desktop images.
 *
 * Keep VARIANT_WIDTHS in sync with the script and with `images.deviceSizes` +
 * `images.imageSizes` in next.config.ts.
 */
const VARIANT_WIDTHS = [64, 128, 256, 384, 640];

export default function wbImageLoader({ src, width }: { src: string; width: number }): string {
  // SVG brand assets are resolution-independent; anything remote or already
  // variant-suffixed is passed through untouched.
  if (!src.endsWith(".webp") || /-\d+\.webp$/.test(src)) return src;

  const variant = VARIANT_WIDTHS.find((candidate) => candidate >= width);
  // Wider than every variant (or an exact miss) falls back to the full-size file.
  return variant ? src.replace(/\.webp$/, `-${variant}.webp`) : src;
}
