"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-heading text-3xl font-bold text-grocery">Something went wrong</h1>
      <p className="mt-3 text-sm text-muted">{error.message || "Please try again."}</p>
      <button type="button" onClick={reset} className="mt-6 rounded-xl bg-gold px-5 py-3 font-semibold text-forest">
        Try again
      </button>
    </div>
  );
}
