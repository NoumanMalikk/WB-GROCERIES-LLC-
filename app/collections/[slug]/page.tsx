import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getPantryStaples, getUnderTenProducts, getWeeklyEssentials } from "@/data/products";
import { toProductCards } from "@/data/product-mappers";
import { ShopCatalog } from "@/components/commerce/shop-catalog";
import { buildPageMetadata } from "@/lib/seo/metadata";
import type { Metadata } from "next";

const collections = {
  "under-10": {
    title: "Products under $10",
    description: "Everyday staples priced under ten dollars.",
    products: getUnderTenProducts,
    tone: "butter",
    image: undefined,
  },
  "weekly-essentials": {
    title: "Weekly essentials",
    description: "The items most people restock first, collected in one place.",
    products: getWeeklyEssentials,
    tone: "sage",
    image: undefined,
  },
  "pantry-staples": {
    title: "Pantry staples",
    description: "Pasta, sauces, spreads and canned basics for easy meals.",
    products: getPantryStaples,
    tone: "blush",
    image: "/categories/pasta-pantry.webp",
  },
} as const;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(collections).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections[slug as keyof typeof collections];
  if (!collection) return {};
  return buildPageMetadata({
    title: `${collection.title} | WB Groceries`,
    description: collection.description,
    path: `/collections/${slug}`,
  });
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = collections[slug as keyof typeof collections];
  if (!collection) notFound();
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <ShopCatalog
        products={toProductCards(collection.products())}
        title={collection.title}
        description={collection.description}
        eyebrow="Collection"
        tone={collection.tone}
        image={collection.image}
      />
    </Suspense>
  );
}
