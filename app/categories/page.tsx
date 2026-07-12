import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Grocery Categories | WB Groceries",
  description: "Explore breakfast, pantry, snacks, beverages and household categories.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="font-heading text-4xl font-bold text-grocery">All categories</h1>
      <p className="mt-3 max-w-2xl text-muted">Browse organized grocery categories with equal card layouts.</p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`} className="overflow-hidden rounded-[14px] border border-border bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1">
            <div className="relative aspect-square bg-mint">
              <Image src={category.image} alt="" fill className="object-contain p-6" />
            </div>
            <div className="p-4">
              <h2 className="font-heading text-lg font-bold text-grocery">{category.name}</h2>
              <p className="mt-1 text-sm text-muted">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
