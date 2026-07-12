import { buildPageMetadata } from "@/lib/seo/metadata";
import { storeConfig, getSupportEmail } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "Return and Refund Policy | WB Groceries",
  description: "Returns and refunds for WB GROCERIES LLC.",
  path: "/returns",
});

export default function Page() {
  const support = getSupportEmail();
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose-store">
      <h1 className="font-heading text-4xl font-bold text-grocery">Return and Refund Policy</h1>
      <p className="mt-2 text-sm text-muted">Template for owner or qualified legal review before launch.</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground">
        
        <p>This return and refund policy is a template and requires owner or qualified legal review before launch.</p>
        <p>Eligibility varies by product type and condition. Potential exclusions include opened food, consumed food, packaging damaged after delivery, opened household cleaning products, used household products, returns outside the configured period, and clearly marked final-sale items.</p>
        <p>Separate review processes apply for damaged products, incorrect products, missing products, duplicate charges, cancelled orders and refunds.</p>
        <p>Refunds are not automatic before review. Not all sales are final in every circumstance; contact support with your order reference and supporting details.</p>

        <p>
          Contact: {storeConfig.legalName}, {storeConfig.address.street}, {storeConfig.address.city},{" "}
          {storeConfig.address.state} {storeConfig.address.zip}, {storeConfig.address.country}. Phone{" "}
          {storeConfig.phone}. Email {support}.
        </p>
      </div>
    </article>
  );
}
