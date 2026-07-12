"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/data/types";
import { formatPrice } from "@/lib/utilities/format";
import { useCartStore } from "@/lib/cart/store";
import { useWishlistStore } from "@/lib/cart/wishlist-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utilities/cn";
import { useState } from "react";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const toggle = useWishlistStore((s) => s.toggle);
  const wished = useWishlistStore((s) => s.productIds.includes(product.id));
  const [added, setAdded] = useState(false);

  return (
    <article className="group flex h-full min-h-[420px] max-h-[460px] flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="block p-3">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
            <Image
              src={product.images[0]?.src ?? "/brand/logo-icon.svg"}
              alt={product.imageAltText}
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
        <button
          type="button"
          aria-label={wished ? `Remove ${product.title} from wishlist` : `Save ${product.title} to wishlist`}
          className={cn(
            "absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/95 transition",
            wished && "text-tomato",
          )}
          onClick={() => toggle(product.id)}
        >
          <Heart className={cn("h-4 w-4", wished && "fill-current")} />
        </button>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{product.brand}</p>
        <h3 className="product-card-title mt-1 font-heading text-sm font-bold leading-snug text-foreground">
          <Link href={`/product/${product.slug}`} title={product.title} className="hover:text-grocery">
            {product.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs text-muted">
          {product.packageSize}
          {product.packCount > 1 ? ` · Pack of ${product.packCount}` : ""}
        </p>
        <div className="mt-auto space-y-3 pt-3">
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="text-lg font-bold tabular-nums text-grocery">{formatPrice(product.price)}</p>
              {product.unitPrice && <p className="text-xs tabular-nums text-muted">{product.unitPrice}</p>}
            </div>
            <Badge className={product.stockStatus === "in_stock" ? "" : "bg-orange/20 text-warning"}>
              {product.stockStatus === "in_stock" ? "In stock" : "Unavailable"}
            </Badge>
          </div>
          <Button
            className="w-full"
            disabled={product.stockStatus === "out_of_stock"}
            onClick={() => {
              addItem(product.id, 1, product.maximumOrderQuantity);
              setAdded(true);
              window.dispatchEvent(new CustomEvent("wb:open-cart"));
              setTimeout(() => setAdded(false), 1200);
            }}
          >
            {added ? "Added" : "Add to cart"}
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center">
        <p className="font-heading text-xl font-bold text-grocery">No products match these filters</p>
        <p className="mt-2 text-sm text-muted">Try clearing filters or browsing all products.</p>
        <Link href="/shop" className="mt-4 inline-flex text-sm font-semibold text-grocery underline">
          Browse all products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
