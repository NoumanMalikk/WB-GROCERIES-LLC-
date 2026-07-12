import type { MegaMenuSection, NavLink } from "./types";

export const primaryNav: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Breakfast", href: "/category/breakfast" },
  { label: "Pantry", href: "/category/pasta-pantry" },
  { label: "Snacks", href: "/category/snacks" },
  { label: "Beverages", href: "/category/beverages" },
  { label: "Household", href: "/category/household" },
  { label: "Under $10", href: "/collections/under-10" },
  { label: "Weekly Essentials", href: "/collections/weekly-essentials" },
];

export const megaMenu: MegaMenuSection[] = [
  {
    title: "Breakfast and drinks",
    links: [
      { label: "Cereal", href: "/category/breakfast" },
      { label: "Oats", href: "/category/breakfast" },
      { label: "Coffee", href: "/category/coffee-tea" },
      { label: "Tea", href: "/category/coffee-tea" },
      { label: "Soft Drinks", href: "/category/beverages" },
      { label: "Sports Drinks", href: "/category/beverages" },
    ],
  },
  {
    title: "Pantry",
    links: [
      { label: "Pasta", href: "/category/pasta-pantry" },
      { label: "Sauces", href: "/category/pasta-pantry" },
      { label: "Condiments", href: "/category/condiments-spreads" },
      { label: "Spreads", href: "/category/condiments-spreads" },
      { label: "Canned Goods", href: "/category/canned-goods" },
    ],
  },
  {
    title: "Snacks",
    links: [
      { label: "Cookies", href: "/category/snacks" },
      { label: "Crackers", href: "/category/snacks" },
      { label: "Chips", href: "/category/snacks" },
      { label: "Granola Bars", href: "/category/snacks" },
    ],
  },
  {
    title: "Household",
    links: [
      { label: "Laundry", href: "/category/household" },
      { label: "Dish Care", href: "/category/household" },
      { label: "Paper Products", href: "/category/household" },
      { label: "Trash Bags", href: "/category/household" },
    ],
  },
];

export const footerShop: NavLink[] = [
  { label: "All Products", href: "/shop" },
  { label: "Weekly Essentials", href: "/collections/weekly-essentials" },
  { label: "Under $10", href: "/collections/under-10" },
  { label: "Pantry Staples", href: "/collections/pantry-staples" },
];

export const footerCategories: NavLink[] = [
  { label: "Breakfast", href: "/category/breakfast" },
  { label: "Coffee & Tea", href: "/category/coffee-tea" },
  { label: "Snacks", href: "/category/snacks" },
  { label: "Beverages", href: "/category/beverages" },
  { label: "Household", href: "/category/household" },
];

export const footerHelp: NavLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "Order Tracking", href: "/order-tracking" },
];

export const footerCompany: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Food Information", href: "/food-information" },
];

export const footerLegal: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const mobileExtraLinks: NavLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "Order Tracking", href: "/order-tracking" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Cart", href: "/cart" },
];
