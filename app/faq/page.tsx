import { faqItems } from "@/data/faq";
import { buildPageMetadata, faqJsonLd } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "FAQ | WB Groceries",
  description: "Answers about products, shipping, returns, tracking and shopping with WB Groceries.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...faqItems])) }} />
      <h1 className="font-heading text-4xl font-bold text-grocery">Frequently asked questions</h1>
      <div className="mt-8 space-y-3">
        {faqItems.map((item) => (
          <details key={item.id} className="rounded-2xl border border-border bg-white p-4">
            <summary className="cursor-pointer font-semibold text-grocery">{item.question}</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
