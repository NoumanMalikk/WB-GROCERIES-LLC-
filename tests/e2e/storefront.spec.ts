import { test, expect } from "@playwright/test";

/**
 * Locators are scoped to #main-content wherever the same copy also appears in
 * the header or footer, and to product cards wherever a brand name also appears
 * inside a hidden <option> in the filter controls.
 */
const main = (page: import("@playwright/test").Page) => page.locator("#main-content");

/**
 * A click that lands before React hydrates is silently dropped, so retry until
 * the header cart badge actually reflects the item.
 */
async function addToCart(page: import("@playwright/test").Page) {
  const filledCart = page.getByRole("button", { name: /Cart, [1-9]\d* items?/ });
  await expect(async () => {
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await expect(filledCart).toBeVisible({ timeout: 1_000 });
  }).toPass({ timeout: 15_000 });
}

test.describe("WB Groceries storefront", () => {
  test("homepage loads with brand messaging", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Stock the kitchen/i })).toBeVisible();
    await expect(main(page).getByText(/Crockett, Texas-based online grocery retailer/i)).toBeVisible();
  });

  test("shop lists products and filters breakfast", async ({ page }) => {
    await page.goto("/shop");
    await expect(page.getByText(/Showing 26 products/i)).toBeVisible();
    await page.goto("/category/breakfast");
    await expect(page.getByRole("heading", { name: "Breakfast" })).toBeVisible();
  });

  test("filters snacks, household and under $10", async ({ page }) => {
    await page.goto("/category/snacks");
    await expect(page.getByRole("heading", { name: "Snacks" })).toBeVisible();
    await page.goto("/category/household");
    await expect(page.getByRole("heading", { name: /Household/i })).toBeVisible();
    await page.goto("/collections/under-10");
    await expect(page.getByRole("heading", { name: /under \$10/i })).toBeVisible();
  });

  test("search finds coffee and pasta", async ({ page }) => {
    await page.goto("/search?q=coffee");
    await expect(main(page).locator("article").getByText(/Folgers/i).first()).toBeVisible();
    await page.goto("/search?q=pasta");
    await expect(main(page).locator("article").getByText(/Barilla|Prego/i).first()).toBeVisible();
  });

  test("product, wishlist and cart flow", async ({ page }) => {
    await page.goto("/product/folgers-classic-roast-ground-coffee-25-9oz");
    await expect(page.getByRole("heading", { name: /Folgers Classic Roast/i })).toBeVisible();
    await page.getByRole("button", { name: /Add to wishlist/i }).first().click();
    await addToCart(page);

    await page.goto("/cart");
    await expect(main(page).getByText(/Folgers/i).first()).toBeVisible();
    // The cart drawer stays mounted, so quantity controls exist twice.
    await main(page).getByLabel("Increase quantity").click();
    await main(page).getByRole("button", { name: "Remove" }).click();
    await expect(main(page).getByText(/cart is empty/i)).toBeVisible();
  });

  test("checkout collects customer and shipping details", async ({ page }) => {
    await page.goto("/product/oreo-original-cookies-14-3oz");
    await addToCart(page);

    await page.goto("/checkout");
    await expect(page.getByRole("heading", { name: /Checkout/i })).toBeVisible();
    // Order summary must reflect the cart before any details are entered.
    await expect(main(page).getByText(/Oreo Original/i).first()).toBeVisible();
    await expect(main(page).getByText(/Subtotal/i)).toBeVisible();

    await page.getByLabel("Email").fill("customer@example.com");
    await page.getByLabel("First name").fill("Wendy");
    await page.getByLabel("Last name").fill("Robin");
    await page.getByLabel("Phone").fill("5056468371");
    await page.getByRole("button", { name: "Continue" }).click();

    await page.getByLabel("Address line 1").fill("100 Main St");
    await page.getByLabel("City").fill("Crockett");
    await page.getByLabel("ZIP", { exact: true }).fill("75835");
    await page.getByRole("button", { name: "Continue" }).click();

    // Reaching the shipping-method step proves the earlier steps validated.
    await expect(page.getByRole("heading", { name: "Shipping method" })).toBeVisible();
  });

  test("contact, tracking, mobile nav, catalogue size, no admin", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel("Name", { exact: true }).fill("Test User");
    await page.getByLabel("Email", { exact: true }).fill("test@example.com");
    await page.getByLabel("Message", { exact: true }).fill("This is a product question for testing.");
    await page.getByRole("checkbox", { name: /I consent/i }).check();
    await page.getByRole("button", { name: /Send message/i }).click();
    await expect(page.getByText(/received your message/i)).toBeVisible();

    await page.goto("/order-tracking");
    await expect(page.getByRole("heading", { name: /Order tracking/i })).toBeVisible();

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: /Open menu/i }).click();
    await expect(page.getByRole("dialog", { name: /Mobile navigation/i })).toBeVisible();

    await page.goto("/shop");
    await expect(page.getByText(/Showing 26 products/i)).toBeVisible();

    const response = await page.goto("/admin");
    expect(response?.status()).toBeGreaterThanOrEqual(400);
  });

  test("product images and equal cards", async ({ page }) => {
    await page.goto("/shop");
    const cards = page.locator("article");
    await expect(cards).toHaveCount(26);

    const boxes = page.locator("article .aspect-square");
    await expect(boxes).toHaveCount(26);
    await expect(boxes.first()).toBeVisible();

    const first = await boxes.first().boundingBox();
    const fourth = await boxes.nth(3).boundingBox();
    expect(first?.height).toBeTruthy();
    expect(Math.abs((first?.height ?? 0) - (fourth?.height ?? 0))).toBeLessThan(2);
  });
});
