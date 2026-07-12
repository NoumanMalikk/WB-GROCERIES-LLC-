import { CheckoutForm } from "@/components/checkout/checkout-form";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Checkout | WB Groceries",
  description: "Complete your WB Groceries order.",
  path: "/checkout",
  noIndex: true,
});

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <CheckoutForm />
    </div>
  );
}
