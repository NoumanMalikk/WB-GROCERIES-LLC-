import { CartPageClient } from "@/components/cart/cart-page-client";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Cart | WB Groceries",
  description: "Review your WB Groceries cart before checkout.",
  path: "/cart",
  noIndex: true,
});

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <CartPageClient />
    </div>
  );
}
