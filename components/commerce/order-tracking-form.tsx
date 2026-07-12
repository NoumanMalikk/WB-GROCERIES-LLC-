"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function OrderTrackingForm() {
  const [reference, setReference] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [order, setOrder] = useState<Record<string, unknown> | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    setOrder(null);
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reference, email }),
    });
    const data = await res.json();
    if (!data.found) {
      setResult(data.message);
      return;
    }
    setOrder(data.order);
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-white p-5">
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Order reference</span>
          <Input value={reference} onChange={(e) => setReference(e.target.value)} required />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Email used at checkout</span>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <Button type="submit">Track order</Button>
      </form>
      {result && <p className="rounded-xl bg-mint p-4 text-sm text-grocery">{result}</p>}
      {order && (
        <div className="rounded-2xl border border-border bg-white p-5 text-sm">
          <p><strong>Reference:</strong> {String(order.reference)}</p>
          <p><strong>Payment:</strong> {String(order.paymentStatus)}</p>
          <p><strong>Status:</strong> {String(order.fulfillmentStatus)}</p>
          <p><strong>Shipping method:</strong> {String(order.shippingMethodName)}</p>
        </div>
      )}
    </div>
  );
}
