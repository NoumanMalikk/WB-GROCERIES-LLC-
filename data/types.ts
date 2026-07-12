export type StockStatus = "in_stock" | "low_stock" | "out_of_stock" | "discontinued";

export type ProductCategorySlug =
  | "breakfast"
  | "coffee-tea"
  | "pasta-pantry"
  | "condiments-spreads"
  | "canned-goods"
  | "snacks"
  | "beverages"
  | "household";

export type CollectionSlug = "under-10" | "weekly-essentials" | "pantry-staples";

export interface ProductImage {
  src: string;
  alt: string;
  type: "main" | "angle" | "label" | "detail" | "lifestyle";
  replacementRequired: boolean;
}

export interface Product {
  id: string;
  sku: string;
  upc: string | null;
  slug: string;
  brand: string;
  manufacturer: string;
  title: string;
  subtitle: string;
  category: ProductCategorySlug;
  secondaryCategories: ProductCategorySlug[];
  price: number;
  compareAtPrice: number | null;
  currency: "USD";
  packageSize: string;
  packCount: number;
  unitPrice: string | null;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  ingredients: string | null;
  nutritionInformation: string | null;
  allergenInformation: string | null;
  storageInstructions: string;
  preparationInstructions: string | null;
  images: ProductImage[];
  imageAltText: string;
  imageSource: string;
  imageLicense: string;
  stockStatus: StockStatus;
  maximumOrderQuantity: number;
  weight: number;
  shippingWeight: number;
  featured: boolean;
  weeklyEssential: boolean;
  underTen: boolean;
  relatedProductIds: string[];
  active: boolean;
  seoTitle: string;
  seoDescription: string;
  foodProduct: boolean;
  synonyms: string[];
}

export interface Category {
  slug: ProductCategorySlug;
  name: string;
  shortName: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  navGroup: "breakfast-drinks" | "pantry" | "snacks" | "household";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuSection {
  title: string;
  links: NavLink[];
}

export interface ImageCredit {
  productId: string;
  localFilename: string;
  originalSourceUrl: string | null;
  manufacturer: string;
  supplierOrDistributor: string | null;
  licenseOrUsagePermission: string;
  dateObtained: string;
  exactProductMatch: boolean;
  exactFlavorMatch: boolean;
  exactPackageSizeMatch: boolean;
  exactPackCountMatch: boolean;
  whiteBackground: boolean;
  replacementRequired: boolean;
  altText: string;
  notes: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string | null;
  demoOnly: boolean;
}

export type OrderStatus =
  | "awaiting_payment"
  | "payment_received"
  | "processing"
  | "preparing_shipment"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export type PaymentStatus = "pending" | "requires_payment" | "paid" | "failed" | "refunded" | "demo";
