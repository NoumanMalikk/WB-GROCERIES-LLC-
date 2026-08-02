"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, type CheckoutFormValues, usStates } from "@/lib/validation/checkout";
import { useCartStore } from "@/lib/cart/store";
import { getCardById } from "@/data/catalog";
import { getActivePaymentProvider, getShippingMethods, isDemoCheckout } from "@/lib/checkout/demo";
import { computeOrderTotals } from "@/lib/checkout/totals";
import { formatPrice } from "@/lib/utilities/format";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { storeConfig } from "@/data/store-config";
import { SquareCardFields, type SquareCardFieldsHandle } from "@/components/checkout/square-card-fields";
import Link from "next/link";
import { useRouter } from "next/navigation";

const steps = ["Customer", "Shipping", "Method", "Billing", "Payment", "Review"] as const;

export function CheckoutForm() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [demo, setDemo] = useState(isDemoCheckout());
  const [provider, setProvider] = useState<"square" | "stripe" | "demo">(getActivePaymentProvider());
  const [squareApplicationId, setSquareApplicationId] = useState<string | null>(null);
  const [squareLocationId, setSquareLocationId] = useState<string | null>(null);
  const [squareEnvironment, setSquareEnvironment] = useState<"sandbox" | "production">("sandbox");
  const squareCardRef = useRef<SquareCardFieldsHandle | null>(null);
  const [squareSourceId, setSquareSourceId] = useState<string | null>(null);
  const [squareCardReady, setSquareCardReady] = useState(false);
  const methods = getShippingMethods();

  useEffect(() => {
    let cancelled = false;
    fetch("/api/payments/status")
      .then((res) => res.json())
      .then(
        (data: {
          demoCheckout?: boolean;
          provider?: "square" | "stripe" | "demo";
          squareApplicationId?: string | null;
          squareLocationId?: string | null;
          squareEnvironment?: "sandbox" | "production" | null;
        }) => {
          if (cancelled) return;
          if (typeof data.demoCheckout === "boolean") setDemo(data.demoCheckout);
          if (data.provider === "square" || data.provider === "stripe" || data.provider === "demo") {
            setProvider(data.provider);
          }
          if (data.squareApplicationId) setSquareApplicationId(data.squareApplicationId);
          if (data.squareLocationId) setSquareLocationId(data.squareLocationId);
          if (data.squareEnvironment === "sandbox" || data.squareEnvironment === "production") {
            setSquareEnvironment(data.squareEnvironment);
          }
        },
      )
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

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
          const product = getCardById(item.productId);
          return product ? { item, product } : null;
        })
        .filter(Boolean) as { item: (typeof items)[number]; product: NonNullable<ReturnType<typeof getCardById>> }[],
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

  const squareReady = provider === "square" && !demo && Boolean(squareApplicationId && squareLocationId);

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
      let sourceId: string | undefined;
      if (squareReady) {
        sourceId = squareSourceId ?? undefined;
        if (!sourceId) {
          throw new Error("Open the Payment step and enter your card details before paying.");
        }
      }

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          items: items.map((item) => ({ productId: item.productId, quantity: item.quantity })),
          sourceId,
        }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error || "Checkout failed");

      if (payload.demo) {
        router.push(
          `/checkout/success?demo=1&reference=${encodeURIComponent(payload.reference)}&email=${encodeURIComponent(data.customer.email)}`,
        );
        return;
      }

      if (payload.checkoutUrl) {
        clearCart();
        window.location.href = payload.checkoutUrl;
        return;
      }

      clearCart();
      const params = new URLSearchParams({
        reference: payload.reference,
        email: data.customer.email,
      });
      if (payload.paymentId) params.set("paymentId", payload.paymentId);
      if (payload.paid) params.set("paid", "1");
      router.push(`/checkout/success?${params.toString()}`);
    } catch (err) {
      setSquareSourceId(null);
      setError(err instanceof Error ? err.message : "Unable to complete checkout");
      if (squareReady) setStep(4);
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
            Secure card checkout is not active yet because Square keys are missing on this deployment.
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
              <div className="flex items-end justify-between gap-3">
                <h2 className="font-heading text-xl font-bold">Customer information</h2>
                <p className="text-xs text-muted">
                  <span className="text-error" aria-hidden>
                    *
                  </span>{" "}
                  Required
                </p>
              </div>
              <Field label="Email" required error={form.formState.errors.customer?.email?.message}>
                <Input type="email" autoComplete="email" aria-required="true" {...form.register("customer.email")} />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" required error={form.formState.errors.customer?.firstName?.message}>
                  <Input autoComplete="given-name" aria-required="true" {...form.register("customer.firstName")} />
                </Field>
                <Field label="Last name" required error={form.formState.errors.customer?.lastName?.message}>
                  <Input autoComplete="family-name" aria-required="true" {...form.register("customer.lastName")} />
                </Field>
              </div>
              <Field label="Phone" required error={form.formState.errors.customer?.phone?.message}>
                <Input type="tel" autoComplete="tel" aria-required="true" {...form.register("customer.phone")} />
              </Field>
            </section>
          )}

          {step === 1 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <div className="flex items-end justify-between gap-3">
                <h2 className="font-heading text-xl font-bold">Shipping address</h2>
                <p className="text-xs text-muted">
                  <span className="text-error" aria-hidden>
                    *
                  </span>{" "}
                  Required
                </p>
              </div>
              <AddressFields form={form} prefix="shipping" />
            </section>
          )}

          {step === 2 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <div className="flex items-end justify-between gap-3">
                <h2 className="font-heading text-xl font-bold">Shipping method</h2>
                <p className="text-xs text-muted">
                  <span className="text-error" aria-hidden>
                    *
                  </span>{" "}
                  Required
                </p>
              </div>
              <div className="space-y-3" role="radiogroup" aria-required="true" aria-label="Shipping method">
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
              {form.formState.errors.shippingMethodId?.message && (
                <p className="text-sm text-error">{form.formState.errors.shippingMethodId.message}</p>
              )}
              <p className="text-xs text-muted">{storeConfig.shipping.carrierEstimateText}</p>
            </section>
          )}

          {step === 3 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <div className="flex items-end justify-between gap-3">
                <h2 className="font-heading text-xl font-bold">Billing address</h2>
                {!values.billingSameAsShipping && (
                  <p className="text-xs text-muted">
                    <span className="text-error" aria-hidden>
                      *
                    </span>{" "}
                    Required
                  </p>
                )}
              </div>
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
                  Card payment is unavailable until Square is connected on this deployment.
                </p>
              ) : squareReady ? (
                <SquareCardFields
                  ref={squareCardRef}
                  applicationId={squareApplicationId!}
                  locationId={squareLocationId!}
                  environment={squareEnvironment}
                  onReadyChange={setSquareCardReady}
                />
              ) : provider === "stripe" ? (
                <p className="text-sm text-muted">
                  You will be redirected to Stripe Checkout to enter payment details securely.
                </p>
              ) : (
                <p className="text-sm text-muted">Loading secure payment form…</p>
              )}
            </section>
          )}

          {step === 5 && (
            <section className="space-y-4 rounded-2xl border border-border bg-white p-5">
              <h2 className="font-heading text-xl font-bold">Order review</h2>
              {squareReady && (
                <p className="rounded-xl bg-mint px-3 py-2 text-sm text-grocery">
                  {squareSourceId
                    ? "Card details secured on this page. Confirm below to charge — no redirect to Square."
                    : "Go back to Payment and enter your card before paying."}
                </p>
              )}
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.image} alt="" width={48} height={48} className="rounded-lg object-contain" />
                    <span className="flex-1">
                      {item.quantity} × {product.title} ({product.packageSize})
                    </span>
                    <span className="tabular-nums">{formatPrice(product.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" aria-required="true" {...form.register("termsAccepted")} />
                <span>
                  <span className="text-error" aria-hidden>
                    *
                  </span>{" "}
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
                <input type="checkbox" aria-required="true" {...form.register("privacyAcknowledged")} />
                <span>
                  <span className="text-error" aria-hidden>
                    *
                  </span>{" "}
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
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  if (step === 5) setSquareSourceId(null);
                  setStep((s) => s - 1);
                }}
              >
                Back
              </Button>
            )}
            {step < steps.length - 1 ? (
              <Button
                type="button"
                disabled={step === 4 && squareReady && !squareCardReady}
                onClick={async () => {
                  const fieldsByStep: (keyof CheckoutFormValues | string)[][] = [
                    ["customer.email", "customer.firstName", "customer.lastName", "customer.phone"],
                    ["shipping.line1", "shipping.city", "shipping.state", "shipping.zip", "shipping.country"],
                    ["shippingMethodId"],
                    values.billingSameAsShipping
                      ? ["billingSameAsShipping"]
                      : [
                          "billingSameAsShipping",
                          "billing.line1",
                          "billing.city",
                          "billing.state",
                          "billing.zip",
                          "billing.country",
                        ],
                    [],
                  ];
                  const valid = await form.trigger(fieldsByStep[step] as never);
                  if (!valid) {
                    setError("Please complete all required fields marked with * before continuing.");
                    return;
                  }
                  setError(null);

                  if (step === 4 && squareReady) {
                    try {
                      setError(null);
                      if (!squareCardRef.current?.isReady()) {
                        throw new Error("Card form is still loading. Wait a moment, then try again.");
                      }
                      const token = await squareCardRef.current.tokenize();
                      setSquareSourceId(token);
                    } catch (err) {
                      setError(err instanceof Error ? err.message : "Unable to validate card details");
                      return;
                    }
                  }

                  if (step < 4) setSquareSourceId(null);
                  setStep((s) => s + 1);
                }}
              >
                {step === 4 && squareReady && !squareCardReady ? "Loading card…" : "Continue"}
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={submitting}
                onClick={async () => {
                  const valid = await form.trigger(["termsAccepted", "privacyAcknowledged"]);
                  if (!valid) {
                    setError("Please accept the required Terms and Privacy checkboxes before paying.");
                  }
                }}
              >
                {submitting ? "Processing..." : demo ? "Place demo order request" : "Pay securely"}
              </Button>
            )}
          </div>
        </form>
      </div>

      <aside className="h-fit rounded-2xl border border-border bg-white p-5 lg:sticky lg:top-28">
        <h2 className="font-heading text-xl font-bold text-grocery">Order summary</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {lines.map(({ item, product }) => (
            <li key={product.id} className="flex justify-between gap-3">
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
        </div>
        <p className="mt-3 text-xs text-muted">{storeConfig.tax.message}</p>
      </aside>
    </div>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium">
        {label}
        {required && (
          <span className="ml-0.5 text-error" aria-hidden>
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-error" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

function AddressFields({
  form,
  prefix,
}: {
  form: ReturnType<typeof useForm<CheckoutFormValues>>;
  prefix: "shipping" | "billing";
}) {
  return (
    <div className="space-y-4">
      <Field label="Address line 1" required error={form.formState.errors[prefix]?.line1?.message}>
        <Input autoComplete="address-line1" aria-required="true" {...form.register(`${prefix}.line1`)} />
      </Field>
      <Field label="Address line 2">
        <Input autoComplete="address-line2" {...form.register(`${prefix}.line2`)} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="City" required error={form.formState.errors[prefix]?.city?.message}>
          <Input autoComplete="address-level2" aria-required="true" {...form.register(`${prefix}.city`)} />
        </Field>
        <Field label="State" required error={form.formState.errors[prefix]?.state?.message}>
          <select
            className="h-11 w-full rounded-xl border border-border bg-white px-3"
            aria-required="true"
            autoComplete="address-level1"
            {...form.register(`${prefix}.state`)}
          >
            {usStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="ZIP" required error={form.formState.errors[prefix]?.zip?.message}>
          <Input autoComplete="postal-code" aria-required="true" {...form.register(`${prefix}.zip`)} />
        </Field>
        <Field label="Country" required error={form.formState.errors[prefix]?.country?.message}>
          <Input autoComplete="country-name" aria-required="true" {...form.register(`${prefix}.country`)} />
        </Field>
      </div>
    </div>
  );
}
