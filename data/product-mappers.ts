import type { Product } from "./types";
import type { ProductCardData } from "./catalog";

export function toProductCard(product: Product): ProductCardData {
  return {
    id: product.id,
    slug: product.slug,
    brand: product.brand,
    title: product.title,
    packageSize: product.packageSize,
    packCount: product.packCount,
    price: product.price,
    unitPrice: product.unitPrice,
    image: product.images[0]?.src ?? "/brand/logo-icon.svg",
    imageAlt: product.imageAltText,
    stockStatus: product.stockStatus,
    maximumOrderQuantity: product.maximumOrderQuantity,
    category: product.category,
    secondaryCategories: product.secondaryCategories ?? [],
    weeklyEssential: product.weeklyEssential,
    featured: product.featured,
    shortDescription: product.shortDescription,
    synonyms: product.synonyms ?? [],
    shippingWeight: product.shippingWeight,
  };
}

export function toProductCards(products: Product[]): ProductCardData[] {
  return products.map(toProductCard);
}
