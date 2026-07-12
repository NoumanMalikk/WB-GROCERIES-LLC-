"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useCartStore } from "@/lib/cart/store";
import { getProductById, getCrossSells } from "@/data/products";
import { formatPrice } from "@/lib/utilities/format";
import { cartSubtotal, lineTotal } from "@/lib/pricing";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { Button } from "@/components/ui/button";
import { storeConfig } from "@/data/store-config";
import { cn } from "@/lib/utilities/cn";

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    const closeHandler = () => setOpen(false);
    window.addEventListener("wb:open-cart", openHandler);
    window.addEventListener("wb:close-cart", closeHandler);
    return () => {
      window.removeEventListener("wb:open-cart", openHandler);
      window.removeEventListener("wb:close-cart", closeHandler);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          return { item, product };
        })
        .filter(Boolean) as { item: { productId: string; quantity: number }; product: NonNullable<ReturnType<typeof getProductById>> }[],
    [items],
  );

  const subtotal = cartSubtotal(lines.map(({ item, product }) => ({ price: product.price, quantity: item.quantity })));
  const crossSells = getCrossSells(items.map((i) => i.productId));

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn("absolute inset-0 bg-forest/50 transition", open ? "opacity-100" : "opacity-0")}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-border bg-white px-4 py-4">
          <h2 className="font-heading text-xl font-bold text-grocery">Your cart</h2>
          <Button type="button" variant="secondary" size="icon" aria-label="Close cart" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {lines.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-white p-8 text-center">
              <p className="font-heading text-lg font-bold">Your cart is empty</p>
              <p className="mt-2 text-sm text-muted">Browse weekly essentials to start your basket.</p>
              <Link
                href="/collections/weekly-essentials"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-gold px-5 font-semibold text-forest"
              >
                Shop weekly essentials
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map(({ item, product }) => (
                <li key={product.id} className="flex gap-3 rounded-2xl border border-border bg-white p-3">
                  <Image src={product.images[0].src} alt="" width={72} height={72} className="rounded-xl object-contain" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase text-muted">{product.brand}</p>
                    <Link href={`/product/${product.slug}`} className="line-clamp-2 text-sm font-semibold hover:text-grocery" onClick={() => setOpen(false)}>
                      {product.title}
                    </Link>
                    <p className="text-xs text-muted">{product.packageSize}</p>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                      <QuantitySelector
                        value={item.quantity}
                        max={product.maximumOrderQuantity}
                        onChange={(value) => setQuantity(product.id, value, product.maximumOrderQuantity)}
                      />
                      <p className="font-semibold tabular-nums">{formatPrice(lineTotal(product.price, item.quantity))}</p>
                    </div>
                    <button type="button" className="mt-2 text-xs font-semibold text-error" onClick={() => removeItem(product.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {crossSells.length > 0 && lines.length > 0 && (
            <div className="mt-6">
              <h3 className="font-heading text-sm font-bold text-grocery">You might also need</h3>
              <ul className="mt-3 space-y-2">
                {crossSells.map((product) => (
                  <li key={product.id} className="flex items-center justify-between gap-2 rounded-xl bg-white p-2">
                    <Link href={`/product/${product.slug}`} className="text-sm font-medium" onClick={() => setOpen(false)}>
                      {product.title}
                    </Link>
                    <span className="text-sm tabular-nums">{formatPrice(product.price)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-border bg-white p-4">
          <div className="flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <span className="text-lg font-bold tabular-nums">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs text-muted">{storeConfig.shipping.shippingMessage}</p>
          <p className="text-xs text-muted">{storeConfig.tax.message}</p>
          <div className="mt-4 grid gap-2">
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className={`inline-flex h-12 w-full items-center justify-center rounded-xl bg-gold font-semibold text-forest ${lines.length === 0 ? "pointer-events-none opacity-50" : ""}`}
            >
              Checkout
            </Link>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-border bg-white font-semibold text-grocery"
            >
              View cart
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
