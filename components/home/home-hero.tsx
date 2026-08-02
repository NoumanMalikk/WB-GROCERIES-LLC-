import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PackageCheck, ShieldCheck, Sparkles } from "lucide-react";
import { getActiveProducts, getProductBySlug } from "@/data/products";
import { storeConfig } from "@/data/store-config";
import { formatPrice } from "@/lib/utilities/format";
import { cn } from "@/lib/utilities/cn";

/**
 * Packshots chosen for the hero collage: recognisable everyday brands with
 * strong, contrasting packaging that reads well against the cream/green theme.
 */
const heroTiles = [
  {
    slug: "kelloggs-frosted-flakes-17-3oz",
    className: "col-span-7 row-span-4",
    imageClassName: "p-6",
    sizes: "(max-width: 1024px) 52vw, 340px",
    priority: true,
  },
  {
    slug: "folgers-classic-roast-ground-coffee-25-9oz",
    className: "col-span-5 row-span-2",
    imageClassName: "p-3",
    sizes: "(max-width: 1024px) 38vw, 250px",
    priority: false,
  },
  {
    slug: "oreo-original-cookies-14-3oz",
    className: "col-span-5 row-span-2",
    imageClassName: "p-4",
    sizes: "(max-width: 1024px) 38vw, 250px",
    priority: false,
  },
  {
    slug: "coca-cola-original-12-pack",
    className: "col-span-5 row-span-2 col-start-8 row-start-5",
    imageClassName: "p-4",
    sizes: "(max-width: 1024px) 38vw, 250px",
    priority: false,
  },
] as const;

const trustPoints = [
  { icon: PackageCheck, label: "Exact pack sizes listed" },
  { icon: ShieldCheck, label: "Secure card checkout" },
  { icon: Sparkles, label: "Real product photography" },
];

export function HomeHero() {
  const tiles = heroTiles
    .map((tile) => ({ ...tile, product: getProductBySlug(tile.slug) }))
    .filter((tile) => tile.product);
  const catalogueSize = getActiveProducts().length;

  return (
    <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,#FFF9EE_0%,#E8F2E9_100%)]">
      {/* Soft brand-tinted light sources behind the collage. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_32rem_at_88%_-10%,rgba(78,138,90,0.20),transparent_60%),radial-gradient(38rem_26rem_at_4%_100%,rgba(242,190,75,0.22),transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-fresh/25 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-fresh backdrop-blur">
            Grocery shopping made simpler
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] text-grocery md:text-5xl lg:text-6xl">
            {storeConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Shop familiar breakfast products, pantry staples, snacks, beverages and household essentials through one
            clear and convenient online store.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/collections/weekly-essentials"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold px-6 font-semibold text-forest shadow-[0_8px_20px_-8px_rgba(242,190,75,0.9)] transition hover:bg-[#e5b03d]"
            >
              Shop Weekly Essentials
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <Link
              href="/categories"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-white px-6 font-semibold text-grocery transition hover:bg-mint"
            >
              Browse All Categories
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-grocery">
                <Icon className="h-4 w-4 shrink-0 text-fresh" aria-hidden />
                {label}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm font-medium text-muted">{storeConfig.locationPhrase}</p>
        </div>

        <div className="relative">
          <div className="grid aspect-[6/5] grid-cols-12 grid-rows-6 gap-3 sm:gap-4">
            {tiles.map(({ slug, className, imageClassName, sizes, priority, product }) => (
              <Link
                key={slug}
                href={`/product/${product!.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_12px_32px_-14px_rgba(16,47,36,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-14px_rgba(16,47,36,0.42)]",
                  className,
                )}
              >
                <Image
                  src={product!.images[0]?.src ?? "/brand/logo-icon.svg"}
                  alt={product!.imageAltText}
                  fill
                  sizes={sizes}
                  priority={priority}
                  className={cn("object-contain transition duration-500 group-hover:scale-[1.04]", imageClassName)}
                />
                <span className="absolute bottom-2 left-2 rounded-lg bg-white/92 px-2 py-1 text-[11px] font-bold tabular-nums text-grocery shadow-sm ring-1 ring-border/60 backdrop-blur">
                  {formatPrice(product!.price)}
                </span>
              </Link>
            ))}

            <Link
              href="/shop"
              className="group col-span-7 col-start-1 row-span-2 row-start-5 flex flex-col justify-center gap-1 rounded-2xl bg-grocery px-5 text-white shadow-[0_12px_32px_-14px_rgba(16,47,36,0.6)] transition duration-300 hover:-translate-y-1 hover:bg-forest"
            >
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                <PackageCheck className="h-4 w-4" aria-hidden />
                In stock now
              </span>
              <span className="font-heading text-2xl font-bold leading-tight tabular-nums">
                {catalogueSize} everyday essentials
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-white/80">
                Browse the full catalogue
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
