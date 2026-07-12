import { buildPageMetadata } from "@/lib/seo/metadata";
import { storeConfig, getSupportEmail } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "Food Information Disclaimer | WB Groceries",
  description: "Food packaging and label disclaimer for WB Groceries.",
  path: "/food-information",
});

export default function Page() {
  const support = getSupportEmail();
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose-store">
      <h1 className="font-heading text-4xl font-bold text-grocery">Food Information Disclaimer</h1>
      <p className="mt-2 text-sm text-muted">Template for owner or qualified legal review before launch.</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground">
        
        <p>Manufacturers may update packaging, ingredients, nutrition information and allergen statements.</p>
        <p>Website information should not replace the physical product label. Always review the package before consuming a product.</p>
        <p>Customers with serious allergies should review products carefully. This page does not provide medical advice.</p>
        <p>Product images may show packaging that later changes. When packaging changes, the physical label remains the authoritative source.</p>

        <p>
          Contact: {storeConfig.legalName}, {storeConfig.address.street}, {storeConfig.address.city},{" "}
          {storeConfig.address.state} {storeConfig.address.zip}, {storeConfig.address.country}. Phone{" "}
          {storeConfig.phone}. Email {support}.
        </p>
      </div>
    </article>
  );
}
