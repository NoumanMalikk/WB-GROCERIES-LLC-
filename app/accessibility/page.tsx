import { buildPageMetadata } from "@/lib/seo/metadata";
import { storeConfig, getSupportEmail } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "Accessibility Statement | WB Groceries",
  description: "Accessibility statement for WB Groceries.",
  path: "/accessibility",
});

export default function Page() {
  const support = getSupportEmail();
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose-store">
      <h1 className="font-heading text-4xl font-bold text-grocery">Accessibility Statement</h1>
      <p className="mt-2 text-sm text-muted">Template for owner or qualified legal review before launch.</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground">
        
        <p>WB Groceries aims to provide a storefront that works for keyboard and screen-reader users and targets WCAG 2.2 AA practices.</p>
        <p>If you encounter an accessibility barrier, contact support with the page URL and a description of the issue so we can improve the experience.</p>

        <p>
          Contact: {storeConfig.legalName}, {storeConfig.address.street}, {storeConfig.address.city},{" "}
          {storeConfig.address.state} {storeConfig.address.zip}, {storeConfig.address.country}. Phone{" "}
          {storeConfig.phone}. Email {support}.
        </p>
      </div>
    </article>
  );
}
