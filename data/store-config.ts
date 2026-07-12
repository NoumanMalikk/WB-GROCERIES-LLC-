export const storeConfig = {
  legalName: "WB GROCERIES LLC",
  brandName: "WB Groceries",
  brandDescriptor: "Groceries & Everyday Essentials",
  owner: "Wendy Shawn Robin",
  tagline: "Stock the kitchen. Simplify the week.",
  positioning: "Everyday groceries made simple.",
  supportingStatement:
    "Shop familiar pantry staples, breakfast products, snacks, drinks and household essentials through one clear and convenient online store.",
  organizationDescription:
    "WB GROCERIES LLC is a Crockett, Texas-based grocery retailer offering packaged groceries and everyday household essentials through an online storefront.",
  locationPhrase: "Crockett, Texas-based online grocery retailer",
  address: {
    street: "1407 Hooks St",
    city: "Crockett",
    state: "TX",
    zip: "75835",
    country: "United States",
    countryCode: "US",
  },
  phone: "+1 (505) 646-8371",
  phoneTel: "+15056468371",
  currency: "USD" as const,
  locale: "en-US",
  minimumProductPrice: 5,
  announcementPrimary:
    "Everyday groceries and household essentials in one simple online store.",
  announcementSecondary:
    "Available shipping options are displayed during checkout.",
  shipping: {
    shippingEnabled: true,
    localPickupEnabled: false,
    localDeliveryEnabled: false,
    freeShippingEnabled: false,
    freeShippingThreshold: null as number | null,
    flatShippingRate: 8.99,
    heavyItemSurcharge: 4.5,
    heavyItemWeightThreshold: 10,
    maximumOrderWeight: 70,
    processingTimeText:
      "Orders are typically prepared for shipment after payment is confirmed. Processing timelines are confirmed during checkout when shipping services are connected.",
    carrierEstimateText:
      "Available shipping methods and costs are calculated during checkout based on product weight, quantity and destination.",
    shippingMessage:
      "Available shipping methods and costs are calculated during checkout based on product weight, quantity and destination.",
    restrictedStates: [] as string[],
    excludedDestinations: [] as string[],
    demoMethods: [
      {
        id: "demo-standard",
        name: "Standard Shipping (Demonstration)",
        description:
          "Demonstration rate only. Real carrier rates apply when shipping is connected.",
        price: 8.99,
        estimatedDays: null,
        demoOnly: true,
      },
      {
        id: "demo-economy",
        name: "Economy Shipping (Demonstration)",
        description:
          "Demonstration rate only. Delivery timing is not guaranteed in demonstration mode.",
        price: 5.99,
        estimatedDays: null,
        demoOnly: true,
      },
    ],
  },
  tax: {
    enabled: true,
    provider: "manual" as "manual" | "stripe_tax" | "external",
    message: "Taxes are calculated during checkout.",
    demoNote:
      "Tax estimates shown in demonstration mode are illustrative and are recalculated when tax services are connected.",
  },
  returns: {
    windowDays: 14,
    reviewRequired: true,
    ownerLegalReviewRequired: true,
  },
  checkout: {
    guestCheckoutEnabled: true,
    requireTermsAcceptance: true,
    marketingConsentDefault: false,
  },
  seo: {
    homepageTitle: "WB Groceries | Pantry, Snacks and Household Essentials",
    homepageDescription:
      "Shop breakfast products, pantry staples, snacks, beverages and household essentials online from WB GROCERIES LLC.",
  },
  foodDisclaimer:
    "Product packaging, ingredients and nutrition information may change. Always review the physical product label before consuming.",
} as const;

export type StoreConfig = typeof storeConfig;

export function isDemoMode(): boolean {
  return (process.env.NEXT_PUBLIC_STORE_MODE ?? "demo") === "demo";
}

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) return `https://${vercelProduction.replace(/^https?:\/\//, "")}`;

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return `https://${vercelUrl.replace(/^https?:\/\//, "")}`;

  return "http://localhost:3000";
}

export function getSupportEmail(): string {
  return process.env.SUPPORT_EMAIL ?? "support@example.com";
}

export function shouldShowFullAddress(): boolean {
  return process.env.NEXT_PUBLIC_SHOW_FULL_ADDRESS === "true";
}

export function isStripeConfigured(): boolean {
  return Boolean(
    process.env.STRIPE_SECRET_KEY && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  );
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.ORDER_EMAIL_FROM);
}
