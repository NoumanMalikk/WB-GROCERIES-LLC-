import { buildPageMetadata } from "@/lib/seo/metadata";
import { storeConfig } from "@/data/store-config";

export const metadata = buildPageMetadata({
  title: "About WB Groceries",
  description: "Learn about WB GROCERIES LLC, a Crockett, Texas-based online grocery retailer.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-grocery">Everyday groceries without the endless search.</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground">
        <p>
          WB GROCERIES LLC is a Crockett, Texas-based grocery retailer focused on packaged groceries, snacks,
          beverages and household essentials.
        </p>
        <p>
          The online store is organized around familiar products that customers regularly use at home. Clear package
          sizes, pack counts, product images and category navigation help customers understand what they are purchasing
          before checkout.
        </p>
        <p>WB Groceries aims to make everyday grocery shopping simple, organized and convenient.</p>
        <p className="font-heading text-xl font-bold text-grocery">{storeConfig.tagline}</p>
      </div>
    </div>
  );
}
