import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { toProductCards } from "@/data/product-mappers";
import { ShopCatalog } from "@/components/commerce/shop-catalog";
import { buildPageMetadata } from "@/lib/seo/metadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [
    "breakfast","coffee-tea","pasta-pantry","condiments-spreads","canned-goods","snacks","beverages","household",
  ].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildPageMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const products = toProductCards(getProductsByCategory(slug));
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <ShopCatalog products={products} title={category.name} description={category.description} hideCategoryFilter />
    </Suspense>
  );
}
