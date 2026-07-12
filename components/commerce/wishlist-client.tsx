"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useWishlistStore } from "@/lib/cart/wishlist-store";
import { useCartStore } from "@/lib/cart/store";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/utilities/format";
import { Button } from "@/components/ui/button";

export function WishlistClient() {
  const productIds = useWishlistStore((s) => s.productIds);
  const remove = useWishlistStore((s) => s.remove);
  const addItem = useCartStore((s) => s.addItem);

  const products = useMemo(
    () => productIds.map((id) => getProductById(id)).filter(Boolean),
    [productIds],
  );

  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center">
        <h1 className="font-heading text-3xl font-bold text-grocery">Your wishlist is empty</h1>
        <p className="mt-3 text-muted">Save products while you browse and add them to your cart later.</p>
        <Link href="/shop" className="mt-6 inline-flex h-11 items-center rounded-xl bg-gold px-5 font-semibold text-forest">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-heading text-4xl font-bold text-grocery">Wishlist</h1>
      <ul className="mt-8 space-y-4">
        {products.map((product) =>
          product ? (
            <li key={product.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-4 sm:flex-row sm:items-center">
              <Image src={product.images[0].src} alt={product.imageAltText} width={96} height={96} className="rounded-xl object-contain" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase text-muted">{product.brand}</p>
                <Link href={`/product/${product.slug}`} className="font-semibold hover:text-grocery">
                  {product.title}
                </Link>
                <p className="text-sm text-muted">{product.packageSize}</p>
                <p className="mt-1 font-bold tabular-nums">{formatPrice(product.price)}</p>
                <p className="text-xs text-muted">{product.stockStatus === "in_stock" ? "In stock" : "Unavailable"}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  disabled={product.stockStatus !== "in_stock"}
                  onClick={() => addItem(product.id, 1, product.maximumOrderQuantity)}
                >
                  Add to cart
                </Button>
                <Button variant="secondary" onClick={() => remove(product.id)}>
                  Remove
                </Button>
              </div>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
}
