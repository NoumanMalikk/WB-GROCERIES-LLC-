import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isSupabaseConfigured } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "Order history | WB Groceries",
  description: "Order history for WB Groceries customer accounts.",
  path: "/account/orders",
  noIndex: true,
});

export default function AccountOrdersPage() {
  if (!isSupabaseConfigured()) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-heading text-3xl font-bold text-grocery">Order history</h1>
        <p className="mt-4 text-muted">
          Order history becomes available after customer accounts are connected. You can still use guest checkout and
          order tracking with your reference and email.
        </p>
        <Link href="/order-tracking" className="mt-6 inline-flex text-grocery underline">Go to order tracking</Link>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-3xl font-bold text-grocery">Order history</h1>
      <p className="mt-4 text-muted">Sign in to load orders linked to your account.</p>
    </div>
  );
}
