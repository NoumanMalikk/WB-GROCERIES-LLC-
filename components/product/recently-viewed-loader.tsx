"use client";

import type { Product } from "@/data/types";
import type { ProductCardData } from "@/data/catalog";
import { getCardById } from "@/data/catalog";
import { ProductDetail } from "./product-detail";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => undefined;
}

function getRecentlyViewed(productId: string): ProductCardData[] {
  try {
    const ids = JSON.parse(localStorage.getItem("wb-groceries-recently-viewed") || "[]") as string[];
    return ids
      .filter((id) => id !== productId)
      .map((id) => getCardById(id))
      .filter((item): item is ProductCardData => Boolean(item))
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
  related: ProductCardData[];
}) {
  const recent = useSyncExternalStore(
    subscribe,
    () => getRecentlyViewed(product.id),
    () => [],
  );

  return <ProductDetail product={product} related={related} recentlyViewed={recent} />;
}
