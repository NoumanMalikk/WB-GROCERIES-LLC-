import Link from "next/link";
import { getOrderByReferenceAndEmail } from "@/lib/orders/store";
import { formatPrice } from "@/lib/utilities/format";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CheckoutSuccessClient } from "@/components/checkout/checkout-success-client";

export const metadata = buildPageMetadata({
  title: "Order confirmation | WB Groceries",
  description: "Order confirmation for WB GROCERIES LLC.",
  path: "/checkout/success",
  noIndex: true,
});

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string; email?: string; demo?: string; session_id?: string }>;
}) {
  const params = await searchParams;
  const demo = params.demo === "1";
  const reference = params.reference;
  const email = params.email;

  if (!reference || !email) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-grocery">Order confirmation unavailable</h1>
        <p className="mt-3 text-muted">
          A verified order reference and matching email are required. Payment success is never shown without verification.
        </p>
        <Link href="/order-tracking" className="mt-6 inline-flex text-grocery underline">
          Go to order tracking
        </Link>
      </div>
    );
  }

  const order = getOrderByReferenceAndEmail(reference, email);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <CheckoutSuccessClient demo={demo} order={order} reference={reference} email={email} />
      {order && (
        <div className="mt-8 rounded-2xl border border-border bg-white p-6">
          <h2 className="font-heading text-xl font-bold text-grocery">Order summary</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {order.items.map((item) => (
              <li key={item.sku} className="flex justify-between gap-3">
                <span>
                  {item.quantity} × {item.title}
                </span>
                <span className="tabular-nums">{formatPrice(item.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-1 border-t border-border pt-4 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span className="tabular-nums">{formatPrice(order.subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="tabular-nums">{formatPrice(order.shipping)}</span></div>
            <div className="flex justify-between"><span>Tax</span><span className="tabular-nums">{formatPrice(order.tax)}</span></div>
            <div className="flex justify-between font-bold"><span>Total</span><span className="tabular-nums">{formatPrice(order.total)}</span></div>
          </div>
        </div>
      )}
    </div>
  );
}
