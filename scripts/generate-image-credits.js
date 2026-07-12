const fs = require("fs");

const products = [
  ["wbg-001", "quaker-old-fashioned-oats-42oz", "Quaker", "Quaker Old Fashioned Oats, 42 oz", "42 oz", 1],
  ["wbg-002", "cheerios-original-cereal-18oz", "General Mills", "Cheerios Original Cereal, 18 oz", "18 oz", 1],
  ["wbg-003", "kelloggs-frosted-flakes-17-3oz", "WK Kellogg Co", "Kellogg's Frosted Flakes Cereal, 17.3 oz", "17.3 oz", 1],
  ["wbg-004", "nature-valley-oats-honey-12-bars", "General Mills", "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars", "12 Bars", 12],
  ["wbg-005", "folgers-classic-roast-ground-coffee-25-9oz", "The Folgers Coffee Company", "Folgers Classic Roast Ground Coffee, 25.9 oz", "25.9 oz", 1],
  ["wbg-006", "lipton-black-tea-bags-100-count", "Unilever", "Lipton Black Tea Bags, 100 Count", "100 Count", 100],
  ["wbg-007", "barilla-spaghetti-16oz-two-pack", "Barilla", "Barilla Spaghetti Pasta, 16 oz, Two-Pack", "16 oz each (2-pack)", 2],
  ["wbg-008", "prego-traditional-italian-sauce-24oz", "Campbell Soup Company", "Prego Traditional Italian Sauce, 24 oz", "24 oz", 1],
  ["wbg-009", "kraft-original-macaroni-cheese-five-pack", "Kraft Heinz", "Kraft Original Macaroni and Cheese Dinner, Five-Pack", "5 Boxes", 5],
  ["wbg-010", "jif-creamy-peanut-butter-16oz", "The J.M. Smucker Company", "Jif Creamy Peanut Butter, 16 oz", "16 oz", 1],
  ["wbg-011", "smuckers-strawberry-preserves-18oz", "The J.M. Smucker Company", "Smucker's Strawberry Preserves, 18 oz", "18 oz", 1],
  ["wbg-012", "heinz-tomato-ketchup-32oz", "Kraft Heinz", "Heinz Tomato Ketchup, 32 oz", "32 oz", 1],
  ["wbg-013", "hellmanns-real-mayonnaise-30oz", "Unilever", "Hellmann's Real Mayonnaise, 30 oz", "30 oz", 1],
  ["wbg-014", "bushs-original-baked-beans-28oz", "Bush Brothers & Company", "Bush's Original Baked Beans, 28 oz", "28 oz", 1],
  ["wbg-015", "del-monte-whole-kernel-corn-four-pack", "Del Monte Foods", "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack", "15.25 oz each (4-pack)", 4],
  ["wbg-016", "starkist-chunk-light-tuna-four-pack", "StarKist Co.", "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack", "5 oz each (4-pack)", 4],
  ["wbg-017", "oreo-original-cookies-14-3oz", "Mondelēz International", "Oreo Original Chocolate Sandwich Cookies, 14.3 oz", "14.3 oz", 1],
  ["wbg-018", "ritz-original-crackers-13-7oz", "Mondelēz International", "Ritz Original Crackers, 13.7 oz", "13.7 oz", 1],
  ["wbg-019", "lays-classic-potato-chips-8oz", "Frito-Lay / PepsiCo", "Lay's Classic Potato Chips, 8 oz", "8 oz", 1],
  ["wbg-020", "doritos-nacho-cheese-9-25oz", "Frito-Lay / PepsiCo", "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz", "9.25 oz", 1],
  ["wbg-021", "coca-cola-original-12-pack", "The Coca-Cola Company", "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack", "12 fl oz cans (12-pack)", 12],
  ["wbg-022", "gatorade-variety-pack-12-count", "PepsiCo", "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack", "12 fl oz bottles (12-pack)", 12],
  ["wbg-023", "tide-simply-clean-fresh-84oz", "Procter & Gamble", "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz", "84 fl oz", 1],
  ["wbg-024", "dawn-ultra-dishwashing-liquid-18oz", "Procter & Gamble", "Dawn Ultra Dishwashing Liquid, 18 fl oz", "18 fl oz", 1],
  ["wbg-025", "bounty-essentials-six-double-rolls", "Procter & Gamble", "Bounty Essentials Paper Towels, Six Double Rolls", "6 Double Rolls", 6],
  ["wbg-026", "glad-forceflexplus-13-gallon-40-count", "The Clorox Company", "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count", "13 Gallon, 40 Count", 40],
];

const credits = products.flatMap(([id, slug, mfr, title, size, pack]) => [
  {
    productId: id,
    localFilename: `/products/${slug}/main.svg`,
    originalSourceUrl: null,
    manufacturer: mfr,
    supplierOrDistributor: null,
    licenseOrUsagePermission:
      "Development placeholder only — not authorized manufacturer media. Replacement required before launch.",
    dateObtained: "2026-07-13",
    exactProductMatch: false,
    exactFlavorMatch: false,
    exactPackageSizeMatch: false,
    exactPackCountMatch: false,
    whiteBackground: true,
    replacementRequired: true,
    altText: `${title} product package`,
    notes: `Placeholder labeled for exact ${size}, pack count ${pack}. Replace with authorized white-background packshot.`,
  },
  {
    productId: id,
    localFilename: `/products/${slug}/angle.svg`,
    originalSourceUrl: null,
    manufacturer: mfr,
    supplierOrDistributor: null,
    licenseOrUsagePermission: "Development placeholder only — replacement required before launch.",
    dateObtained: "2026-07-13",
    exactProductMatch: false,
    exactFlavorMatch: false,
    exactPackageSizeMatch: false,
    exactPackCountMatch: false,
    whiteBackground: true,
    replacementRequired: true,
    altText: `${title} alternate package view`,
    notes: "Secondary angle placeholder.",
  },
]);

fs.writeFileSync(
  "data/image-credits.ts",
  `import type { ImageCredit } from "./types";

export const imageCredits: ImageCredit[] = ${JSON.stringify(credits, null, 2)};

export function getCreditsForProduct(productId: string) {
  return imageCredits.filter((credit) => credit.productId === productId);
}

export function allImagesRequireReplacement() {
  return imageCredits.every((credit) => credit.replacementRequired);
}
`,
);

let md = `# Image sourcing — WB Groceries

**Status:** All 26 product main images currently use development placeholders and **must be replaced before launch**.

Authorized source priority:
1. Verified wholesaler/distributor photographs
2. Official manufacturer media approved for retailer use
3. Authorized distributor product media
4. Original WB Groceries photography of actual inventory
5. Licensed grocery-product database images

Do not use Amazon, Walmart, Kroger, H-E-B, Target, Instacart, search thumbnails, watermarks, wrong sizes/flavors/pack counts, or AI-generated branded packaging.

| Product | File | Exact title match | Size match | Pack match | White/clean BG | Authorized | Replace before launch |
|---|---|---|---|---|---|---|---|
`;

for (const [, slug, , title, size, pack] of products) {
  md += `| ${title} | /products/${slug}/main.svg | No (placeholder) | Intended ${size} | Intended ${pack} | Yes (white) | No | **Yes** |\n`;
}

md += `\nSee \`data/image-credits.ts\` for structured records.\n`;
fs.writeFileSync("docs/image-sourcing.md", md);
console.log("ok", credits.length);
