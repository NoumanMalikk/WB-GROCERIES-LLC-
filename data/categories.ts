import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "breakfast",
    name: "Breakfast",
    shortName: "Breakfast",
    description:
      "Cereal, oats and breakfast bars for simpler mornings and pantry restocking.",
    seoTitle: "Breakfast Products | WB Groceries",
    seoDescription:
      "Shop cereal, oats and granola bars online from WB Groceries.",
    image: "/categories/breakfast.png",
    navGroup: "breakfast-drinks",
  },
  {
    slug: "coffee-tea",
    name: "Coffee & Tea",
    shortName: "Coffee & Tea",
    description:
      "Everyday ground coffee and classic tea bags for hot or iced drinks.",
    seoTitle: "Coffee & Tea | WB Groceries",
    seoDescription:
      "Shop Folgers coffee, Lipton tea and everyday hot drink essentials.",
    image: "/categories/coffee-tea.png",
    navGroup: "breakfast-drinks",
  },
  {
    slug: "pasta-pantry",
    name: "Pasta & Pantry",
    shortName: "Pantry",
    description:
      "Pasta, sauce and boxed pantry staples for simple family meals.",
    seoTitle: "Pasta & Pantry Staples | WB Groceries",
    seoDescription:
      "Shop pasta, tomato sauce and macaroni and cheese pantry packs.",
    image: "/categories/pasta-pantry.png",
    navGroup: "pantry",
  },
  {
    slug: "condiments-spreads",
    name: "Condiments & Spreads",
    shortName: "Condiments",
    description:
      "Peanut butter, preserves, ketchup and mayonnaise for everyday meals.",
    seoTitle: "Condiments & Spreads | WB Groceries",
    seoDescription:
      "Shop peanut butter, strawberry preserves, ketchup and mayonnaise.",
    image: "/categories/condiments-spreads.png",
    navGroup: "pantry",
  },
  {
    slug: "canned-goods",
    name: "Canned Goods",
    shortName: "Canned Goods",
    description:
      "Shelf-stable canned beans, vegetables and tuna for pantry readiness.",
    seoTitle: "Canned Goods | WB Groceries",
    seoDescription:
      "Shop canned beans, corn and tuna multipacks for your pantry.",
    image: "/categories/canned-goods.png",
    navGroup: "pantry",
  },
  {
    slug: "snacks",
    name: "Snacks",
    shortName: "Snacks",
    description:
      "Cookies, crackers, chips and granola bars for busy days and lunchboxes.",
    seoTitle: "Snacks | WB Groceries",
    seoDescription:
      "Shop Oreo cookies, Ritz crackers, Lay’s chips, Doritos and Nature Valley bars.",
    image: "/categories/snacks.png",
    navGroup: "snacks",
  },
  {
    slug: "beverages",
    name: "Beverages",
    shortName: "Beverages",
    description:
      "Soft drinks and sports drinks in convenient multipacks for home restocking.",
    seoTitle: "Beverages | WB Groceries",
    seoDescription:
      "Shop Coca-Cola and Gatorade multipacks for home beverage restocking.",
    image: "/categories/beverages.png",
    navGroup: "breakfast-drinks",
  },
  {
    slug: "household",
    name: "Household Essentials",
    shortName: "Household",
    description:
      "Laundry detergent, dish soap, paper towels and trash bags for everyday home care.",
    seoTitle: "Household Essentials | WB Groceries",
    seoDescription:
      "Shop Tide, Dawn, Bounty and Glad household essentials online.",
    image: "/categories/household.png",
    navGroup: "household",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
