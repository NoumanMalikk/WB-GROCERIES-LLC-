import { buildPageMetadata } from "@/lib/seo/metadata";
import { storeConfig, getSupportEmail } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | WB Groceries",
  description: "Privacy Policy for WB GROCERIES LLC.",
  path: "/privacy",
});

export default function Page() {
  const support = getSupportEmail();
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose-store">
      <h1 className="font-heading text-4xl font-bold text-grocery">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Template for owner or qualified legal review before launch.</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground">
        
        <p>WB GROCERIES LLC collects information needed to process orders, respond to customer messages and improve the storefront.</p>
        <p>Payment card details are processed by the configured payment provider and are not collected through ordinary custom text fields on this website.</p>
        <p>If analytics or marketing tools are connected later, they will be documented here along with how related data is handled.</p>
        <p>Customers may contact support to request account deletion or ask privacy-related questions.</p>

        <p>
          Contact: {storeConfig.legalName}, {storeConfig.address.street}, {storeConfig.address.city},{" "}
          {storeConfig.address.state} {storeConfig.address.zip}, {storeConfig.address.country}. Phone{" "}
          {storeConfig.phone}. Email {support}.
        </p>
      </div>
    </article>
  );
}
