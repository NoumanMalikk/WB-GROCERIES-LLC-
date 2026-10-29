"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/data/types";
import type { ProductCardData } from "@/data/catalog";
import { formatPrice, formatWeight } from "@/lib/utilities/format";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart/store";
import { useWishlistStore } from "@/lib/cart/wishlist-store";
import { storeConfig } from "@/data/store-config";
import { ProductGrid } from "@/components/product/product-card";
import { Check, CreditCard, Heart, PackageSearch, Truck } from "lucide-react";
import { getCategoryBySlug } from "@/data/categories";
import { cn } from "@/lib/utilities/cn";

const RECENT_KEY = "wb-groceries-recently-viewed";

export function ProductDetail({
  product,
  related,
  recentlyViewed,
}: {
  product: Product;
  related: ProductCardData[];
  recentlyViewed: ProductCardData[];
}) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [zoom, setZoom] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const toggle = useWishlistStore((s) => s.toggle);
  const wished = useWishlistStore((s) => s.productIds.includes(product.id));

  useEffect(() => {
    try {
      const existing = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]") as string[];
      const next = [product.id, ...existing.filter((id) => id !== product.id)].slice(0, 8);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, [product.id]);

  const image = product.images[activeImage] ?? product.images[0];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 lg:pb-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="hover:text-grocery">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/category/${product.category}`} className="hover:text-grocery">
              {getCategoryBySlug(product.category)?.name ?? product.category.replace(/-/g, " ")}
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground">{product.title}</li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <button
            type="button"
            className="relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-3xl bg-[#faf7ef] ring-1 ring-border/70"
            onClick={() => setZoom(true)}
            aria-label="Zoom product image"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain p-10 mix-blend-multiply"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </button>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <button
                  key={img.src}
                  type="button"
                  className={cn(
                    "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#faf7ef] ring-1",
                    activeImage === index ? "ring-2 ring-grocery" : "ring-border",
                  )}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image src={img.src} alt="" fill sizes="80px" className="object-contain p-2 mix-blend-multiply" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fresh">{product.brand}</p>
          <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-grocery md:text-4xl">{product.title}</h1>
          <p className="mt-2 text-sm text-muted">
            {product.packageSize}
            {product.packCount > 1 ? ` · Pack of ${product.packCount}` : ""}
          </p>
          <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
            <p className="font-heading text-4xl font-bold tabular-nums text-grocery">{formatPrice(product.price)}</p>
            {product.unitPrice && <p className="pb-1.5 text-sm tabular-nums text-muted">{product.unitPrice}</p>}
          </div>
          <p
            className={cn(
              "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold",
              product.stockStatus === "in_stock" ? "text-success" : "text-warning",
            )}
          >
            {product.stockStatus === "in_stock" ? (
              <>
                <Check className="h-4 w-4" aria-hidden /> In stock
              </>
            ) : (
              "Unavailable"
            )}
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground">{product.shortDescription}</p>

          <div className="mt-6 space-y-4 rounded-2xl bg-white p-4 shadow-[0_18px_40px_-24px_rgba(16,47,36,0.4)] ring-1 ring-border/70">
            <div className="flex flex-wrap items-center gap-3">
              <QuantitySelector
                value={quantity}
                max={product.maximumOrderQuantity}
                onChange={setQuantity}
              />
              <Button
                variant="dark"
                className="min-w-40 flex-1"
                disabled={product.stockStatus !== "in_stock"}
                onClick={() => {
                  addItem(product.id, quantity, product.maximumOrderQuantity);
                  window.dispatchEvent(new CustomEvent("wb:open-cart"));
                }}
              >
                Add to cart
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
                onClick={() => toggle(product.id)}
              >
                <Heart className={cn("h-4 w-4", wished && "fill-tomato text-tomato")} />
              </Button>
            </div>
            <p className="text-xs text-muted">
              Up to {product.maximumOrderQuantity} per order · Ships at {formatWeight(product.shippingWeight)}
            </p>
          </div>

          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <Truck className="mt-0.5 h-4 w-4 shrink-0 text-fresh" aria-hidden />
              <span>{storeConfig.shipping.shippingMessage}</span>
            </li>
            <li className="flex items-start gap-3">
              <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-fresh" aria-hidden />
              <span>Pay by card on a secure checkout.</span>
            </li>
            <li className="flex items-start gap-3">
              <PackageSearch className="mt-0.5 h-4 w-4 shrink-0 text-fresh" aria-hidden />
              <span>
                Returns depend on product type and condition.{" "}
                <Link href="/returns" className="font-medium text-grocery underline underline-offset-2">
                  Read the returns policy
                </Link>
                .
              </span>
            </li>
          </ul>

          {product.foodProduct && (
            <p className="mt-5 rounded-xl bg-mint px-4 py-3 text-xs leading-relaxed text-grocery">{storeConfig.foodDisclaimer}</p>
          )}
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl bg-white p-6 ring-1 ring-border/70">
          <h2 className="font-heading text-2xl font-bold text-grocery">About this product</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{product.fullDescription}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {product.keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-fresh" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl bg-white p-6 ring-1 ring-border/70">
          <h2 className="font-heading text-2xl font-bold text-grocery">Storage and label</h2>
          <dl className="mt-3 space-y-3 text-sm text-muted">
            <div>
              <dt className="font-semibold text-foreground">Storage</dt>
              <dd>{product.storageInstructions}</dd>
            </div>
            {product.preparationInstructions && (
              <div>
                <dt className="font-semibold text-foreground">Preparation</dt>
                <dd>{product.preparationInstructions}</dd>
              </div>
            )}
            {product.ingredients && (
              <div>
                <dt className="font-semibold text-foreground">Ingredients</dt>
                <dd>{product.ingredients}</dd>
              </div>
            )}
            {product.nutritionInformation && (
              <div>
                <dt className="font-semibold text-foreground">Nutrition</dt>
                <dd>{product.nutritionInformation}</dd>
              </div>
            )}
            {product.allergenInformation && (
              <div>
                <dt className="font-semibold text-foreground">Allergens</dt>
                <dd>{product.allergenInformation}</dd>
              </div>
            )}
            {product.foodProduct && !(product.ingredients && product.nutritionInformation && product.allergenInformation) && (
              <p className="rounded-xl bg-mint px-4 py-3 text-xs leading-relaxed text-grocery">
                For ingredients, nutrition facts and allergens, check the label on the package you receive.
              </p>
            )}
          </dl>
        </section>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 font-heading text-3xl font-bold text-grocery">You might also need</h2>
          <ProductGrid products={related} />
        </section>
      )}

      {recentlyViewed.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 font-heading text-3xl font-bold text-grocery">Recently viewed</h2>
          <ProductGrid products={recentlyViewed} />
        </section>
      )}

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <p className="font-bold tabular-nums text-grocery">{formatPrice(product.price)}</p>
          <Button
            variant="dark"
            className="flex-1"
            onClick={() => {
              addItem(product.id, quantity, product.maximumOrderQuantity);
              window.dispatchEvent(new CustomEvent("wb:open-cart"));
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>

      {zoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest/80 p-4" role="dialog" aria-modal="true">
          <button type="button" className="absolute right-4 top-4 rounded-xl bg-white px-3 py-2 text-sm font-semibold" onClick={() => setZoom(false)}>
            Close
          </button>
          <div className="relative h-[80vh] w-full max-w-3xl">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 92vw, 768px" className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
