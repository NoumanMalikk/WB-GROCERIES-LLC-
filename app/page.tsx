import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CreditCard, PackageCheck, PackageSearch, Truck } from "lucide-react";
import { categories } from "@/data/categories";
import { categoryTones, toneClasses } from "@/data/category-tones";
import { getActiveProducts, getProductBySlug, getProductsByCategory, getUnderTenProducts } from "@/data/products";
import { toProductCards } from "@/data/product-mappers";
import { ProductGrid } from "@/components/product/product-card";
import { MiniProduct } from "@/components/home/mini-product";
import { storeConfig } from "@/data/store-config";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { HomeHero } from "@/components/home/home-hero";
import { cn } from "@/lib/utilities/cn";

function pick(slugs: string[]) {
  return toProductCards(slugs.map((slug) => getProductBySlug(slug)).filter((p) => p !== undefined));
}

const favoriteSlugs = [
  "quaker-old-fashioned-oats-42oz",
  "prego-traditional-italian-sauce-24oz",
  "jif-creamy-peanut-butter-16oz",
  "heinz-tomato-ketchup-32oz",
  "lipton-black-tea-bags-100-count",
  "goldfish-cheddar-crackers-30oz",
  "dasani-purified-water-16-9oz-24-pack",
  "tide-simply-clean-fresh-84oz",
];

const breakfastSlugs = [
  "honey-nut-cheerios-cereal-18-8oz",
  "quaker-instant-oatmeal-variety-48-count",
  "maxwell-house-original-roast-coffee-30-6oz",
];

const snackSlugs = [
  "chips-ahoy-original-chocolate-chip-cookies-13oz",
  "cheez-it-original-baked-snack-crackers-12-4oz",
  "pringles-original-potato-crisps-5-2oz",
  "snyders-of-hanover-mini-pretzels-12oz",
  "nature-valley-oats-honey-12-bars",
];

const householdSlugs = [
  "dawn-ultra-dishwashing-liquid-18oz",
  "bounty-essentials-six-double-rolls",
  "glad-forceflexplus-13-gallon-40-count",
  "clorox-disinfecting-wipes-75-count-fresh-scent",
];

const lowestShipping = Math.min(...storeConfig.shipping.methods.map((method) => method.price));

const assurances = [
  { icon: Truck, title: "Shipped from Texas", text: `Orders ship from ${storeConfig.address.city}, ${storeConfig.address.state}` },
  { icon: PackageCheck, title: "Exact pack sizes", text: "Count and weight on every listing" },
  { icon: CreditCard, title: "Secure card payment", text: "Processed through Square" },
  { icon: PackageSearch, title: "Track your order", text: "Look it up any time with your reference" },
];

function SectionHeading({
  eyebrow,
  title,
  href,
  linkLabel = "View all",
}: {
  eyebrow?: string;
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fresh">{eyebrow}</p>}
        <h2 className="mt-1.5 font-heading text-3xl font-bold leading-tight text-grocery md:text-4xl">{title}</h2>
      </div>
      {href && (
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-grocery"
        >
          <span className="underline decoration-gold decoration-2 underline-offset-4">{linkLabel}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  const favorites = pick(favoriteSlugs);
  const breakfast = pick(breakfastSlugs);
  const snacks = pick(snackSlugs);
  const household = pick(householdSlugs);
  const underTen = getUnderTenProducts();
  const budgetPicks = pick([
    "barilla-penne-16oz",
    "jif-creamy-peanut-butter-16oz",
    "bushs-original-baked-beans-28oz",
  ]);

  return (
    <div>
      <HomeHero />

      <section aria-label="Why shop with us" className="border-y border-border/70 bg-white">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {assurances.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-3 lg:px-6 lg:first:pl-0">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint text-grocery">
                <Icon className="h-4.5 w-4.5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-grocery">{title}</p>
                <p className="text-xs leading-snug text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading eyebrow="Aisles" title="Shop by category" href="/categories" linkLabel="All categories" />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(16,47,36,0.5)]",
                toneClasses[categoryTones[category.slug] ?? "butter"],
              )}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  className="object-contain mix-blend-multiply transition duration-500 group-hover:scale-[1.06]"
                  sizes="(max-width:768px) 45vw, 22vw"
                />
              </div>
              <div className="mt-3 flex items-end justify-between gap-2">
                <div>
                  <h3 className="font-heading text-lg font-bold leading-tight text-grocery">{category.name}</h3>
                  <p className="text-xs text-grocery/70">{getProductsByCategory(category.slug).length} products</p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 text-grocery transition group-hover:bg-grocery group-hover:text-white">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Restock"
            title="Everyday favorites"
            href="/collections/weekly-essentials"
            linkLabel="Weekly essentials"
          />
          <ProductGrid products={favorites} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-16 md:grid-cols-2">
        <Link
          href="/collections/under-10"
          className="group relative flex min-h-[26rem] flex-col justify-start overflow-hidden sm:min-h-[22rem] rounded-3xl bg-butter p-7 sm:p-9"
        >
          <div className="relative z-10 max-w-[16rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-grocery/70">Budget friendly</p>
            <h2 className="mt-2 font-heading text-4xl font-bold leading-[1.05] text-grocery">
              {underTen.length} staples under $10
            </h2>
          </div>
          <span className="relative z-10 mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-grocery px-5 text-sm font-semibold text-white transition group-hover:bg-forest">
            Shop under $10 <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
          <div className="pointer-events-none absolute bottom-0 right-4 flex h-[42%] w-[78%] items-end gap-1 sm:h-[72%] sm:w-[50%]">
            {budgetPicks.map((product, index) => (
              <div
                key={product.id}
                className={cn("relative flex-1", index === 1 ? "h-full" : "h-[78%]")}
              >
                <Image
                  src={product.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 30vw, 14vw"
                  className="object-contain object-bottom mix-blend-multiply transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Link>

        <Link
          href="/collections/pantry-staples"
          className="group relative flex min-h-[26rem] flex-col justify-start overflow-hidden sm:min-h-[22rem] rounded-3xl bg-sage p-7 sm:p-9"
        >
          <div className="relative z-10 max-w-[16rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-grocery/70">Pantry</p>
            <h2 className="mt-2 font-heading text-4xl font-bold leading-[1.05] text-grocery">
              A full cupboard, one order
            </h2>
          </div>
          <span className="relative z-10 mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-grocery px-5 text-sm font-semibold text-white transition group-hover:bg-forest">
            Shop pantry staples <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
          <div className="pointer-events-none absolute bottom-0 right-3 h-[40%] w-[80%] sm:h-[76%] sm:w-[56%]">
            <Image
              src="/categories/pasta-pantry.webp"
              alt=""
              fill
              sizes="(max-width: 640px) 80vw, 30vw"
              className="object-contain object-bottom mix-blend-multiply transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      </section>

      <section className="bg-grocery py-16 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Breakfast</p>
            <h2 className="mt-2 font-heading text-4xl font-bold leading-[1.05] md:text-5xl">
              Mornings, sorted.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
              Cereal for the kids, oatmeal for the rush and a big can of coffee for everyone else.
            </p>
            <Link
              href="/category/breakfast"
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-xl bg-gold px-6 font-semibold text-forest transition hover:bg-[#e5b03d]"
            >
              Shop breakfast <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {breakfast.map((product) => (
              <MiniProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading eyebrow="Snack shelf" title="Cookies, crackers and crunch" href="/category/snacks" />
        <ProductGrid products={snacks} columns="five" />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Around the house" title="Household essentials" href="/category/household" />
          <ProductGrid products={household} />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-8 overflow-hidden rounded-[2rem] bg-mint p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-grocery md:text-4xl">
              New arrivals, straight to your inbox.
            </h2>
            <p className="mt-3 text-muted">We write when the catalogue grows or an offer is worth knowing about.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <p className="sr-only">
        Catalogue size: {getActiveProducts().length} products. Shipping from ${lowestShipping.toFixed(2)}. {storeConfig.tagline}
      </p>
    </div>
  );
}
