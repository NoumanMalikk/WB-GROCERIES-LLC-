import { ContactForm } from "@/components/forms/contact-form";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSupportEmail, shouldShowFullAddress, storeConfig } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "Contact WB Groceries",
  description: "Contact WB GROCERIES LLC about products, orders, shipping or the website.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-10 lg:grid-cols-2">
      <div>
        <h1 className="font-heading text-4xl font-bold text-grocery">Contact WB Groceries</h1>
        <p className="mt-3 text-muted">
          Questions about a product, order, shipping or website experience? Send a message with the relevant information.
        </p>
        <div className="mt-6 space-y-1 text-sm">
          <p className="font-semibold">{storeConfig.legalName}</p>
          {shouldShowFullAddress() ? (
            <p>
              {storeConfig.address.street}<br />
              {storeConfig.address.city}, {storeConfig.address.state} {storeConfig.address.zip}
            </p>
          ) : (
            <p>
              {storeConfig.address.city}, {storeConfig.address.state} {storeConfig.address.zip}
            </p>
          )}
          <p>Phone: {storeConfig.phone}</p>
          <p>Support email: {getSupportEmail()}</p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
