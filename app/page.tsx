import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import {
  getActiveProducts,
  getUnderTenProducts,
  getWeeklyEssentials,
  getProductBySlug,
} from "@/data/products";
import { toProductCards } from "@/data/product-mappers";
import { ProductGrid } from "@/components/product/product-card";
import { storeConfig } from "@/data/store-config";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { HomeHero } from "@/components/home/home-hero";
import { SectionReveal } from "@/components/home/section-reveal";

const snackSlugs = [
  "oreo-original-cookies-14-3oz",
  "ritz-original-crackers-13-7oz",
  "lays-classic-potato-chips-8oz",
  "doritos-nacho-cheese-9-25oz",
  "nature-valley-oats-honey-12-bars",
];

const householdSlugs = [
  "tide-simply-clean-fresh-84oz",
  "dawn-ultra-dishwashing-liquid-18oz",
  "bounty-essentials-six-double-rolls",
  "glad-forceflexplus-13-gallon-40-count",
];

export default function HomePage() {
  const weekly = toProductCards(getWeeklyEssentials().slice(0, 8));
  const underTen = toProductCards(getUnderTenProducts().slice(0, 8));
  const snacks = toProductCards(snackSlugs.map((slug) => getProductBySlug(slug)!).filter(Boolean));
  const household = toProductCards(householdSlugs.map((slug) => getProductBySlug(slug)!).filter(Boolean));

  return (
    <div>
      <HomeHero />

      <SectionReveal className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-grocery">Shop by category</h2>
          <p className="mt-2 text-muted">Browse organized grocery categories with clear package details.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group flex min-h-[180px] flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] bg-mint">
                <Image src={category.image} alt="" fill className="object-cover p-4 transition group-hover:scale-105" />
              </div>
              <div className="flex flex-1 items-center px-4 py-3">
                <h3 className="font-heading text-base font-bold text-grocery">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl font-bold text-grocery">Everyday favorites for the week ahead</h2>
              <p className="mt-2 text-muted">Weekly essentials selected for simple restocking.</p>
            </div>
            <Link href="/collections/weekly-essentials" className="text-sm font-semibold text-grocery underline">
              View all
            </Link>
          </div>
          <ProductGrid products={weekly} />
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8">
          <h2 className="font-heading text-3xl font-bold text-grocery">Useful grocery essentials under $10</h2>
          <p className="mt-2 text-muted">Affordable packaged staples for everyday shopping.</p>
        </div>
        <ProductGrid products={underTen} />
      </SectionReveal>

      <SectionReveal className="bg-grocery py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">A well-stocked pantry starts here.</h2>
            <p className="mt-3 text-white/85">
              Build easy breakfasts, simple meals and quick snacks with familiar packaged essentials.
            </p>
          </div>
          <Link
            href="/collections/pantry-staples"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gold px-6 font-semibold text-forest"
          >
            Shop Pantry Staples
          </Link>
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8">
          <h2 className="font-heading text-3xl font-bold text-grocery">Shop by routine</h2>
          <p className="mt-2 text-muted">Choose a simple starting point for your grocery list.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Breakfast Ready",
              text: "Cereal, oats, coffee and tea for easier mornings.",
              href: "/category/breakfast",
            },
            {
              title: "Quick Meals",
              text: "Pasta, sauce and canned staples for simple meals.",
              href: "/category/pasta-pantry",
            },
            {
              title: "Snack Restock",
              text: "Cookies, crackers, chips and bars for busy days.",
              href: "/category/snacks",
            },
            {
              title: "Home Restock",
              text: "Laundry, dish care, paper goods and kitchen essentials.",
              href: "/category/household",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="flex min-h-[180px] flex-col justify-between rounded-[var(--radius-card)] border border-border bg-white p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-1"
            >
              <h3 className="font-heading text-xl font-bold text-grocery">{card.title}</h3>
              <p className="mt-3 text-sm text-muted">{card.text}</p>
            </Link>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 font-heading text-3xl font-bold text-grocery">Popular snacks</h2>
          <ProductGrid products={snacks} />
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="mb-8 font-heading text-3xl font-bold text-grocery">Household essentials</h2>
        <ProductGrid products={household} />
      </SectionReveal>

      <SectionReveal className="bg-mint py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-grocery">Why WB Groceries</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Clear product details",
                text: "Package size, pack count and important product information are shown clearly.",
              },
              {
                title: "Real product photography",
                text: "Each product uses an exact image matching the item, size and variation being sold.",
              },
              {
                title: "Simple shopping",
                text: "Search organized categories, add quantities and review the full basket before checkout.",
              },
              {
                title: "Secure checkout",
                text: "Payment information is processed through a trusted payment provider when connected.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-card)]">
                <h3 className="font-heading text-lg font-bold text-grocery">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-heading text-3xl font-bold text-grocery">How ordering works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Browse products", "Search the catalogue or explore organized grocery categories."],
            ["Build your cart", "Choose products and quantities, then review your complete basket."],
            ["Enter delivery details", "Provide shipping and contact information through the secure checkout."],
            ["Complete payment", "Use the connected secure payment provider and receive an order confirmation."],
          ].map(([title, text], index) => (
            <li key={title} className="rounded-[var(--radius-card)] border border-border bg-white p-5">
              <p className="text-sm font-bold text-gold">Step {index + 1}</p>
              <h3 className="mt-2 font-heading text-lg font-bold text-grocery">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </SectionReveal>

      <SectionReveal className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-grocery">Keep the grocery list fresh.</h2>
          <p className="mt-3 text-muted">Receive new-product announcements and occasional store offers.</p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </SectionReveal>

      <p className="sr-only">Catalogue size: {getActiveProducts().length} products. {storeConfig.tagline}</p>
    </div>
  );
}
