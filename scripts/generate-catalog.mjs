import fs from "fs";

const src = fs.readFileSync("data/products.ts", "utf8");
const marker = "export const products: Product[] = assertMinimumPrices(";
const start = src.indexOf(marker);
const jsonStart = src.indexOf("[", start + marker.length - 1);
const jsonEnd = src.indexOf("\n] as Product[]);", jsonStart);
if (start < 0 || jsonStart < 0 || jsonEnd < 0) {
  throw new Error(`Could not locate products array ${start} ${jsonStart} ${jsonEnd}`);
}
const products = JSON.parse(src.slice(jsonStart, jsonEnd + 2));

const cards = products.map((p) => ({
  id: p.id,
  slug: p.slug,
  brand: p.brand,
  title: p.title,
  packageSize: p.packageSize,
  packCount: p.packCount,
  price: p.price,
  unitPrice: p.unitPrice,
  image: p.images?.[0]?.src ?? "/brand/logo-icon.svg",
  imageAlt: p.imageAltText,
  stockStatus: p.stockStatus,
  maximumOrderQuantity: p.maximumOrderQuantity,
  category: p.category,
  secondaryCategories: p.secondaryCategories ?? [],
  weeklyEssential: !!p.weeklyEssential,
  featured: !!p.featured,
  shortDescription: p.shortDescription ?? "",
  synonyms: p.synonyms ?? [],
  shippingWeight: p.shippingWeight ?? 1,
}));

const searchIndex = products.map((p) => ({
  id: p.id,
  slug: p.slug,
  brand: p.brand,
  title: p.title,
  category: p.category,
  packageSize: p.packageSize,
  packCount: p.packCount,
  synonyms: p.synonyms ?? [],
  shortDescription: p.shortDescription,
  image: p.images?.[0]?.src ?? "/brand/logo-icon.svg",
}));

const related = Object.fromEntries(products.map((p) => [p.id, p.relatedProductIds ?? []]));
const brands = [...new Set(products.map((p) => p.brand))].sort((a, b) => a.localeCompare(b));

fs.writeFileSync(
  "data/catalog.ts",
  `import type { ProductCategorySlug, StockStatus } from "./types";

export interface ProductCardData {
  id: string;
  slug: string;
  brand: string;
  title: string;
  packageSize: string;
  packCount: number;
  price: number;
  unitPrice: string | null;
  image: string;
  imageAlt: string;
  stockStatus: StockStatus;
  maximumOrderQuantity: number;
  category: ProductCategorySlug;
  secondaryCategories: ProductCategorySlug[];
  weeklyEssential: boolean;
  featured: boolean;
  shortDescription: string;
  synonyms: string[];
  shippingWeight: number;
}

export interface SearchIndexItem {
  id: string;
  slug: string;
  brand: string;
  title: string;
  category: ProductCategorySlug;
  packageSize: string;
  packCount: number;
  synonyms: string[];
  shortDescription: string;
  image: string;
}

export const productCards: ProductCardData[] = ${JSON.stringify(cards, null, 2)};

export const searchIndex: SearchIndexItem[] = ${JSON.stringify(searchIndex, null, 2)};

export const catalogBrands: string[] = ${JSON.stringify(brands, null, 2)};

export const relatedProductIds: Record<string, string[]> = ${JSON.stringify(related, null, 2)};

export function getCardById(id: string) {
  return productCards.find((item) => item.id === id);
}

export function getCardsByIds(ids: string[]) {
  return ids.map((id) => getCardById(id)).filter((item): item is ProductCardData => Boolean(item));
}

export function getCrossSellCards(productIds: string[]) {
  const seen = new Set(productIds);
  const out: ProductCardData[] = [];
  for (const id of productIds) {
    for (const relatedId of relatedProductIds[id] ?? []) {
      if (seen.has(relatedId)) continue;
      const card = getCardById(relatedId);
      if (!card) continue;
      seen.add(relatedId);
      out.push(card);
    }
  }
  return out.slice(0, 4);
}

export function searchCatalog(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return searchIndex.filter((item) => {
    const haystack = [
      item.title,
      item.brand,
      item.category,
      item.packageSize,
      String(item.packCount),
      item.shortDescription,
      ...item.synonyms,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q) || q.split(/\\s+/).every((part) => haystack.includes(part));
  });
}
`,
);

console.log(`Wrote data/catalog.ts with ${cards.length} cards`);
