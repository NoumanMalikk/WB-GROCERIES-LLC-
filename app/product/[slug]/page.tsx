import { notFound } from "next/navigation";
import { getActiveProducts, getProductBySlug, getRelatedProducts } from "@/data/products";
import { RecentlyViewedLoader } from "@/components/product/recently-viewed-loader";
import { buildPageMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo/metadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getActiveProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildPageMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/product/${slug}`,
    image: product.images[0]?.src,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productJsonLd(product),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: product.category, path: `/category/${product.category}` },
              { name: product.title, path: `/product/${product.slug}` },
            ]),
          ]),
        }}
      />
      <RecentlyViewedLoader product={product} related={related} />
    </>
  );
}
