import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getActiveProducts, getProductBySlug } from "@/data/products";
import { storeConfig } from "@/data/store-config";
import { formatPrice } from "@/lib/utilities/format";
import { cn } from "@/lib/utilities/cn";

/**
 * Packshots for the hero collage: recognisable everyday brands with strong,
 * contrasting packaging. Each sits in its own grid cell (no overlap) because
 * the images are multiplied into the panel tint.
 */
const heroTiles = [
  {
    slug: "kelloggs-frosted-flakes-17-3oz",
    className: "col-span-3 row-span-4 col-start-1 row-start-1",
    sizes: "(max-width: 1024px) 45vw, 260px",
    priority: true,
  },
  {
    slug: "folgers-classic-roast-ground-coffee-25-9oz",
    className: "col-span-3 row-span-3 col-start-4 row-start-1",
    sizes: "(max-width: 1024px) 40vw, 230px",
    priority: true,
  },
  {
    slug: "oreo-original-cookies-14-3oz",
    className: "col-span-3 row-span-2 col-start-4 row-start-4",
    sizes: "(max-width: 1024px) 40vw, 230px",
    priority: false,
  },
  {
    slug: "coca-cola-original-12-pack",
    className: "col-span-3 row-span-2 col-start-1 row-start-5",
    sizes: "(max-width: 1024px) 40vw, 230px",
    priority: false,
  },
] as const;

export function HomeHero() {
  const tiles = heroTiles
    .map((tile) => ({ ...tile, product: getProductBySlug(tile.slug) }))
    .filter((tile) => tile.product);
  const catalogueSize = getActiveProducts().length;

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-12 pt-8 lg:grid-cols-[1.02fr_1fr] lg:gap-12 lg:pb-20 lg:pt-14">
        <div className="wb-rise">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-fresh">
            <span className="h-px w-8 bg-fresh" aria-hidden />
            {storeConfig.address.city}, {storeConfig.address.state}
          </p>
          <h1 className="mt-4 font-heading text-[2.6rem] font-bold leading-[1.04] text-grocery sm:text-6xl lg:text-[4.1rem]">
            {storeConfig.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Breakfast staples, pantry basics, snacks, drinks and household supplies from brands you already
            know, ordered in a few taps and shipped to your door.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-grocery px-6 font-semibold text-white shadow-[0_10px_24px_-10px_rgba(24,76,53,0.8)] transition hover:bg-forest"
            >
              Start shopping
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <Link
              href="/collections/under-10"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-grocery/25 bg-white px-6 font-semibold text-grocery transition hover:border-grocery hover:bg-mint"
            >
              Under $10
            </Link>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="sr-only">Products</dt>
              <dd className="font-heading text-3xl font-bold tabular-nums text-grocery">{catalogueSize}</dd>
              <p className="text-xs text-muted">products in stock</p>
            </div>
            <div>
              <dt className="sr-only">Categories</dt>
              <dd className="font-heading text-3xl font-bold tabular-nums text-grocery">8</dd>
              <p className="text-xs text-muted">aisles to browse</p>
            </div>
            <div>
              <dt className="sr-only">Shipping</dt>
              <dd className="font-heading text-3xl font-bold tabular-nums text-grocery">
                ${Math.min(...storeConfig.shipping.methods.map((m) => m.price)).toFixed(2)}
              </dd>
              <p className="text-xs text-muted">shipping from</p>
            </div>
          </dl>

          <p className="mt-6 text-sm font-medium text-muted">{storeConfig.locationPhrase}</p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-x-2 inset-y-4 rounded-[2.5rem] bg-butter sm:inset-x-4 lg:rounded-[3rem]"
          />
          <div
            aria-hidden
            className="absolute -right-3 top-2 h-24 w-24 rounded-full bg-gold/50 blur-2xl sm:h-32 sm:w-32"
          />
          <div className="relative grid aspect-square grid-cols-6 grid-rows-6 gap-2 p-5 sm:gap-3 sm:p-8">
            {tiles.map(({ slug, className, sizes, priority, product }) => (
              <Link
                key={slug}
                href={`/product/${product!.slug}`}
                className={cn("group relative block", className)}
                aria-label={product!.title}
              >
                <Image
                  src={product!.images[0]?.src ?? "/brand/logo-icon.svg"}
                  alt={product!.imageAltText}
                  fill
                  sizes={sizes}
                  priority={priority}
                  className="object-contain mix-blend-multiply transition duration-500 group-hover:scale-[1.05]"
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-grocery px-2.5 py-1 text-[11px] font-bold tabular-nums text-white shadow-md transition group-hover:bg-forest">
                  {formatPrice(product!.price)}
                </span>
              </Link>
            ))}

            <Link
              href="/shop"
              className="group col-span-3 col-start-4 row-start-6 flex items-center justify-between gap-2 self-end rounded-2xl bg-grocery px-4 py-3 text-white shadow-[0_14px_30px_-14px_rgba(16,47,36,0.7)] transition hover:bg-forest"
            >
              <span className="text-sm font-semibold leading-tight">See all {catalogueSize} products</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
