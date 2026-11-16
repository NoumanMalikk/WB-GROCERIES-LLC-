/**
 * Convert / recompress storefront images into static WebP variants.
 *
 * Vercel's Image Optimization is metered and 402s on free plans, so next/image
 * uses image-loader.ts to pick these pre-built files — no runtime resize cost.
 *
 * Usage: node scripts/optimize-images.mjs [--keep-png] [--force]
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const KEEP_PNG = process.argv.includes("--keep-png");
const FORCE = process.argv.includes("--force");

const WHITE = "#ffffff";
const TRIM_THRESHOLD = 10;
const PAD_RATIO = 0.05;

/**
 * Cap full-size masters small enough that even the loader fallback stays cheap.
 * Variants cover the breakpoints next/image requests.
 */
const TARGETS = [
  { dir: "public/products", maxSize: 720, quality: 72 },
  { dir: "public/categories", maxSize: 720, quality: 72 },
];

/** Must match image-loader.ts and next.config.ts imageSizes + deviceSizes. */
const VARIANT_WIDTHS = [64, 128, 256, 384, 640];
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

async function convertPng(relativePath, { maxSize, quality }) {
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

/** Recompress an existing master WebP down to the current size/quality budget. */
async function recompressWebp(relativePath, { maxSize, quality }) {
  const source = path.join(ROOT, relativePath);
  const before = fs.statSync(source).size;
  const temp = `${source}.tmp.webp`;

  const meta = await sharp(source).metadata();
  const needsResize = (meta.width ?? 0) > maxSize || (meta.height ?? 0) > maxSize;

  let pipeline = sharp(source);
  if (needsResize) {
    pipeline = pipeline.resize({
      width: maxSize,
      height: maxSize,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  await pipeline.webp({ quality, effort: 6 }).toFile(temp);

  const after = fs.statSync(temp).size;
  if (FORCE || after < before) {
    fs.renameSync(temp, source);
    return { before, after: fs.statSync(source).size, rewritten: true };
  }

  fs.unlinkSync(temp);
  return { before, after: before, rewritten: false };
}

let totalBefore = 0;
let totalAfter = 0;
let count = 0;
let recompressed = 0;

let variantBytes = 0;
let variantCount = 0;

for (const target of TARGETS) {
  for (const file of collectPngs(target.dir)) {
    const { before, after } = await convertPng(file, target);
    totalBefore += before;
    totalAfter += after;
    count += 1;
  }

  for (const file of collectFullSizeWebps(target.dir)) {
    const result = await recompressWebp(file, target);
    totalBefore += result.before;
    totalAfter += result.after;
    if (result.rewritten) recompressed += 1;

    const { bytes, written } = await emitVariants(file, target);
    variantBytes += bytes;
    variantCount += written;
  }
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
const saved = totalBefore - totalAfter;
const percent = totalBefore ? Math.round((saved / totalBefore) * 100) : 0;

console.log(`Wrote ${variantCount} responsive variants (${mb(variantBytes)})`);
console.log(`Converted ${count} PNGs; recompressed ${recompressed} WebP masters`);
console.log(`  before: ${mb(totalBefore)}`);
console.log(`  after:  ${mb(totalAfter)}`);
console.log(`  saved:  ${mb(saved)} (${percent}%)`);
