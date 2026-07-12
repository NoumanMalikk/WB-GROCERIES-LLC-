import { OrderTrackingForm } from "@/components/commerce/order-tracking-form";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Order Tracking | WB Groceries",
  description: "Track a WB Groceries order with your order reference and email.",
  path: "/order-tracking",
  noIndex: true,
});

export default function OrderTrackingPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <h1 className="font-heading text-4xl font-bold text-grocery">Order tracking</h1>
      <p className="mt-3 text-muted">
        Enter your order reference and the email address used at checkout. Order details are never shown using only an
        order number.
      </p>
      <div className="mt-8">
        <OrderTrackingForm />
      </div>
    </div>
  );
}
