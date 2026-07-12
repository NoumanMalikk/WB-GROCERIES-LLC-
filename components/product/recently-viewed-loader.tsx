"use client";

import type { Product } from "@/data/types";
import type { ProductCardData } from "@/data/catalog";
import { getCardById } from "@/data/catalog";
import { ProductDetail } from "./product-detail";
import { useSyncExternalStore } from "react";

const RECENT_KEY = "wb-groceries-recently-viewed";
const EMPTY_RECENT: ProductCardData[] = [];

let cachedRecentRaw: string | null = null;
let cachedRecentIds: string[] = [];
let cachedProductId: string | null = null;
let cachedCards: ProductCardData[] = EMPTY_RECENT;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getRecentlyViewed(productId: string): ProductCardData[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY) || "[]";
    if (raw === cachedRecentRaw && productId === cachedProductId) return cachedCards;

    const ids = JSON.parse(raw) as string[];
    cachedRecentRaw = raw;
    cachedRecentIds = ids;
    cachedProductId = productId;
    cachedCards = ids
      .filter((id) => id !== productId)
      .map((id) => getCardById(id))
      .filter((item): item is ProductCardData => Boolean(item))
      .slice(0, 4);
    return cachedCards;
  } catch {
    return EMPTY_RECENT;
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
    () => EMPTY_RECENT,
  );

  return <ProductDetail product={product} related={related} recentlyViewed={recent} />;
}
