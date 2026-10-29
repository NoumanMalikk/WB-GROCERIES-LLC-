import { Suspense } from "react";
import { getActiveProducts } from "@/data/products";
import { toProductCards } from "@/data/product-mappers";
import { ShopCatalog } from "@/components/commerce/shop-catalog";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Shop All Products | WB Groceries",
  description: "Browse all packaged groceries, snacks, beverages and household essentials from WB Groceries.",
  path: "/shop",
});

export default function ShopPage() {
  const products = toProductCards(getActiveProducts());
  return (
    <Suspense fallback={<div className="p-10">Loading products...</div>}>
      <ShopCatalog
        products={products}
        title="Shop all products"
        description="Every product in the store. Filter by aisle, brand or price, or sort to find what you need."
        eyebrow={`${products.length} products`}
        tone="sage"
      />
    </Suspense>
  );
}
