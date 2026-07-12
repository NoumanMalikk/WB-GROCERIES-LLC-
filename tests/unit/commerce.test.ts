import { describe, expect, it } from "vitest";
import { formatPrice } from "@/lib/utilities/format";
import { validateMinimumPrice, cartSubtotal, lineTotal } from "@/lib/pricing";
import { computeOrderTotals } from "@/lib/checkout/totals";
import { filterProducts, searchProducts, sortProducts } from "@/lib/search";
import { getActiveProducts } from "@/data/products";
import { storeConfig } from "@/data/store-config";
import { customerInfoSchema } from "@/lib/validation/checkout";

describe("pricing", () => {
  it("formats USD prices", () => {
    expect(formatPrice(6.99)).toBe("$6.99");
  });

  it("enforces minimum $5 product price", () => {
    expect(validateMinimumPrice(4.99)).toBe(false);
    expect(validateMinimumPrice(5)).toBe(true);
  });

  it("calculates line and cart totals", () => {
    expect(lineTotal(5.49, 2)).toBe(10.98);
    expect(cartSubtotal([{ price: 5.49, quantity: 2 }, { price: 6.99, quantity: 1 }])).toBe(17.97);
  });

  it("every catalogue product meets the minimum price", () => {
    for (const product of getActiveProducts()) {
      expect(product.price).toBeGreaterThanOrEqual(storeConfig.minimumProductPrice);
    }
  });
});

describe("shipping totals", () => {
  it("adds heavy surcharge for heavy baskets", () => {
    const totals = computeOrderTotals({
      items: [{ price: 10.99, quantity: 2, shippingWeight: 6 }],
      shippingMethodPrice: 8.99,
    });
    expect(totals.totalWeight).toBe(12);
    expect(totals.surcharge).toBe(storeConfig.shipping.heavyItemSurcharge);
    expect(totals.shipping).toBe(8.99 + storeConfig.shipping.heavyItemSurcharge);
  });
});

describe("search and filters", () => {
  const products = getActiveProducts();

  it("finds oats, coffee, pasta, chips, cookies, cleaning and paper towels", () => {
    expect(searchProducts(products, "oats").some((p) => p.slug.includes("quaker"))).toBe(true);
    expect(searchProducts(products, "coffee").some((p) => p.slug.includes("folgers"))).toBe(true);
    expect(searchProducts(products, "pasta").length).toBeGreaterThan(0);
    expect(searchProducts(products, "chips").length).toBeGreaterThan(0);
    expect(searchProducts(products, "cookies").some((p) => p.slug.includes("oreo"))).toBe(true);
    expect(searchProducts(products, "cleaning").length).toBeGreaterThan(0);
    expect(searchProducts(products, "paper towels").some((p) => p.slug.includes("bounty"))).toBe(true);
  });

  it("filters breakfast and under $10", () => {
    expect(filterProducts(products, { category: "breakfast" }).every((p) => p.category === "breakfast" || p.secondaryCategories.includes("breakfast"))).toBe(true);
    expect(filterProducts(products, { underTen: true }).every((p) => p.price < 10)).toBe(true);
  });

  it("sorts by price ascending", () => {
    const sorted = sortProducts(products, "price-asc");
    expect(sorted[0].price).toBeLessThanOrEqual(sorted[sorted.length - 1].price);
  });
});

describe("checkout validation", () => {
  it("requires a valid email", () => {
    const result = customerInfoSchema.safeParse({
      email: "bad",
      firstName: "Wendy",
      lastName: "Robin",
      phone: "5056468371",
    });
    expect(result.success).toBe(false);
  });
});

describe("catalogue integrity", () => {
  it("contains exactly 26 active products", () => {
    expect(getActiveProducts()).toHaveLength(26);
  });

  it("uses 1:1 product image paths and replacement flags", () => {
    for (const product of getActiveProducts()) {
      expect(product.images[0]?.src).toContain(`/products/${product.slug}/`);
      expect(product.images[0]?.replacementRequired).toBe(true);
    }
  });
});
