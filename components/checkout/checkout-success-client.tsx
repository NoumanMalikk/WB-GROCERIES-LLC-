"use client";

import Link from "next/link";
import type { OrderRecord } from "@/lib/orders/store";

export function CheckoutSuccessClient({
  demo,
  order,
  reference,
  email,
}: {
  demo: boolean;
  order: OrderRecord | null;
  reference: string;
  email: string;
}) {
  if (demo) {
    return (
      <div className="rounded-2xl border border-warning/40 bg-[#fff7e8] p-8 text-center">
        <h1 className="font-heading text-3xl font-bold text-grocery">Demo checkout request recorded</h1>
        <p className="mt-3 text-sm text-muted">
          Reference <strong>{reference}</strong> was created for interface testing only. Payment was not collected and
          this order is not marked as paid.
        </p>
        <p className="mt-2 text-sm text-muted">Email on file: {email}</p>
        <p className="mt-4 text-sm">
          When Stripe and order services are connected, verified payments will show a paid confirmation here.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/shop" className="rounded-xl bg-gold px-5 py-3 font-semibold text-forest">
            Continue shopping
          </Link>
          <Link href="/contact" className="rounded-xl border border-border bg-white px-5 py-3 font-semibold text-grocery">
            Contact support
          </Link>
        </div>
      </div>
    );
  }

  if (!order || order.paymentStatus !== "paid") {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center">
        <h1 className="font-heading text-3xl font-bold text-grocery">Payment not verified</h1>
        <p className="mt-3 text-muted">
          We cannot show a successful payment confirmation until payment is verified. If you completed checkout, wait a
          moment and check order tracking, or contact support with your reference.
        </p>
        <p className="mt-2 text-sm">Reference: {reference}</p>
        <Link href="/order-tracking" className="mt-6 inline-flex text-grocery underline">
          Track order
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-8 text-center">
      <h1 className="font-heading text-3xl font-bold text-grocery">Thank you for your order</h1>
      <p className="mt-3 text-muted">
        Order <strong>{order.reference}</strong> for {order.email} has verified payment status: {order.paymentStatus}.
      </p>
      <p className="mt-2 text-sm text-muted">Shipping method: {order.shippingMethodName}</p>
      <p className="mt-4 text-sm">
        Next steps: watch for your confirmation email and use order tracking with your reference and email when
        available.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/shop" className="rounded-xl bg-gold px-5 py-3 font-semibold text-forest">
          Continue shopping
        </Link>
        <Link href="/contact" className="rounded-xl border border-border px-5 py-3 font-semibold text-grocery">
          Contact support
        </Link>
      </div>
    </div>
  );
}
