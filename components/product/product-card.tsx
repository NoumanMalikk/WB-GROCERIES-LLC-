"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Heart, Plus } from "lucide-react";
import type { ProductCardData } from "@/data/catalog";
import { formatPrice } from "@/lib/utilities/format";
import { useCartStore } from "@/lib/cart/store";
import { useWishlistStore } from "@/lib/cart/wishlist-store";
import { cn } from "@/lib/utilities/cn";
import { useState } from "react";

export function ProductCard({ product, priority = false }: { product: ProductCardData; priority?: boolean }) {
  const addItem = useCartStore((s) => s.addItem);
  const toggle = useWishlistStore((s) => s.toggle);
  const wished = useWishlistStore((s) => s.productIds.includes(product.id));
  const [added, setAdded] = useState(false);
  const unavailable = product.stockStatus !== "in_stock";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-fresh/40 hover:shadow-[0_18px_36px_-18px_rgba(16,47,36,0.35)]">
      <div className="relative shrink-0 bg-[#faf7ef]">
        <Link href={`/product/${product.slug}`} className="block" aria-label={product.title}>
          <div className="relative aspect-square w-full">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 45vw, (max-width: 1280px) 30vw, 22vw"
              className={cn(
                "object-contain p-5 mix-blend-multiply transition duration-500 group-hover:scale-[1.04]",
                unavailable && "opacity-50",
              )}
            />
          </div>
        </Link>
        {product.packCount > 1 && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-grocery shadow-sm ring-1 ring-border/60">
            {product.packCount}-pack
          </span>
        )}
        <button
          type="button"
          aria-label={wished ? `Remove ${product.title} from wishlist` : `Save ${product.title} to wishlist`}
          aria-pressed={wished}
          className={cn(
            "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-muted shadow-sm ring-1 ring-border/60 transition hover:text-tomato",
            wished && "text-tomato",
          )}
          onClick={() => toggle(product.id)}
        >
          <Heart className={cn("h-4 w-4", wished && "fill-current")} />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-3">
        <p className="product-card-brand text-[11px] font-semibold uppercase tracking-[0.12em] text-fresh">
          {product.brand}
        </p>
        <h3 className="product-card-title font-sans-heading mt-1 text-sm font-semibold leading-snug text-foreground">
          <Link href={`/product/${product.slug}`} title={product.title} className="hover:text-grocery">
            {product.title}
          </Link>
        </h3>
        <p className="product-card-meta mt-1 text-xs text-muted">{product.packageSize}</p>
        <div className="mt-auto pt-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
            <p className="text-lg font-bold tabular-nums text-grocery">{formatPrice(product.price)}</p>
            {product.unitPrice && <p className="text-xs tabular-nums text-muted">{product.unitPrice}</p>}
          </div>
          <button
            type="button"
            disabled={unavailable}
            className={cn(
              "mt-3 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-xl text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:bg-border disabled:text-muted",
              added ? "bg-fresh text-white" : "bg-grocery text-white hover:bg-forest",
            )}
            onClick={() => {
              addItem(product.id, 1, product.maximumOrderQuantity);
              setAdded(true);
              window.dispatchEvent(new CustomEvent("wb:open-cart"));
              setTimeout(() => setAdded(false), 1200);
            }}
          >
            {unavailable ? (
              "Unavailable"
            ) : added ? (
              <>
                <Check className="h-4 w-4" aria-hidden /> Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" aria-hidden /> Add to cart
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({
  products,
  columns = "four",
}: {
  products: ProductCardData[];
  columns?: "two" | "four" | "five";
}) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center">
        <p className="font-heading text-xl font-bold text-grocery">Nothing matches those filters</p>
        <p className="mt-2 text-sm text-muted">Clear a filter or browse the whole shop.</p>
        <Link href="/shop" className="mt-4 inline-flex text-sm font-semibold text-grocery underline">
          Browse all products
        </Link>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 items-stretch gap-3 sm:gap-4",
        columns !== "two" && "md:grid-cols-3",
        columns === "five" && "xl:grid-cols-5",
        columns === "four" && "xl:grid-cols-4",
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
