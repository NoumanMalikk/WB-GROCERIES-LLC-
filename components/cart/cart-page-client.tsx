"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCartStore } from "@/lib/cart/store";
import { getCardById, getCrossSellCards } from "@/data/catalog";
import { cartSubtotal, lineTotal } from "@/lib/pricing";
import { formatPrice } from "@/lib/utilities/format";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { storeConfig } from "@/data/store-config";
import { ProductGrid } from "@/components/product/product-card";

export function CartPageClient() {
  const items = useCartStore((s) => s.items);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const product = getCardById(item.productId);
          return product ? { item, product } : null;
        })
        .filter(Boolean) as {
        item: (typeof items)[number];
        product: NonNullable<ReturnType<typeof getCardById>>;
      }[],
    [items],
  );

  const subtotal = cartSubtotal(lines.map(({ item, product }) => ({ price: product.price, quantity: item.quantity })));
  const crossSells = getCrossSellCards(items.map((i) => i.productId));

  if (lines.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center">
        <h1 className="font-heading text-3xl font-bold text-grocery">Your cart is empty</h1>
        <p className="mt-3 text-muted">Add products from the shop to build your grocery basket.</p>
        <Link href="/shop" className="mt-6 inline-flex h-11 items-center rounded-xl bg-gold px-5 font-semibold text-forest">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <h1 className="font-heading text-4xl font-bold text-grocery">Shopping cart</h1>
        <ul className="mt-8 space-y-4">
          {lines.map(({ item, product }) => (
            <li key={product.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-4 sm:flex-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.imageAlt} width={100} height={100} className="rounded-xl object-contain" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase text-muted">{product.brand}</p>
                <Link href={`/product/${product.slug}`} className="font-semibold hover:text-grocery">
                  {product.title}
                </Link>
                <p className="text-sm text-muted">
                  {product.packageSize}
                  {product.packCount > 1 ? ` · Pack of ${product.packCount}` : ""}
                </p>
                <p className="text-sm tabular-nums text-muted">{formatPrice(product.price)} each</p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <QuantitySelector
                    value={item.quantity}
                    max={product.maximumOrderQuantity}
                    onChange={(value) => setQuantity(product.id, value, product.maximumOrderQuantity)}
                  />
                  <p className="font-bold tabular-nums">{formatPrice(lineTotal(product.price, item.quantity))}</p>
                </div>
                <button type="button" className="mt-2 text-sm font-semibold text-error" onClick={() => removeItem(product.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        {crossSells.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 font-heading text-2xl font-bold text-grocery">Related products</h2>
            <ProductGrid products={crossSells} />
          </div>
        )}
      </div>
      <aside className="h-fit rounded-2xl border border-border bg-white p-5 lg:sticky lg:top-28">
        <h2 className="font-heading text-xl font-bold text-grocery">Order summary</h2>
        <div className="mt-4 flex justify-between text-sm">
          <span>Subtotal</span>
          <span className="font-bold tabular-nums">{formatPrice(subtotal)}</span>
        </div>
        <p className="mt-3 text-xs text-muted">{storeConfig.shipping.shippingMessage}</p>
        <p className="text-xs text-muted">{storeConfig.tax.message}</p>
        <Link href="/checkout" className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-gold font-semibold text-forest">
          Checkout
        </Link>
        <Link href="/shop" className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-xl border border-border font-semibold text-grocery">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
