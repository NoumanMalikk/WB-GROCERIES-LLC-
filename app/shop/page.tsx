import { Suspense } from "react";
import { getActiveProducts } from "@/data/products";
import { ShopCatalog } from "@/components/commerce/shop-catalog";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Shop All Products | WB Groceries",
  description: "Browse all packaged groceries, snacks, beverages and household essentials from WB Groceries.",
  path: "/shop",
});

export default function ShopPage() {
  const products = getActiveProducts();
  return (
    <Suspense fallback={<div className="p-10">Loading products...</div>}>
      <ShopCatalog
        products={products}
        title="Shop all products"
        description="Search, filter and sort the complete WB Groceries catalogue."
      />
    </Suspense>
  );
}
