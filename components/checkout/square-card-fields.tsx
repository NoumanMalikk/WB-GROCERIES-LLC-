"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

type SquarePayments = {
  card: () => Promise<{
    attach: (selector: string) => Promise<void>;
    destroy?: () => Promise<void>;
    tokenize: () => Promise<{ status: string; token?: string; errors?: Array<{ message?: string }> }>;
  }>;
};

declare global {
  interface Window {
    Square?: {
      payments: (applicationId: string, locationId: string) => SquarePayments;
    };
  }
}

export type SquareCardFieldsHandle = {
  tokenize: () => Promise<string>;
};

export const SquareCardFields = forwardRef<
  SquareCardFieldsHandle,
  {
    applicationId: string;
    locationId: string;
    environment: "sandbox" | "production";
  }
>(function SquareCardFields({ applicationId, locationId, environment }, ref) {
  const cardRef = useRef<Awaited<ReturnType<SquarePayments["card"]>> | null>(null);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function setup() {
      try {
        setLoadError(null);
        setReady(false);
        await loadSquareScript(environment);
        if (cancelled || !window.Square) throw new Error("Square.js failed to load");

        const payments = window.Square.payments(applicationId, locationId);
        const card = await payments.card();
        await card.attach("#square-card-container");
        if (cancelled) {
          await card.destroy?.();
          return;
        }
        cardRef.current = card;
        setReady(true);
      } catch (error) {
        if (!cancelled) {
          setLoadError(error instanceof Error ? error.message : "Unable to load card form");
        }
      }
    }

    void setup();

    return () => {
      cancelled = true;
      const card = cardRef.current;
      cardRef.current = null;
      void card?.destroy?.();
    };
  }, [applicationId, locationId, environment]);

  useImperativeHandle(ref, () => ({
    async tokenize() {
      if (!cardRef.current) throw new Error("Card form is not ready yet");
      const result = await cardRef.current.tokenize();
      if (result.status === "OK" && result.token) return result.token;
      const detail = result.errors?.map((item) => item.message).filter(Boolean).join("; ");
      throw new Error(detail || "Card details are incomplete or invalid");
    },
  }));

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted">
        Enter your card details below. Visa, debit, Mastercard and other cards supported by Square are accepted here on
        this page.
      </p>
      <div id="square-card-container" className="min-h-[96px] rounded-xl border border-border bg-white p-3" />
      {!ready && !loadError && <p className="text-xs text-muted">Loading secure card form…</p>}
      {loadError && <p className="text-sm text-error">{loadError}</p>}
    </div>
  );
});

function loadSquareScript(environment: "sandbox" | "production") {
  const src =
    environment === "production"
      ? "https://web.squarecdn.com/v1/square.js"
      : "https://sandbox.web.squarecdn.com/v1/square.js";

  const existing = document.querySelector<HTMLScriptElement>(`script[data-square-web-payments="1"]`);
  if (existing) {
    if (existing.dataset.src === src && window.Square) return Promise.resolve();
    existing.remove();
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.squareWebPayments = "1";
    script.dataset.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Square Web Payments SDK"));
    document.head.appendChild(script);
  });
}
