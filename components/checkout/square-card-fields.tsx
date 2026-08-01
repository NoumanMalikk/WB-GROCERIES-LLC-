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
  isReady: () => boolean;
};

export const SquareCardFields = forwardRef<
  SquareCardFieldsHandle,
  {
    applicationId: string;
    locationId: string;
    environment: "sandbox" | "production";
    onReadyChange?: (ready: boolean) => void;
  }
>(function SquareCardFields({ applicationId, locationId, environment, onReadyChange }, ref) {
  const cardRef = useRef<Awaited<ReturnType<SquarePayments["card"]>> | null>(null);
  const onReadyChangeRef = useRef(onReadyChange);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    onReadyChangeRef.current = onReadyChange;
  }, [onReadyChange]);

  useEffect(() => {
    let cancelled = false;

    async function setup() {
      try {
        setLoadError(null);
        setReady(false);
        onReadyChangeRef.current?.(false);
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
        onReadyChangeRef.current?.(true);
      } catch (error) {
        if (!cancelled) {
          setLoadError(error instanceof Error ? error.message : "Unable to load card form");
          onReadyChangeRef.current?.(false);
        }
      }
    }

    void setup();

    return () => {
      cancelled = true;
      const card = cardRef.current;
      cardRef.current = null;
      onReadyChangeRef.current?.(false);
      void card?.destroy?.();
    };
  }, [applicationId, locationId, environment]);

  useImperativeHandle(ref, () => ({
    isReady: () => Boolean(cardRef.current),
    async tokenize() {
      // Brief wait covers React remount / SDK attach races after the fields paint.
      for (let attempt = 0; attempt < 20 && !cardRef.current; attempt += 1) {
        await new Promise((resolve) => window.setTimeout(resolve, 50));
      }
      if (!cardRef.current) {
        throw new Error("Card form is still loading. Wait a second, then try Continue again.");
      }
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
      {ready && !loadError && <p className="text-xs text-fresh">Card form ready — you can continue.</p>}
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
