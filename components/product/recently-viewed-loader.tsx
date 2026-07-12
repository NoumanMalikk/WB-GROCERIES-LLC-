"use client";

import type { Product } from "@/data/types";
import { getProductById } from "@/data/products";
import { ProductDetail } from "./product-detail";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => undefined;
}

function getRecentlyViewed(productId: string): Product[] {
  try {
    const ids = JSON.parse(localStorage.getItem("wb-groceries-recently-viewed") || "[]") as string[];
    return ids
      .filter((id) => id !== productId)
      .map((id) => getProductById(id))
      .filter((item): item is Product => Boolean(item))
      .slice(0, 4);
  } catch {
    return [];
  }
}

export function RecentlyViewedLoader({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const recent = useSyncExternalStore(
    subscribe,
    () => getRecentlyViewed(product.id),
    () => [],
  );

  return <ProductDetail product={product} related={related} recentlyViewed={recent} />;
}
