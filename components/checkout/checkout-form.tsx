"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, type CheckoutFormValues, usStates } from "@/lib/validation/checkout";
import { useCartStore } from "@/lib/cart/store";
import { getProductById } from "@/data/products";
import { getShippingMethods, isDemoCheckout } from "@/lib/checkout/demo";
import { computeOrderTotals } from "@/lib/checkout/totals";
import { formatPrice } from "@/lib/utilities/format";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { storeConfig } from "@/data/store-config";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const steps = ["Customer", "Shipping", "Method", "Billing", "Payment", "Review"] as const;

export function CheckoutForm() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const demo = isDemoCheckout();
  const methods = getShippingMethods();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      customer: { email: "", firstName: "", lastName: "", phone: "" },
      shipping: { line1: "", line2: "", city: "", state: "TX", zip: "", country: "United States" },
      billingSameAsShipping: true,
      shippingMethodId: methods[0]?.id ?? "",
      termsAccepted: false,
      privacyAcknowledged: false,
      marketingConsent: false,
    },
    mode: "onBlur",
  });

  const values = form.watch();

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProductById(item.productId);
          return product ? { item, product } : null;
        })
        .filter(Boolean) as { item: (typeof items)[number]; product: NonNullable<ReturnType<typeof getProductById>> }[],
    [items],
  );

  const selectedMethod = methods.find((m) => m.id === values.shippingMethodId) ?? methods[0];
  const totals = computeOrderTotals({
    items: lines.map(({ item, product }) => ({
      price: product.price,
      quantity: item.quantity,
      shippingWeight: product.shippingWeight,
    })),
    shippingMethodPrice: selectedMethod?.price ?? 0,
    taxEstimate: 0,
  });

  if (lines.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center">
        <h1 className="font-heading text-3xl font-bold text-grocery">Your cart is empty</h1>
        <Link href="/shop" className="mt-6 inline-flex text-grocery underline">
          Return to shop
        </Link>
      </div>
    );
  }

  async function onSubmit(data: CheckoutFormValues) {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          items: items.map((item) => ({ productId: item.productId, quantity: item.quantity })),
        }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error || "Checkout failed");

      if (payload.demo) {
        setError(null);
        // Demo mode: do not mark paid or show fake success payment.
        router.push(`/checkout/success?demo=1&reference=${encodeURIComponent(payload.reference)}&email=${encodeURIComponent(data.customer.email)}`);
        return;
      }

      if (payload.checkoutUrl) {
        clearCart();
        window.location.href = payload.checkoutUrl;
        return;
      }

      clearCart();
      router.push(`/checkout/success?reference=${encodeURIComponent(payload.reference)}&email=${encodeURIComponent(data.customer.email)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to complete checkout");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <h1 className="font-heading text-4xl font-bold text-grocery">Checkout</h1>
        {demo && (
          <div className="mt-4 rounded-xl border border-warning/40 bg-[#fff7e8] p-4 text-sm text-warning">
            Checkout is currently in demonstration mode. Card details are not collected and orders are not marked as paid.
          </div>
        )}
        <ol className="mt-6 flex flex-wrap gap-2" aria-label="Checkout steps">
          {steps.map((label, index) => (
            <li
              key={label}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${index === step ? "bg-grocery text-white" : "bg-mint text-grocery"}`}
            >
              {index + 1}. {label}
            </li>
          ))}
        </ol>

        <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(onSubmit)} noValidate>
          {step === 0 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <h2 className="font-heading text-xl font-bold">Customer information</h2>
              <Field label="Email" error={form.formState.errors.customer?.email?.message}>
                <Input type="email" {...form.register("customer.email")} />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" error={form.formState.errors.customer?.firstName?.message}>
                  <Input {...form.register("customer.firstName")} />
                </Field>
                <Field label="Last name" error={form.formState.errors.customer?.lastName?.message}>
                  <Input {...form.register("customer.lastName")} />
                </Field>
              </div>
              <Field label="Phone" error={form.formState.errors.customer?.phone?.message}>
                <Input {...form.register("customer.phone")} />
              </Field>
            </section>
          )}

          {step === 1 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <h2 className="font-heading text-xl font-bold">Shipping address</h2>
              <AddressFields form={form} prefix="shipping" />
            </section>
          )}

          {step === 2 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <h2 className="font-heading text-xl font-bold">Shipping method</h2>
              <div className="space-y-3">
                {methods.map((method) => (
                  <label key={method.id} className="flex cursor-pointer gap-3 rounded-xl border border-border p-3">
                    <input type="radio" value={method.id} {...form.register("shippingMethodId")} />
                    <span className="flex-1">
                      <span className="block font-semibold">{method.name}</span>
                      <span className="block text-sm text-muted">{method.description}</span>
                    </span>
                    <span className="font-bold tabular-nums">{formatPrice(method.price)}</span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-muted">{storeConfig.shipping.carrierEstimateText}</p>
            </section>
          )}

          {step === 3 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <h2 className="font-heading text-xl font-bold">Billing address</h2>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" {...form.register("billingSameAsShipping")} />
                Same as shipping address
              </label>
              {!values.billingSameAsShipping && <AddressFields form={form} prefix="billing" />}
            </section>
          )}

          {step === 4 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <h2 className="font-heading text-xl font-bold">Payment</h2>
              {demo ? (
                <p className="text-sm text-muted">
                  In demonstration mode, WB Groceries does not collect card numbers through this form. When Stripe is
                  connected, payment is handled by Stripe Checkout or the Stripe Payment Element.
                </p>
              ) : (
                <p className="text-sm text-muted">
                  You will be redirected to Stripe Checkout to enter payment details securely. Card information is never
                  collected in ordinary custom text fields.
                </p>
              )}
            </section>
          )}

          {step === 5 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <h2 className="font-heading text-xl font-bold">Order review</h2>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> {values.customer.email}
                </p>
                <p>
                  <strong>Ship to:</strong> {values.shipping.line1}, {values.shipping.city}, {values.shipping.state}{" "}
                  {values.shipping.zip}
                </p>
                <p>
                  <strong>Method:</strong> {selectedMethod?.name}
                </p>
              </div>
              <ul className="divide-y divide-border rounded-xl border border-border">
                {lines.map(({ item, product }) => (
                  <li key={product.id} className="flex items-center gap-3 p-3 text-sm">
                    <Image src={product.images[0].src} alt="" width={48} height={48} className="rounded-lg object-contain" />
                    <span className="flex-1">
                      {item.quantity} × {product.title} ({product.packageSize})
                    </span>
                    <span className="tabular-nums">{formatPrice(product.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...form.register("termsAccepted")} />
                <span>
                  I accept the{" "}
                  <Link href="/terms" className="underline">
                    Terms and Conditions
                  </Link>
                </span>
              </label>
              {form.formState.errors.termsAccepted && (
                <p className="text-sm text-error">{form.formState.errors.termsAccepted.message}</p>
              )}
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...form.register("privacyAcknowledged")} />
                <span>
                  I acknowledge the{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {form.formState.errors.privacyAcknowledged && (
                <p className="text-sm text-error">{form.formState.errors.privacyAcknowledged.message}</p>
              )}
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...form.register("marketingConsent")} />
                <span>Send me occasional product announcements (optional)</span>
              </label>
            </section>
          )}

          {error && (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-error" role="alert">
              {error}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {step > 0 && (
              <Button type="button" variant="secondary" onClick={() => setStep((s) => s - 1)}>
                Back
              </Button>
            )}
            {step < steps.length - 1 ? (
              <Button
                type="button"
                onClick={async () => {
                  const fieldsByStep: (keyof CheckoutFormValues | string)[][] = [
                    ["customer.email", "customer.firstName", "customer.lastName", "customer.phone"],
                    ["shipping.line1", "shipping.city", "shipping.state", "shipping.zip", "shipping.country"],
                    ["shippingMethodId"],
                    ["billingSameAsShipping"],
                    [],
                  ];
                  const valid = await form.trigger(fieldsByStep[step] as never);
                  if (valid) setStep((s) => s + 1);
                }}
              >
                Continue
              </Button>
            ) : (
              <Button type="submit" disabled={submitting}>
                {submitting ? "Processing..." : demo ? "Place demo order request" : "Pay securely"}
              </Button>
            )}
          </div>
        </form>
      </div>

      <aside className="h-fit rounded-2xl border border-border bg-white p-5 lg:sticky lg:top-28">
        <h2 className="font-heading text-xl font-bold text-grocery">Summary</h2>
        <ul className="mt-4 space-y-3">
          {lines.map(({ item, product }) => (
            <li key={product.id} className="flex justify-between gap-3 text-sm">
              <span>
                {item.quantity} × {product.title}
              </span>
              <span className="tabular-nums">{formatPrice(product.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-1 border-t border-border pt-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="tabular-nums">{formatPrice(totals.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="tabular-nums">{formatPrice(totals.shipping)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span className="tabular-nums">{formatPrice(totals.tax)}</span>
          </div>
          <div className="flex justify-between text-base font-bold">
            <span>Total</span>
            <span className="tabular-nums">{formatPrice(totals.total)}</span>
          </div>
          <p className="pt-2 text-xs text-muted">{storeConfig.tax.message}</p>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-error">{error}</span>}
    </label>
  );
}

function AddressFields({
  form,
  prefix,
}: {
  form: {
    register: ReturnType<typeof useForm<CheckoutFormValues>>["register"];
    formState: ReturnType<typeof useForm<CheckoutFormValues>>["formState"];
  };
  prefix: "shipping" | "billing";
}) {
  const errors = form.formState.errors[prefix];
  return (
    <>
      <Field label="Address line 1" error={errors?.line1?.message}>
        <Input {...form.register(`${prefix}.line1`)} />
      </Field>
      <Field label="Address line 2 (optional)" error={errors?.line2?.message}>
        <Input {...form.register(`${prefix}.line2`)} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="City" error={errors?.city?.message}>
          <Input {...form.register(`${prefix}.city`)} />
        </Field>
        <Field label="State" error={errors?.state?.message}>
          <select className="h-11 w-full rounded-xl border border-border bg-white px-3" {...form.register(`${prefix}.state`)}>
            {usStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="ZIP code" error={errors?.zip?.message}>
          <Input {...form.register(`${prefix}.zip`)} />
        </Field>
        <Field label="Country" error={errors?.country?.message}>
          <Input {...form.register(`${prefix}.country`)} readOnly />
        </Field>
      </div>
    </>
  );
}
