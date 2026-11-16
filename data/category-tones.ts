import type { BannerTone } from "@/components/ui/page-banner";

/** Soft brand-tinted backdrops — stay within the green / cool-surface system. */
export const categoryTones: Record<string, BannerTone> = {
  breakfast: "butter",
  "coffee-tea": "peach",
  "pasta-pantry": "sage",
  "condiments-spreads": "blush",
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
