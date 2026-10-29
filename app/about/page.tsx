import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { categories } from "@/data/categories";
import { categoryTones, toneClasses } from "@/data/category-tones";
import { getActiveProducts } from "@/data/products";
import { storeConfig } from "@/data/store-config";
import { cn } from "@/lib/utilities/cn";

export const metadata = buildPageMetadata({
  title: "About WB Groceries",
  description: "Learn about WB GROCERIES LLC, a Crockett, Texas-based online grocery retailer.",
  path: "/about",
});

export default function AboutPage() {
  const productCount = getActiveProducts().length;
  const { address } = storeConfig;

  return (
    <>
      <section className="bg-butter">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-[1.1fr_1fr] md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fresh">About us</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.08] text-grocery md:text-5xl">
              Everyday groceries without the endless search.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-grocery/80">
              {storeConfig.legalName} is a grocery retailer in {address.city}, {address.state}. We stock the packaged
              food and household basics people reorder most, and ship them to your door.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
            <Image
              src="/categories/pasta-pantry.webp"
              alt="Pasta, sauce and macaroni and cheese boxes"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Familiar brands",
              text: `${productCount} products from names you already trust, grouped into eight aisles so the shelf you want is never far away.`,
            },
            {
              title: "Nothing left to guess",
              text: "Every listing shows its package size and pack count, plus the price per ounce, bag or can, so you can compare before you buy.",
            },
            {
              title: "A simple checkout",
              text: "Build your basket, enter your address, and pay by card. Shipping options and costs are shown before you confirm.",
            },
          ].map((item, index) => (
            <div key={item.title} className="border-t-2 border-grocery pt-5">
              <p className="font-heading text-sm font-bold text-gold">0{index + 1}</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-grocery">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-grocery md:text-4xl">What we stock</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className={cn(
                    "group flex items-center justify-between gap-2 rounded-2xl px-4 py-4 font-semibold text-grocery transition hover:-translate-y-0.5",
                    toneClasses[categoryTones[category.slug] ?? "butter"],
                  )}
                >
                  {category.name}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-[2rem] bg-grocery p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">{storeConfig.tagline}</h2>
            <p className="mt-2 text-white/80">Questions about an order or a product? We are happy to help.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center rounded-xl bg-gold px-6 font-semibold text-forest transition hover:bg-[#e5b03d]"
            >
              Start shopping
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-xl border border-white/30 px-6 font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
