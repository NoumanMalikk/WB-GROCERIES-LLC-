import { Suspense } from "react";
import { getActiveProducts } from "@/data/products";
import { toProductCards } from "@/data/product-mappers";
import { searchProducts } from "@/lib/search";
import { ShopCatalog } from "@/components/commerce/shop-catalog";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Search | WB Groceries",
  description: "Search WB Groceries products by title, brand, category and package details.",
  path: "/search",
  noIndex: true,
});

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const products = searchProducts(toProductCards(getActiveProducts()), q);
  return (
    <Suspense fallback={<div className="p-10">Searching...</div>}>
      <ShopCatalog
        products={products}
        title={q ? `Results for “${q}”` : "Search products"}
        description={q ? undefined : "Try oats, coffee, pasta, chips, cookies or cleaning."}
      />
    </Suspense>
  );
}
