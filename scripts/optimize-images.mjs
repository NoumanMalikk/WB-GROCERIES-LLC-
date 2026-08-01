/**
 * Convert the raw PNG packshots in /public into web-sized WebP files.
 *
 * The source packshots are 1536x1024 PNGs of ~1.5 MB each. They are never
 * displayed above ~600 CSS pixels, so shipping them as-is costs roughly 89 MB
 * across the storefront. This rewrites them as WebP at a sensible cap and
 * removes the PNG originals (recoverable from git history).
 *
 * The studio shots also carry a lot of dead white margin, which makes products
 * render small inside `object-contain` tiles. Trimming that margin and adding a
 * uniform pad back lets every packshot fill its card consistently.
 *
 * Finally it emits a `-<width>.webp` variant per breakpoint. Vercel's image
 * optimizer is metered and 402s on this project, so next/image runs through
 * image-loader.ts, which swaps in these files instead. Keep VARIANT_WIDTHS in
 * sync with `images.deviceSizes` + `images.imageSizes` in next.config.ts.
 *
 * Usage: node scripts/optimize-images.mjs [--keep-png]
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const KEEP_PNG = process.argv.includes("--keep-png");

const WHITE = "#ffffff";
/** Pixels within this distance of white are treated as backdrop, not product. */
const TRIM_THRESHOLD = 10;
/** Breathing room re-added around the trimmed subject, as a share of its longest edge. */
const PAD_RATIO = 0.05;

const TARGETS = [
  { dir: "public/products", maxSize: 1000, quality: 80 },
  { dir: "public/categories", maxSize: 1000, quality: 80 },
];

/** Widths emitted alongside each full-size WebP. Must match next.config.ts. */
const VARIANT_WIDTHS = [64, 128, 256, 384, 640];
/** Matches files this script generated, so they are never re-processed. */
const VARIANT_RE = new RegExp(`-(${VARIANT_WIDTHS.join("|")})\\.webp$`);

function collectPngs(dir) {
  const absolute = path.join(ROOT, dir);
  if (!fs.existsSync(absolute)) return [];

  return fs
    .readdirSync(absolute, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectPngs(entryPath);
      return entry.name.toLowerCase().endsWith(".png") ? [entryPath] : [];
    });
}

/** Full-size WebP files, excluding the `-<width>.webp` variants we generate. */
function collectFullSizeWebps(dir) {
  const absolute = path.join(ROOT, dir);
  if (!fs.existsSync(absolute)) return [];

  return fs
    .readdirSync(absolute, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectFullSizeWebps(entryPath);
      if (!entry.name.toLowerCase().endsWith(".webp")) return [];
      return VARIANT_RE.test(entry.name) ? [] : [entryPath];
    });
}

/**
 * Emits `name-<width>.webp` for every breakpoint.
 *
 * A variant is written even when the source is narrower than the breakpoint —
 * `withoutEnlargement` caps it at the source width, so the file is no bigger,
 * and the loader can address every width without risking a 404. Tall packshots
 * (Dawn, Heinz, Prego, Quaker) are under 640px wide once trimmed and would
 * otherwise have no -640 file to serve.
 */
async function emitVariants(relativePath, { quality }) {
  const source = path.join(ROOT, relativePath);
  let bytes = 0;
  let written = 0;

  for (const width of VARIANT_WIDTHS) {
    const destination = source.replace(/\.webp$/i, `-${width}.webp`);
    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(destination);
    bytes += fs.statSync(destination).size;
    written += 1;
  }

  return { bytes, written };
}

async function convert(relativePath, { maxSize, quality }) {
  const source = path.join(ROOT, relativePath);
  const destination = source.replace(/\.png$/i, ".webp");
  const before = fs.statSync(source).size;

  const trimmed = await sharp(source)
    .flatten({ background: WHITE })
    .trim({ background: WHITE, threshold: TRIM_THRESHOLD })
    .toBuffer();

  const { width = 0, height = 0 } = await sharp(trimmed).metadata();
  const pad = Math.round(Math.max(width, height) * PAD_RATIO);

  await sharp(trimmed)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: WHITE })
    .resize({ width: maxSize, height: maxSize, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(destination);

  const after = fs.statSync(destination).size;
  if (!KEEP_PNG) fs.unlinkSync(source);

  return { before, after };
}

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

let variantBytes = 0;
let variantCount = 0;

for (const target of TARGETS) {
  for (const file of collectPngs(target.dir)) {
    const { before, after } = await convert(file, target);
    totalBefore += before;
    totalAfter += after;
    count += 1;
  }

  // Runs whether or not PNGs were present, so variants can be regenerated
  // from the committed WebP originals alone.
  for (const file of collectFullSizeWebps(target.dir)) {
    const { bytes, written } = await emitVariants(file, target);
    variantBytes += bytes;
    variantCount += written;
  }
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
const saved = totalBefore - totalAfter;
const percent = totalBefore ? Math.round((saved / totalBefore) * 100) : 0;

console.log(`Wrote ${variantCount} responsive variants (${mb(variantBytes)})`);
console.log(`Converted ${count} images`);
console.log(`  before: ${mb(totalBefore)}`);
console.log(`  after:  ${mb(totalAfter)}`);
console.log(`  saved:  ${mb(saved)} (${percent}%)`);
