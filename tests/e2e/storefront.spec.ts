import { test, expect } from "@playwright/test";

test.describe("WB Groceries storefront", () => {
  test("homepage loads with brand messaging", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Stock the kitchen/i })).toBeVisible();
    await expect(page.getByText(/Crockett, Texas-based online grocery retailer/i)).toBeVisible();
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
    await expect(page.getByText(/Folgers/i).first()).toBeVisible();
    await page.goto("/search?q=pasta");
    await expect(page.getByText(/Barilla|Prego/i).first()).toBeVisible();
  });

  test("product, wishlist and cart flow", async ({ page }) => {
    await page.goto("/product/folgers-classic-roast-ground-coffee-25-9oz");
    await expect(page.getByRole("heading", { name: /Folgers Classic Roast/i })).toBeVisible();
    await page.getByRole("button", { name: /Add to wishlist|Save .* wishlist/i }).first().click();
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await page.goto("/cart");
    await expect(page.getByText(/Folgers/i).first()).toBeVisible();
    await page.getByLabel("Increase quantity").click();
    await page.getByRole("button", { name: "Remove" }).click();
    await expect(page.getByText(/cart is empty/i)).toBeVisible();
  });

  test("checkout demonstration flow", async ({ page }) => {
    await page.goto("/product/oreo-original-cookies-14-3oz");
    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await page.goto("/checkout");
    await expect(page.getByText(/demonstration mode/i)).toBeVisible();
    await page.getByLabel("Email").fill("customer@example.com");
    await page.getByLabel("First name").fill("Wendy");
    await page.getByLabel("Last name").fill("Robin");
    await page.getByLabel("Phone").fill("5056468371");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByLabel("Address line 1").fill("100 Main St");
    await page.getByLabel("City").fill("Crockett");
    await page.getByLabel("ZIP code").fill("75835");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByText(/Terms and Conditions/i).locator("..").locator('input[type="checkbox"]').first().check();
    await page.getByText(/Privacy Policy/i).locator("..").locator('input[type="checkbox"]').first().check();
    await page.getByRole("button", { name: /Place demo order request/i }).click();
    await expect(page.getByText(/Demo checkout request recorded|demonstration/i)).toBeVisible();
    await expect(page.getByText(/not marked as paid|Payment was not collected/i)).toBeVisible();
  });

  test("contact, tracking, mobile nav, catalogue size, no admin", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel("Name").fill("Test User");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Message").fill("This is a product question for testing.");
    await page.getByText(/consent/i).locator("..").locator('input[type="checkbox"]').check();
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
    const count = await boxes.count();
    expect(count).toBe(26);
    const first = await boxes.first().boundingBox();
    const last = await boxes.nth(3).boundingBox();
    expect(first?.height).toBeTruthy();
    expect(Math.abs((first?.height || 0) - (last?.height || 0))).toBeLessThan(2);
  });
});
