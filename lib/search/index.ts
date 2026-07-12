import type { ProductCategorySlug } from "@/data/types";
import type { ProductCardData } from "@/data/catalog";

export type ProductSort =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc";

export interface ProductFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  underTen?: boolean;
  weeklyEssential?: boolean;
  availability?: string;
  packCount?: number;
  query?: string;
}

function normalize(value: string) {
  return value.toLowerCase().trim();
}

export function searchProducts(products: ProductCardData[], query: string): ProductCardData[] {
  const q = normalize(query);
  if (!q) return products;
  return products.filter((product) => {
    const haystack = [
      product.title,
      product.brand,
      product.category,
      product.packageSize,
      String(product.packCount),
      product.shortDescription,
      ...product.synonyms,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q) || q.split(/\s+/).every((part) => haystack.includes(part));
  });
}

export function filterProducts(products: ProductCardData[], filters: ProductFilters): ProductCardData[] {
  let result = [...products];
  if (filters.query) result = searchProducts(result, filters.query);
  if (filters.category) {
    result = result.filter(
      (p) =>
        p.category === filters.category ||
        p.secondaryCategories.includes(filters.category as ProductCategorySlug),
    );
  }
  if (filters.brand) result = result.filter((p) => p.brand === filters.brand);
  if (typeof filters.minPrice === "number") result = result.filter((p) => p.price >= filters.minPrice!);
  if (typeof filters.maxPrice === "number") result = result.filter((p) => p.price <= filters.maxPrice!);
  if (filters.underTen) result = result.filter((p) => p.price < 10);
  if (filters.weeklyEssential) result = result.filter((p) => p.weeklyEssential);
  if (filters.availability) result = result.filter((p) => p.stockStatus === filters.availability);
  if (typeof filters.packCount === "number") result = result.filter((p) => p.packCount === filters.packCount);
  return result;
}

export function sortProducts(products: ProductCardData[], sort: ProductSort = "featured"): ProductCardData[] {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price || a.title.localeCompare(b.title));
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price || a.title.localeCompare(b.title));
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "featured":
    default:
      return sorted.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          Number(b.weeklyEssential) - Number(a.weeklyEssential) ||
          a.title.localeCompare(b.title),
      );
  }
}
