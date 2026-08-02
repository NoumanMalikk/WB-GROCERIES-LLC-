import { buildPageMetadata } from "@/lib/seo/metadata";
import { storeConfig, getSupportEmail } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "Shipping Policy | WB Groceries",
  description: "Shipping information for WB GROCERIES LLC orders.",
  path: "/shipping",
});

export default function Page() {
  const support = getSupportEmail();
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose-store">
      <h1 className="font-heading text-4xl font-bold text-grocery">Shipping Policy</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground">
        
        <p>WB GROCERIES LLC ships packaged grocery and household products according to the shipping methods shown during checkout.</p>
        <p>Shipping methods and costs are calculated during checkout based on product weight, quantity and destination.</p>
        <p>Local pickup and local delivery are not offered at this time.</p>
        <p>Same-day, one-hour, free nationwide, and international delivery are not available unless listed at checkout.</p>
        <p>{storeConfig.shipping.processingTimeText}</p>

        <p>
          Contact: {storeConfig.legalName}, {storeConfig.address.street}, {storeConfig.address.city},{" "}
          {storeConfig.address.state} {storeConfig.address.zip}, {storeConfig.address.country}. Phone{" "}
          {storeConfig.phone}. Email {support}.
        </p>
      </div>
    </article>
  );
}
