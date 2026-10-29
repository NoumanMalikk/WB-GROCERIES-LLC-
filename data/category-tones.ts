import type { BannerTone } from "@/components/ui/page-banner";

/** Pastel backdrop per category, chosen to flatter the packaging colours in its collage. */
export const categoryTones: Record<string, BannerTone> = {
  breakfast: "butter",
  "coffee-tea": "peach",
  "pasta-pantry": "blush",
  "condiments-spreads": "sage",
  "canned-goods": "sky",
  snacks: "peach",
  beverages: "butter",
  household: "sage",
};

export const toneClasses: Record<BannerTone, string> = {
  butter: "bg-butter",
  sage: "bg-sage",
  blush: "bg-blush",
  sky: "bg-sky",
  peach: "bg-peach",
};
