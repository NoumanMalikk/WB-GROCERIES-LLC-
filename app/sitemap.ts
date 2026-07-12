import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/store-config";
import { getActiveProducts } from "@/data/products";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const staticRoutes = [
    "", "/shop", "/categories", "/collections/under-10", "/collections/weekly-essentials",
    "/collections/pantry-staples", "/about", "/contact", "/faq", "/shipping", "/returns",
    "/food-information", "/privacy", "/terms", "/accessibility",
  ];
  return [
    ...staticRoutes.map((path) => ({ url: `${site}${path}`, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7 })),
    ...categories.map((category) => ({ url: `${site}/category/${category.slug}`, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...getActiveProducts().map((product) => ({ url: `${site}/product/${product.slug}`, changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
