"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { OrderRecord } from "@/lib/orders/store";

export function CheckoutSuccessClient({
  demo,
  order,
  reference,
  email,
  paymentId,
  paidHint,
}: {
  demo: boolean;
  order: OrderRecord | null;
  reference: string;
  email: string;
  paymentId?: string;
  paidHint?: boolean;
}) {
  const [verifiedOrder, setVerifiedOrder] = useState<OrderRecord | null>(order);
  const [checking, setChecking] = useState(Boolean(!demo && (paymentId || paidHint) && order?.paymentStatus !== "paid"));

  useEffect(() => {
    if (demo) return;
    if (order?.paymentStatus === "paid") {
      setVerifiedOrder(order);
      setChecking(false);
      return;
    }
    if (!paymentId && !paidHint) return;

    let cancelled = false;
    setChecking(true);
    fetch("/api/payments/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reference, email, paymentId }),
    })
      .then((res) => res.json())
      .then((data: { verified?: boolean; order?: OrderRecord | null }) => {
        if (cancelled) return;
        if (data.verified) {
          setVerifiedOrder(
            data.order ??
              ({
                reference,
                email,
                paymentStatus: "paid",
                shippingMethodName: order?.shippingMethodName ?? "Shipping",
              } as OrderRecord),
          );
        }
      })
      .catch(() => undefined)
      .finally(() => {
        if (!cancelled) setChecking(false);
      });

    return () => {
      cancelled = true;
    };
  }, [demo, order, reference, email, paymentId, paidHint]);

  if (demo) {
    return (
      <div className="rounded-2xl border border-warning/40 bg-[#fff7e8] p-8 text-center">
        <h1 className="font-heading text-3xl font-bold text-grocery">Demo checkout request recorded</h1>
        <p className="mt-3 text-sm text-muted">
          Reference <strong>{reference}</strong> was created for interface testing only. Payment was not collected and
          this order is not marked as paid.
        </p>
        <p className="mt-2 text-sm text-muted">Email on file: {email}</p>
      </div>
    );
  }

  if (checking) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center">
        <h1 className="font-heading text-3xl font-bold text-grocery">Confirming payment…</h1>
        <p className="mt-3 text-muted">Please wait while we verify your Square payment.</p>
        <p className="mt-2 text-sm">Reference: {reference}</p>
      </div>
    );
  }

  const paid = verifiedOrder?.paymentStatus === "paid" || paidHint;

  if (!paid) {
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
        Order <strong>{reference}</strong> for {email} has verified payment status: paid.
      </p>
      {verifiedOrder?.shippingMethodName && (
        <p className="mt-2 text-sm text-muted">Shipping method: {verifiedOrder.shippingMethodName}</p>
      )}
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
