import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-heading text-4xl font-bold text-grocery">Page not found</h1>
      <p className="mt-3 text-muted">The page you requested is unavailable. Browse the shop or return home.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-xl bg-gold px-5 py-3 font-semibold text-forest">Home</Link>
        <Link href="/shop" className="rounded-xl border border-border bg-white px-5 py-3 font-semibold text-grocery">Shop</Link>
      </div>
    </div>
  );
}
