import { buildPageMetadata } from "@/lib/seo/metadata";
import { storeConfig, getSupportEmail } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "Terms and Conditions | WB Groceries",
  description: "Terms and Conditions for WB GROCERIES LLC.",
  path: "/terms",
});

export default function Page() {
  const support = getSupportEmail();
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose-store">
      <h1 className="font-heading text-4xl font-bold text-grocery">Terms and Conditions</h1>
      <p className="mt-2 text-sm text-muted">Template for owner or qualified legal review before launch.</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground">
        
        <p>By using this website and placing an order with WB GROCERIES LLC, you agree to these Terms and Conditions.</p>
        <p>Product availability, pricing and packaging details may change. The final price confirmed during checkout applies to the order.</p>
        <p>Customers are responsible for reviewing food labels, allergen information and household product safety instructions on the physical package.</p>
        <p>These terms are a template and require owner or qualified legal review before launch.</p>

        <p>
          Contact: {storeConfig.legalName}, {storeConfig.address.street}, {storeConfig.address.city},{" "}
          {storeConfig.address.state} {storeConfig.address.zip}, {storeConfig.address.country}. Phone{" "}
          {storeConfig.phone}. Email {support}.
        </p>
      </div>
    </article>
  );
}
