"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/data/types";
import { formatPrice, formatWeight } from "@/lib/utilities/format";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/cart/store";
import { useWishlistStore } from "@/lib/cart/wishlist-store";
import { storeConfig } from "@/data/store-config";
import { ProductGrid } from "@/components/product/product-card";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utilities/cn";

const RECENT_KEY = "wb-groceries-recently-viewed";

export function ProductDetail({
  product,
  related,
  recentlyViewed,
}: {
  product: Product;
  related: Product[];
  recentlyViewed: Product[];
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
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="hover:text-grocery">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/category/${product.category}`} className="hover:text-grocery capitalize">
              {product.category.replace(/-/g, " ")}
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
            className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-white"
            onClick={() => setZoom(true)}
            aria-label="Zoom product image"
          >
            <Image src={image.src} alt={image.alt} fill className="object-contain p-8" sizes="(max-width:1024px) 100vw, 50vw" priority />
          </button>
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {product.images.map((img, index) => (
              <button
                key={img.src}
                type="button"
                className={cn(
                  "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border bg-white",
                  activeImage === index ? "border-grocery" : "border-border",
                )}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <Image src={img.src} alt="" fill className="object-contain p-2" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">{product.brand}</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-grocery md:text-4xl">{product.title}</h1>
          <p className="mt-2 text-sm text-muted">
            {product.packageSize}
            {product.packCount > 1 ? ` · Pack of ${product.packCount}` : ""}
          </p>
          <div className="mt-4 flex items-end gap-3">
            <p className="text-3xl font-bold tabular-nums text-grocery">{formatPrice(product.price)}</p>
            {product.unitPrice && <p className="pb-1 text-sm tabular-nums text-muted">{product.unitPrice}</p>}
          </div>
          <div className="mt-3">
            <Badge>{product.stockStatus === "in_stock" ? "In stock" : "Unavailable"}</Badge>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground">{product.shortDescription}</p>

          <div className="mt-6 space-y-4 rounded-2xl border border-border bg-white p-4">
            <div className="flex flex-wrap items-center gap-4">
              <QuantitySelector
                value={quantity}
                max={product.maximumOrderQuantity}
                onChange={setQuantity}
              />
              <Button
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
            <p className="text-xs text-muted">Maximum order quantity: {product.maximumOrderQuantity}</p>
            <p className="text-xs text-muted">Shipping weight: {formatWeight(product.shippingWeight)}</p>
            <p className="text-xs text-muted">{storeConfig.shipping.shippingMessage}</p>
            <p className="text-xs text-muted">
              Returns: eligibility depends on product type and condition. See{" "}
              <Link href="/returns" className="underline">
                returns
              </Link>
              .
            </p>
          </div>

          {product.foodProduct && (
            <p className="mt-4 rounded-xl bg-mint p-3 text-sm text-grocery">{storeConfig.foodDisclaimer}</p>
          )}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5">
          <h2 className="font-heading text-xl font-bold text-grocery">Product details</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{product.fullDescription}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
            {product.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-border bg-white p-5">
          <h2 className="font-heading text-xl font-bold text-grocery">Storage & preparation</h2>
          <p className="mt-3 text-sm text-muted">
            <strong className="text-foreground">Storage:</strong> {product.storageInstructions}
          </p>
          {product.preparationInstructions && (
            <p className="mt-3 text-sm text-muted">
              <strong className="text-foreground">Preparation:</strong> {product.preparationInstructions}
            </p>
          )}
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>
              <strong className="text-foreground">Ingredients:</strong>{" "}
              {product.ingredients ?? "Verified ingredient details will appear here when confirmed for this exact package."}
            </p>
            <p>
              <strong className="text-foreground">Nutrition:</strong>{" "}
              {product.nutritionInformation ??
                "Verified nutrition information will appear here when confirmed for this exact package."}
            </p>
            <p>
              <strong className="text-foreground">Allergens:</strong>{" "}
              {product.allergenInformation ??
                "Verified allergen information will appear here when confirmed for this exact package. Always check the physical label."}
            </p>
          </div>
        </section>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 font-heading text-2xl font-bold text-grocery">Related products</h2>
          <ProductGrid products={related} />
        </section>
      )}

      {recentlyViewed.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 font-heading text-2xl font-bold text-grocery">Recently viewed</h2>
          <ProductGrid products={recentlyViewed} />
        </section>
      )}

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <p className="font-bold tabular-nums text-grocery">{formatPrice(product.price)}</p>
          <Button
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
            <Image src={image.src} alt={image.alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
