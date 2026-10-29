import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { categoryTones, toneClasses } from "@/data/category-tones";
import { getProductsByCategory } from "@/data/products";
import { PageBanner } from "@/components/ui/page-banner";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utilities/cn";

export const metadata = buildPageMetadata({
  title: "Grocery Categories | WB Groceries",
  description: "Explore breakfast, pantry, snacks, beverages and household categories.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Aisles"
        title="All categories"
        description="Eight aisles covering breakfast, pantry, snacks, drinks and the household basics."
        tone="sage"
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className={cn(
                "group flex flex-col overflow-hidden rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(16,47,36,0.5)]",
                toneClasses[categoryTones[category.slug] ?? "butter"],
              )}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  className="object-contain mix-blend-multiply transition duration-500 group-hover:scale-[1.06]"
                  sizes="(max-width:640px) 90vw, (max-width:1024px) 45vw, 22vw"
                />
              </div>
              <h2 className="mt-4 font-heading text-xl font-bold text-grocery">{category.name}</h2>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-grocery/75">{category.description}</p>
              <p className="mt-4 flex items-center justify-between text-sm font-semibold text-grocery">
                {getProductsByCategory(category.slug).length} products
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 transition group-hover:bg-grocery group-hover:text-white">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
