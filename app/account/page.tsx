import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isSupabaseConfigured } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "Account | WB Groceries",
  description: "Customer account options for WB Groceries.",
  path: "/account",
  noIndex: true,
});

export default function AccountPage() {
  const configured = isSupabaseConfigured();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-grocery">Account</h1>
      {configured ? (
        <div className="mt-6 space-y-3 text-sm">
          <p>Customer accounts are connected. Sign in to view order history, saved addresses and wishlist sync.</p>
          <Link href="/account/orders" className="inline-flex text-grocery underline">View orders</Link>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-border bg-white p-6 text-sm text-muted">
          <p>
            Guest checkout remains available. Optional customer accounts, magic-link login, order history and saved
            addresses become available when Supabase is connected.
          </p>
          <p className="mt-3">Cart and wishlist continue to work locally on this device.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/checkout" className="rounded-xl bg-gold px-4 py-2 font-semibold text-forest">Continue as guest</Link>
            <Link href="/order-tracking" className="rounded-xl border border-border px-4 py-2 font-semibold text-grocery">Track an order</Link>
          </div>
        </div>
      )}
    </div>
  );
}
