import type { Metadata } from "next";
import { getSiteUrl, storeConfig } from "@/data/store-config";
import type { Product } from "@/data/types";
import { formatPrice } from "@/lib/utilities/format";

export function buildPageMetadata(input: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
}): Metadata {
  const url = `${getSiteUrl()}${input.path ?? ""}`;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: storeConfig.brandName,
      images: [{ url: input.image ?? "/brand/og-image.svg" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [input.image ?? "/brand/og-image.svg"],
    },
    robots: input.noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: storeConfig.legalName,
    alternateName: storeConfig.brandName,
    description: storeConfig.organizationDescription,
    url: getSiteUrl(),
    telephone: storeConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: storeConfig.address.street,
      addressLocality: storeConfig.address.city,
      addressRegion: storeConfig.address.state,
      postalCode: storeConfig.address.zip,
      addressCountry: "US",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: storeConfig.brandName,
    url: getSiteUrl(),
    potentialAction: {
      "@type": "SearchAction",
      target: `${getSiteUrl()}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function onlineStoreJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: storeConfig.brandName,
    description: storeConfig.organizationDescription,
    url: getSiteUrl(),
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    brand: { "@type": "Brand", name: product.brand },
    sku: product.sku,
    description: product.shortDescription,
    image: product.images.map((image) => `${getSiteUrl()}${image.src}`),
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price.toFixed(2),
      availability:
        product.stockStatus === "in_stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: `${getSiteUrl()}/product/${product.slug}`,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${getSiteUrl()}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function priceLabel(product: Product) {
  return formatPrice(product.price, product.currency);
}
