import { WishlistClient } from "@/components/commerce/wishlist-client";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Wishlist | WB Groceries",
  description: "Saved products from WB Groceries.",
  path: "/wishlist",
  noIndex: true,
});

export default function WishlistPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <WishlistClient />
    </div>
  );
}
