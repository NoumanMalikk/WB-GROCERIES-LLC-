import type { ProductCategorySlug, StockStatus } from "./types";

export interface ProductCardData {
  id: string;
  slug: string;
  brand: string;
  title: string;
  packageSize: string;
  packCount: number;
  price: number;
  unitPrice: string | null;
  image: string;
  imageAlt: string;
  stockStatus: StockStatus;
  maximumOrderQuantity: number;
  category: ProductCategorySlug;
  secondaryCategories: ProductCategorySlug[];
  weeklyEssential: boolean;
  featured: boolean;
  shortDescription: string;
  synonyms: string[];
  shippingWeight: number;
}

export interface SearchIndexItem {
  id: string;
  slug: string;
  brand: string;
  title: string;
  category: ProductCategorySlug;
  packageSize: string;
  packCount: number;
  synonyms: string[];
  shortDescription: string;
  image: string;
}

export const productCards: ProductCardData[] = [
  {
    "id": "wbg-001",
    "slug": "quaker-old-fashioned-oats-42oz",
    "brand": "Quaker",
    "title": "Quaker Old Fashioned Oats, 42 oz",
    "packageSize": "42 oz",
    "packCount": 1,
    "price": 6.99,
    "unitPrice": "$0.17 / oz",
    "image": "/products/quaker-old-fashioned-oats-42oz/main.webp",
    "imageAlt": "Quaker Old Fashioned Oats, 42 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "breakfast",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Classic rolled oats for warm breakfasts, overnight oats and everyday recipes.",
    "synonyms": [
      "oats",
      "oatmeal",
      "breakfast",
      "quaker"
    ],
    "shippingWeight": 3
  },
  {
    "id": "wbg-002",
    "slug": "cheerios-original-cereal-18oz",
    "brand": "Cheerios",
    "title": "Cheerios Original Cereal, 18 oz",
    "packageSize": "18 oz",
    "packCount": 1,
    "price": 6.49,
    "unitPrice": "$0.36 / oz",
    "image": "/products/cheerios-original-cereal-18oz/main.webp",
    "imageAlt": "Cheerios Original Cereal, 18 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "breakfast",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Classic toasted oat cereal for breakfast and everyday snacking.",
    "synonyms": [
      "cereal",
      "cheerios",
      "oat cereal",
      "breakfast"
    ],
    "shippingWeight": 1.4
  },
  {
    "id": "wbg-003",
    "slug": "kelloggs-frosted-flakes-17-3oz",
    "brand": "Kellogg's",
    "title": "Kellogg's Frosted Flakes Cereal, 17.3 oz",
    "packageSize": "17.3 oz",
    "packCount": 1,
    "price": 6.49,
    "unitPrice": "$0.38 / oz",
    "image": "/products/kelloggs-frosted-flakes-17-3oz/main.webp",
    "imageAlt": "Kellogg's Frosted Flakes Cereal, 17.3 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "breakfast",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Crunchy frosted corn cereal for simple breakfasts and snacks.",
    "synonyms": [
      "frosted flakes",
      "cereal",
      "kellogg",
      "breakfast"
    ],
    "shippingWeight": 1.35
  },
  {
    "id": "wbg-004",
    "slug": "nature-valley-oats-honey-12-bars",
    "brand": "Nature Valley",
    "title": "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars",
    "packageSize": "12 Bars",
    "packCount": 12,
    "price": 5.49,
    "unitPrice": "$0.46 / bar",
    "image": "/products/nature-valley-oats-honey-12-bars/main.webp",
    "imageAlt": "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "breakfast",
    "secondaryCategories": [
      "snacks"
    ],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Crunchy oat-and-honey granola bars in individually packaged portions.",
    "synonyms": [
      "granola",
      "granola bars",
      "nature valley",
      "bars",
      "honey"
    ],
    "shippingWeight": 1.1
  },
  {
    "id": "wbg-005",
    "slug": "folgers-classic-roast-ground-coffee-25-9oz",
    "brand": "Folgers",
    "title": "Folgers Classic Roast Ground Coffee, 25.9 oz",
    "packageSize": "25.9 oz",
    "packCount": 1,
    "price": 12.99,
    "unitPrice": "$0.50 / oz",
    "image": "/products/folgers-classic-roast-ground-coffee-25-9oz/main.webp",
    "imageAlt": "Folgers Classic Roast Ground Coffee, 25.9 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "coffee-tea",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Medium-roast ground coffee for familiar everyday brewing.",
    "synonyms": [
      "coffee",
      "folgers",
      "ground coffee",
      "roast"
    ],
    "shippingWeight": 2
  },
  {
    "id": "wbg-006",
    "slug": "lipton-black-tea-bags-100-count",
    "brand": "Lipton",
    "title": "Lipton Black Tea Bags, 100 Count",
    "packageSize": "100 Count",
    "packCount": 100,
    "price": 7.49,
    "unitPrice": "$0.07 / bag",
    "image": "/products/lipton-black-tea-bags-100-count/main.webp",
    "imageAlt": "Lipton Black Tea Bags, 100 Count product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "coffee-tea",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Classic black tea bags for hot tea or iced tea.",
    "synonyms": [
      "tea",
      "lipton",
      "black tea",
      "tea bags"
    ],
    "shippingWeight": 0.9
  },
  {
    "id": "wbg-007",
    "slug": "barilla-spaghetti-16oz-two-pack",
    "brand": "Barilla",
    "title": "Barilla Spaghetti Pasta, 16 oz, Two-Pack",
    "packageSize": "16 oz each (2-pack)",
    "packCount": 2,
    "price": 5.49,
    "unitPrice": "$0.17 / oz",
    "image": "/products/barilla-spaghetti-16oz-two-pack/main.webp",
    "imageAlt": "Barilla Spaghetti Pasta, 16 oz, Two-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "pasta-pantry",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "A convenient two-pack of classic spaghetti for pantry restocking.",
    "synonyms": [
      "pasta",
      "spaghetti",
      "barilla",
      "noodles"
    ],
    "shippingWeight": 2.4
  },
  {
    "id": "wbg-008",
    "slug": "prego-traditional-italian-sauce-24oz",
    "brand": "Prego",
    "title": "Prego Traditional Italian Sauce, 24 oz",
    "packageSize": "24 oz",
    "packCount": 1,
    "price": 5.49,
    "unitPrice": "$0.23 / oz",
    "image": "/products/prego-traditional-italian-sauce-24oz/main.webp",
    "imageAlt": "Prego Traditional Italian Sauce, 24 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "pasta-pantry",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "A classic tomato-based pasta sauce for spaghetti and simple family meals.",
    "synonyms": [
      "sauce",
      "pasta sauce",
      "prego",
      "tomato sauce"
    ],
    "shippingWeight": 2
  },
  {
    "id": "wbg-009",
    "slug": "kraft-original-macaroni-cheese-five-pack",
    "brand": "Kraft",
    "title": "Kraft Original Macaroni and Cheese Dinner, Five-Pack",
    "packageSize": "5 Boxes",
    "packCount": 5,
    "price": 7.99,
    "unitPrice": "$1.60 / box",
    "image": "/products/kraft-original-macaroni-cheese-five-pack/main.webp",
    "imageAlt": "Kraft Original Macaroni and Cheese Dinner, Five-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "pasta-pantry",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "A five-box pantry pack of classic macaroni and cheese dinner.",
    "synonyms": [
      "mac and cheese",
      "macaroni",
      "kraft",
      "pasta"
    ],
    "shippingWeight": 2.3
  },
  {
    "id": "wbg-010",
    "slug": "jif-creamy-peanut-butter-16oz",
    "brand": "Jif",
    "title": "Jif Creamy Peanut Butter, 16 oz",
    "packageSize": "16 oz",
    "packCount": 1,
    "price": 5.99,
    "unitPrice": "$0.37 / oz",
    "image": "/products/jif-creamy-peanut-butter-16oz/main.webp",
    "imageAlt": "Jif Creamy Peanut Butter, 16 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "condiments-spreads",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Smooth creamy peanut butter for sandwiches, breakfast and snacks.",
    "synonyms": [
      "peanut butter",
      "jif",
      "spread",
      "pb"
    ],
    "shippingWeight": 1.3
  },
  {
    "id": "wbg-011",
    "slug": "smuckers-strawberry-preserves-18oz",
    "brand": "Smucker's",
    "title": "Smucker's Strawberry Preserves, 18 oz",
    "packageSize": "18 oz",
    "packCount": 1,
    "price": 5.99,
    "unitPrice": "$0.33 / oz",
    "image": "/products/smuckers-strawberry-preserves-18oz/main.webp",
    "imageAlt": "Smucker's Strawberry Preserves, 18 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "condiments-spreads",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Sweet strawberry preserves for toast, sandwiches and baking.",
    "synonyms": [
      "jam",
      "preserves",
      "strawberry",
      "smuckers",
      "jelly"
    ],
    "shippingWeight": 1.5
  },
  {
    "id": "wbg-012",
    "slug": "heinz-tomato-ketchup-32oz",
    "brand": "Heinz",
    "title": "Heinz Tomato Ketchup, 32 oz",
    "packageSize": "32 oz",
    "packCount": 1,
    "price": 5.99,
    "unitPrice": "$0.19 / oz",
    "image": "/products/heinz-tomato-ketchup-32oz/main.webp",
    "imageAlt": "Heinz Tomato Ketchup, 32 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "condiments-spreads",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Classic tomato ketchup in a family-sized squeeze bottle.",
    "synonyms": [
      "ketchup",
      "heinz",
      "catsup",
      "condiment"
    ],
    "shippingWeight": 2.5
  },
  {
    "id": "wbg-013",
    "slug": "hellmanns-real-mayonnaise-30oz",
    "brand": "Hellmann's",
    "title": "Hellmann's Real Mayonnaise, 30 oz",
    "packageSize": "30 oz",
    "packCount": 1,
    "price": 7.99,
    "unitPrice": "$0.27 / oz",
    "image": "/products/hellmanns-real-mayonnaise-30oz/main.webp",
    "imageAlt": "Hellmann's Real Mayonnaise, 30 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "condiments-spreads",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Creamy mayonnaise for sandwiches, salads, dips and recipes.",
    "synonyms": [
      "mayo",
      "mayonnaise",
      "hellmanns",
      "condiment"
    ],
    "shippingWeight": 2.3
  },
  {
    "id": "wbg-014",
    "slug": "bushs-original-baked-beans-28oz",
    "brand": "Bush's",
    "title": "Bush's Original Baked Beans, 28 oz",
    "packageSize": "28 oz",
    "packCount": 1,
    "price": 5.49,
    "unitPrice": "$0.20 / oz",
    "image": "/products/bushs-original-baked-beans-28oz/main.webp",
    "imageAlt": "Bush's Original Baked Beans, 28 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "canned-goods",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Seasoned baked beans in a convenient family-sized can.",
    "synonyms": [
      "baked beans",
      "beans",
      "bushs",
      "canned"
    ],
    "shippingWeight": 2.1
  },
  {
    "id": "wbg-015",
    "slug": "del-monte-whole-kernel-corn-four-pack",
    "brand": "Del Monte",
    "title": "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack",
    "packageSize": "15.25 oz each (4-pack)",
    "packCount": 4,
    "price": 6.99,
    "unitPrice": "$1.75 / can",
    "image": "/products/del-monte-whole-kernel-corn-four-pack/main.webp",
    "imageAlt": "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "canned-goods",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "A pantry-ready four-pack of whole-kernel corn.",
    "synonyms": [
      "corn",
      "canned corn",
      "del monte",
      "vegetables"
    ],
    "shippingWeight": 4.6
  },
  {
    "id": "wbg-016",
    "slug": "starkist-chunk-light-tuna-four-pack",
    "brand": "StarKist",
    "title": "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack",
    "packageSize": "5 oz each (4-pack)",
    "packCount": 4,
    "price": 7.49,
    "unitPrice": "$1.87 / can",
    "image": "/products/starkist-chunk-light-tuna-four-pack/main.webp",
    "imageAlt": "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "canned-goods",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "A convenient four-pack of chunk light tuna packed in water.",
    "synonyms": [
      "tuna",
      "starkist",
      "canned tuna",
      "fish"
    ],
    "shippingWeight": 1.9
  },
  {
    "id": "wbg-017",
    "slug": "oreo-original-cookies-14-3oz",
    "brand": "Oreo",
    "title": "Oreo Original Chocolate Sandwich Cookies, 14.3 oz",
    "packageSize": "14.3 oz",
    "packCount": 1,
    "price": 5.49,
    "unitPrice": "$0.38 / oz",
    "image": "/products/oreo-original-cookies-14-3oz/main.webp",
    "imageAlt": "Oreo Original Chocolate Sandwich Cookies, 14.3 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Classic chocolate sandwich cookies with creme filling.",
    "synonyms": [
      "cookies",
      "oreo",
      "biscuits",
      "snacks"
    ],
    "shippingWeight": 1.2
  },
  {
    "id": "wbg-018",
    "slug": "ritz-original-crackers-13-7oz",
    "brand": "Ritz",
    "title": "Ritz Original Crackers, 13.7 oz",
    "packageSize": "13.7 oz",
    "packCount": 1,
    "price": 5.49,
    "unitPrice": "$0.40 / oz",
    "image": "/products/ritz-original-crackers-13-7oz/main.webp",
    "imageAlt": "Ritz Original Crackers, 13.7 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Light crackers for snacks, dips and simple lunch plates.",
    "synonyms": [
      "crackers",
      "ritz",
      "snacks"
    ],
    "shippingWeight": 1.15
  },
  {
    "id": "wbg-019",
    "slug": "lays-classic-potato-chips-8oz",
    "brand": "Lay's",
    "title": "Lay's Classic Potato Chips, 8 oz",
    "packageSize": "8 oz",
    "packCount": 1,
    "price": 5.99,
    "unitPrice": "$0.75 / oz",
    "image": "/products/lays-classic-potato-chips-8oz/main.webp",
    "imageAlt": "Lay's Classic Potato Chips, 8 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Classic salted potato chips in a shareable bag.",
    "synonyms": [
      "chips",
      "potato chips",
      "lays",
      "crisps"
    ],
    "shippingWeight": 0.75
  },
  {
    "id": "wbg-020",
    "slug": "doritos-nacho-cheese-9-25oz",
    "brand": "Doritos",
    "title": "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz",
    "packageSize": "9.25 oz",
    "packCount": 1,
    "price": 5.99,
    "unitPrice": "$0.65 / oz",
    "image": "/products/doritos-nacho-cheese-9-25oz/main.webp",
    "imageAlt": "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Crunchy tortilla chips with nacho-cheese seasoning.",
    "synonyms": [
      "doritos",
      "chips",
      "nacho",
      "tortilla chips"
    ],
    "shippingWeight": 0.85
  },
  {
    "id": "wbg-021",
    "slug": "coca-cola-original-12-pack",
    "brand": "Coca-Cola",
    "title": "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack",
    "packageSize": "12 fl oz cans (12-pack)",
    "packCount": 12,
    "price": 9.99,
    "unitPrice": "$0.83 / can",
    "image": "/products/coca-cola-original-12-pack/main.webp",
    "imageAlt": "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 6,
    "category": "beverages",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "A 12-pack of classic Coca-Cola in 12 fl oz cans.",
    "synonyms": [
      "coke",
      "soda",
      "soft drink",
      "cola",
      "coca cola"
    ],
    "shippingWeight": 11.5
  },
  {
    "id": "wbg-022",
    "slug": "gatorade-variety-pack-12-count",
    "brand": "Gatorade",
    "title": "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack",
    "packageSize": "12 fl oz bottles (12-pack)",
    "packCount": 12,
    "price": 10.99,
    "unitPrice": "$0.92 / bottle",
    "image": "/products/gatorade-variety-pack-12-count/main.webp",
    "imageAlt": "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 6,
    "category": "beverages",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "A mixed-flavor sports-drink pack for refrigerator and pantry restocking.",
    "synonyms": [
      "gatorade",
      "sports drink",
      "electrolyte",
      "beverage"
    ],
    "shippingWeight": 12
  },
  {
    "id": "wbg-023",
    "slug": "tide-simply-clean-fresh-84oz",
    "brand": "Tide",
    "title": "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz",
    "packageSize": "84 fl oz",
    "packCount": 1,
    "price": 11.99,
    "unitPrice": "$0.14 / fl oz",
    "image": "/products/tide-simply-clean-fresh-84oz/main.webp",
    "imageAlt": "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 4,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Liquid laundry detergent for regular household washing.",
    "synonyms": [
      "laundry",
      "detergent",
      "tide",
      "cleaning",
      "wash"
    ],
    "shippingWeight": 6.5
  },
  {
    "id": "wbg-024",
    "slug": "dawn-ultra-dishwashing-liquid-18oz",
    "brand": "Dawn",
    "title": "Dawn Ultra Dishwashing Liquid, 18 fl oz",
    "packageSize": "18 fl oz",
    "packCount": 1,
    "price": 5.49,
    "unitPrice": "$0.31 / fl oz",
    "image": "/products/dawn-ultra-dishwashing-liquid-18oz/main.webp",
    "imageAlt": "Dawn Ultra Dishwashing Liquid, 18 fl oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Concentrated liquid dish soap for everyday hand-washing of dishes.",
    "synonyms": [
      "dish soap",
      "dawn",
      "dishwashing",
      "cleaning",
      "dishes"
    ],
    "shippingWeight": 1.5
  },
  {
    "id": "wbg-025",
    "slug": "bounty-essentials-six-double-rolls",
    "brand": "Bounty",
    "title": "Bounty Essentials Paper Towels, Six Double Rolls",
    "packageSize": "6 Double Rolls",
    "packCount": 6,
    "price": 12.99,
    "unitPrice": "$2.17 / roll",
    "image": "/products/bounty-essentials-six-double-rolls/main.webp",
    "imageAlt": "Bounty Essentials Paper Towels, Six Double Rolls product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 4,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "A six-double-roll multipack of everyday paper towels.",
    "synonyms": [
      "paper towels",
      "bounty",
      "paper",
      "kitchen towels"
    ],
    "shippingWeight": 4
  },
  {
    "id": "wbg-026",
    "slug": "glad-forceflexplus-13-gallon-40-count",
    "brand": "Glad",
    "title": "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count",
    "packageSize": "13 Gallon, 40 Count",
    "packCount": 40,
    "price": 10.99,
    "unitPrice": "$0.27 / bag",
    "image": "/products/glad-forceflexplus-13-gallon-40-count/main.webp",
    "imageAlt": "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Tall-kitchen trash bags designed for standard 13-gallon kitchen bins.",
    "synonyms": [
      "trash bags",
      "garbage bags",
      "glad",
      "kitchen bags"
    ],
    "shippingWeight": 2.5
  },
  {
    "id": "wbg-027",
    "slug": "honey-nut-cheerios-cereal-18-8oz",
    "brand": "Cheerios",
    "title": "Honey Nut Cheerios Cereal, 18.8 oz",
    "packageSize": "18.8 oz",
    "packCount": 1,
    "price": 6.79,
    "unitPrice": "$0.36 / oz",
    "image": "/products/honey-nut-cheerios-cereal-18-8oz/main.webp",
    "imageAlt": "Honey Nut Cheerios Cereal, 18.8 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "breakfast",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Honey-sweetened oat cereal for everyday breakfast bowls.",
    "synonyms": [
      "cheerios",
      "honey nut",
      "cereal",
      "breakfast"
    ],
    "shippingWeight": 1.6
  },
  {
    "id": "wbg-028",
    "slug": "kelloggs-rice-krispies-12oz",
    "brand": "Kellogg's",
    "title": "Kellogg's Rice Krispies Cereal, 12 oz",
    "packageSize": "12 oz",
    "packCount": 1,
    "price": 5.49,
    "unitPrice": "$0.46 / oz",
    "image": "/products/kelloggs-rice-krispies-12oz/main.webp",
    "imageAlt": "Kellogg's Rice Krispies Cereal, 12 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "breakfast",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Crispy rice cereal for breakfast bowls and classic treat recipes.",
    "synonyms": [
      "rice krispies",
      "kellogg",
      "cereal",
      "breakfast"
    ],
    "shippingWeight": 1.2
  },
  {
    "id": "wbg-029",
    "slug": "quaker-instant-oatmeal-variety-48-count",
    "brand": "Quaker",
    "title": "Quaker Instant Oatmeal Variety Pack, 48 Packets",
    "packageSize": "48 Packets",
    "packCount": 48,
    "price": 12.99,
    "unitPrice": "$0.27 / packet",
    "image": "/products/quaker-instant-oatmeal-variety-48-count/main.webp",
    "imageAlt": "Quaker Instant Oatmeal Variety Pack, 48 Packets product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "breakfast",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Assorted instant oatmeal packets for quick weekday breakfasts.",
    "synonyms": [
      "oatmeal",
      "instant oats",
      "quaker",
      "breakfast"
    ],
    "shippingWeight": 3.6
  },
  {
    "id": "wbg-030",
    "slug": "pop-tarts-frosted-strawberry-8-count",
    "brand": "Pop-Tarts",
    "title": "Pop-Tarts Frosted Strawberry, 8 Count",
    "packageSize": "8 Count",
    "packCount": 8,
    "price": 5.29,
    "unitPrice": "$0.66 / pastry",
    "image": "/products/pop-tarts-frosted-strawberry-8-count/main.webp",
    "imageAlt": "Pop-Tarts Frosted Strawberry, 8 Count product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "breakfast",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Frosted strawberry toaster pastries for quick breakfasts and snacks.",
    "synonyms": [
      "pop tarts",
      "toaster pastry",
      "strawberry",
      "breakfast"
    ],
    "shippingWeight": 1.1
  },
  {
    "id": "wbg-031",
    "slug": "special-k-original-cereal-12oz",
    "brand": "Special K",
    "title": "Special K Original Cereal, 12 oz",
    "packageSize": "12 oz",
    "packCount": 1,
    "price": 5.79,
    "unitPrice": "$0.48 / oz",
    "image": "/products/special-k-original-cereal-12oz/main.webp",
    "imageAlt": "Special K Original Cereal, 12 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "breakfast",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Crispy rice cereal for lighter everyday breakfast bowls.",
    "synonyms": [
      "special k",
      "cereal",
      "kellogg",
      "breakfast"
    ],
    "shippingWeight": 1.2
  },
  {
    "id": "wbg-032",
    "slug": "maxwell-house-original-roast-coffee-30-6oz",
    "brand": "Maxwell House",
    "title": "Maxwell House Original Roast Ground Coffee, 30.6 oz",
    "packageSize": "30.6 oz",
    "packCount": 1,
    "price": 11.49,
    "unitPrice": "$0.38 / oz",
    "image": "/products/maxwell-house-original-roast-coffee-30-6oz/main.webp",
    "imageAlt": "Maxwell House Original Roast Ground Coffee, 30.6 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "coffee-tea",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Classic original roast ground coffee for everyday brewing.",
    "synonyms": [
      "coffee",
      "maxwell house",
      "ground coffee",
      "breakfast"
    ],
    "shippingWeight": 2.4
  },
  {
    "id": "wbg-033",
    "slug": "twinings-english-breakfast-tea-50-count",
    "brand": "Twinings",
    "title": "Twinings English Breakfast Tea Bags, 50 Count",
    "packageSize": "50 Count",
    "packCount": 50,
    "price": 6.49,
    "unitPrice": "$0.13 / bag",
    "image": "/products/twinings-english-breakfast-tea-50-count/main.webp",
    "imageAlt": "Twinings English Breakfast Tea Bags, 50 Count product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "coffee-tea",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Classic English breakfast black tea bags for hot or iced tea.",
    "synonyms": [
      "tea",
      "twinings",
      "english breakfast",
      "black tea"
    ],
    "shippingWeight": 0.6
  },
  {
    "id": "wbg-034",
    "slug": "swiss-miss-milk-chocolate-cocoas-60-count",
    "brand": "Swiss Miss",
    "title": "Swiss Miss Milk Chocolate Hot Cocoa Mix, 60 Packets",
    "packageSize": "60 Packets",
    "packCount": 60,
    "price": 13.99,
    "unitPrice": "$0.23 / packet",
    "image": "/products/swiss-miss-milk-chocolate-cocoas-60-count/main.webp",
    "imageAlt": "Swiss Miss Milk Chocolate Hot Cocoa Mix, 60 Packets product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "coffee-tea",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Instant milk chocolate cocoa packets for quick warm drinks.",
    "synonyms": [
      "hot cocoa",
      "swiss miss",
      "chocolate",
      "drink mix"
    ],
    "shippingWeight": 3.1
  },
  {
    "id": "wbg-035",
    "slug": "celestial-seasonings-sleepytime-tea-40-count",
    "brand": "Celestial Seasonings",
    "title": "Celestial Seasonings Sleepytime Tea, 40 Count",
    "packageSize": "40 Count",
    "packCount": 40,
    "price": 5.99,
    "unitPrice": "$0.15 / bag",
    "image": "/products/celestial-seasonings-sleepytime-tea-40-count/main.webp",
    "imageAlt": "Celestial Seasonings Sleepytime Tea, 40 Count product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "coffee-tea",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Caffeine-free herbal tea bags for evening wind-down routines.",
    "synonyms": [
      "sleepytime",
      "herbal tea",
      "celestial",
      "tea"
    ],
    "shippingWeight": 0.5
  },
  {
    "id": "wbg-036",
    "slug": "barilla-penne-16oz",
    "brand": "Barilla",
    "title": "Barilla Penne Pasta, 16 oz",
    "packageSize": "16 oz",
    "packCount": 1,
    "price": 5.29,
    "unitPrice": "$0.33 / oz",
    "image": "/products/barilla-penne-16oz/main.webp",
    "imageAlt": "Barilla Penne Pasta, 16 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "pasta-pantry",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Classic penne pasta for sauces, bakes and weeknight dinners.",
    "synonyms": [
      "penne",
      "pasta",
      "barilla",
      "pantry"
    ],
    "shippingWeight": 1.3
  },
  {
    "id": "wbg-037",
    "slug": "campbells-condensed-tomato-soup-10-75oz-four-pack",
    "brand": "Campbell's",
    "title": "Campbell's Condensed Tomato Soup, 10.75 oz, Four-Pack",
    "packageSize": "10.75 oz each",
    "packCount": 4,
    "price": 7.49,
    "unitPrice": "$1.87 / can",
    "image": "/products/campbells-condensed-tomato-soup-10-75oz-four-pack/main.webp",
    "imageAlt": "Campbell's Condensed Tomato Soup, 10.75 oz, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "pasta-pantry",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Four cans of classic condensed tomato soup for quick lunches.",
    "synonyms": [
      "tomato soup",
      "campbells",
      "soup",
      "pantry"
    ],
    "shippingWeight": 3.6
  },
  {
    "id": "wbg-038",
    "slug": "progresso-traditional-chicken-noodle-19oz",
    "brand": "Progresso",
    "title": "Progresso Traditional Chicken Noodle Soup, 19 oz",
    "packageSize": "19 oz",
    "packCount": 1,
    "price": 5.19,
    "unitPrice": "$0.27 / oz",
    "image": "/products/progresso-traditional-chicken-noodle-19oz/main.webp",
    "imageAlt": "Progresso Traditional Chicken Noodle Soup, 19 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "pasta-pantry",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Ready-to-serve chicken noodle soup for quick lunches.",
    "synonyms": [
      "progresso",
      "chicken noodle",
      "soup",
      "pantry"
    ],
    "shippingWeight": 1.6
  },
  {
    "id": "wbg-039",
    "slug": "uncle-bens-original-ready-rice-8-8oz",
    "brand": "Ben's Original",
    "title": "Ben's Original Ready Rice Original, 8.8 oz",
    "packageSize": "8.8 oz",
    "packCount": 1,
    "price": 5.09,
    "unitPrice": "$0.58 / oz",
    "image": "/products/uncle-bens-original-ready-rice-8-8oz/main.webp",
    "imageAlt": "Ben's Original Ready Rice Original, 8.8 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "pasta-pantry",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Microwave-ready white rice pouch for fast side dishes.",
    "synonyms": [
      "ready rice",
      "uncle bens",
      "rice",
      "microwave"
    ],
    "shippingWeight": 0.8
  },
  {
    "id": "wbg-040",
    "slug": "knorr-pasta-sides-butter-4-pack",
    "brand": "Knorr",
    "title": "Knorr Pasta Sides Butter, Four-Pack",
    "packageSize": "Four Pouches",
    "packCount": 4,
    "price": 6.99,
    "unitPrice": "$1.75 / pouch",
    "image": "/products/knorr-pasta-sides-butter-4-pack/main.webp",
    "imageAlt": "Knorr Pasta Sides Butter, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "pasta-pantry",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Four butter pasta side pouches for quick weeknight dinners.",
    "synonyms": [
      "knorr",
      "pasta sides",
      "butter pasta",
      "pantry"
    ],
    "shippingWeight": 1.4
  },
  {
    "id": "wbg-041",
    "slug": "betty-crocker-fudge-brownie-mix-18-3oz",
    "brand": "Betty Crocker",
    "title": "Betty Crocker Fudge Brownie Mix, 18.3 oz",
    "packageSize": "18.3 oz",
    "packCount": 1,
    "price": 5.49,
    "unitPrice": "$0.30 / oz",
    "image": "/products/betty-crocker-fudge-brownie-mix-18-3oz/main.webp",
    "imageAlt": "Betty Crocker Fudge Brownie Mix, 18.3 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "pasta-pantry",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Classic fudge brownie mix for simple homemade baking.",
    "synonyms": [
      "brownie mix",
      "betty crocker",
      "baking",
      "dessert"
    ],
    "shippingWeight": 1.4
  },
  {
    "id": "wbg-042",
    "slug": "frenchs-classic-yellow-mustard-20oz",
    "brand": "French's",
    "title": "French's Classic Yellow Mustard, 20 oz",
    "packageSize": "20 oz",
    "packCount": 1,
    "price": 5.19,
    "unitPrice": "$0.26 / oz",
    "image": "/products/frenchs-classic-yellow-mustard-20oz/main.webp",
    "imageAlt": "French's Classic Yellow Mustard, 20 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "condiments-spreads",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Classic yellow mustard for sandwiches, hot dogs and recipes.",
    "synonyms": [
      "mustard",
      "frenchs",
      "yellow mustard",
      "condiment"
    ],
    "shippingWeight": 1.6
  },
  {
    "id": "wbg-043",
    "slug": "hidden-valley-original-ranch-24oz",
    "brand": "Hidden Valley",
    "title": "Hidden Valley Original Ranch Dressing, 24 fl oz",
    "packageSize": "24 fl oz",
    "packCount": 1,
    "price": 5.99,
    "unitPrice": "$0.25 / fl oz",
    "image": "/products/hidden-valley-original-ranch-24oz/main.webp",
    "imageAlt": "Hidden Valley Original Ranch Dressing, 24 fl oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "condiments-spreads",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Original ranch dressing for salads, dips and everyday meals.",
    "synonyms": [
      "ranch",
      "hidden valley",
      "dressing",
      "condiment"
    ],
    "shippingWeight": 1.9
  },
  {
    "id": "wbg-044",
    "slug": "franks-redhot-original-cayenne-12oz",
    "brand": "Frank's RedHot",
    "title": "Frank's RedHot Original Cayenne Pepper Sauce, 12 fl oz",
    "packageSize": "12 fl oz",
    "packCount": 1,
    "price": 5.29,
    "unitPrice": "$0.44 / fl oz",
    "image": "/products/franks-redhot-original-cayenne-12oz/main.webp",
    "imageAlt": "Frank's RedHot Original Cayenne Pepper Sauce, 12 fl oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "condiments-spreads",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Classic cayenne pepper hot sauce for wings, dips and recipes.",
    "synonyms": [
      "hot sauce",
      "franks",
      "redhot",
      "cayenne"
    ],
    "shippingWeight": 1.1
  },
  {
    "id": "wbg-045",
    "slug": "welchs-concord-grape-jelly-30oz",
    "brand": "Welch's",
    "title": "Welch's Concord Grape Jelly, 30 oz",
    "packageSize": "30 oz",
    "packCount": 1,
    "price": 5.79,
    "unitPrice": "$0.19 / oz",
    "image": "/products/welchs-concord-grape-jelly-30oz/main.webp",
    "imageAlt": "Welch's Concord Grape Jelly, 30 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "condiments-spreads",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Concord grape jelly for peanut butter sandwiches and toast.",
    "synonyms": [
      "grape jelly",
      "welchs",
      "jelly",
      "spread"
    ],
    "shippingWeight": 2.4
  },
  {
    "id": "wbg-046",
    "slug": "skippy-creamy-peanut-butter-40oz",
    "brand": "Skippy",
    "title": "Skippy Creamy Peanut Butter, 40 oz",
    "packageSize": "40 oz",
    "packCount": 1,
    "price": 8.99,
    "unitPrice": "$0.22 / oz",
    "image": "/products/skippy-creamy-peanut-butter-40oz/main.webp",
    "imageAlt": "Skippy Creamy Peanut Butter, 40 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "condiments-spreads",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Family-size creamy peanut butter for sandwiches and snacks.",
    "synonyms": [
      "skippy",
      "peanut butter",
      "creamy",
      "spread"
    ],
    "shippingWeight": 3
  },
  {
    "id": "wbg-047",
    "slug": "hunts-diced-tomatoes-14-5oz-four-pack",
    "brand": "Hunt's",
    "title": "Hunt's Diced Tomatoes, 14.5 oz, Four-Pack",
    "packageSize": "14.5 oz each",
    "packCount": 4,
    "price": 6.99,
    "unitPrice": "$1.75 / can",
    "image": "/products/hunts-diced-tomatoes-14-5oz-four-pack/main.webp",
    "imageAlt": "Hunt's Diced Tomatoes, 14.5 oz, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "canned-goods",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Four cans of diced tomatoes for soups, sauces and skillet meals.",
    "synonyms": [
      "diced tomatoes",
      "hunts",
      "canned tomatoes",
      "pantry"
    ],
    "shippingWeight": 4.6
  },
  {
    "id": "wbg-048",
    "slug": "green-giant-sweet-peas-15oz-four-pack",
    "brand": "Green Giant",
    "title": "Green Giant Sweet Peas, 15 oz, Four-Pack",
    "packageSize": "15 oz each",
    "packCount": 4,
    "price": 6.49,
    "unitPrice": "$1.62 / can",
    "image": "/products/green-giant-sweet-peas-15oz-four-pack/main.webp",
    "imageAlt": "Green Giant Sweet Peas, 15 oz, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "canned-goods",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Four cans of sweet peas for quick vegetable sides.",
    "synonyms": [
      "peas",
      "green giant",
      "canned vegetables",
      "pantry"
    ],
    "shippingWeight": 4.8
  },
  {
    "id": "wbg-049",
    "slug": "hormel-chili-with-beans-15oz-four-pack",
    "brand": "Hormel",
    "title": "Hormel Chili with Beans, 15 oz, Four-Pack",
    "packageSize": "15 oz each",
    "packCount": 4,
    "price": 9.99,
    "unitPrice": "$2.50 / can",
    "image": "/products/hormel-chili-with-beans-15oz-four-pack/main.webp",
    "imageAlt": "Hormel Chili with Beans, 15 oz, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "canned-goods",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": true,
    "shortDescription": "Four cans of chili with beans for quick hearty lunches.",
    "synonyms": [
      "chili",
      "hormel",
      "beans",
      "canned"
    ],
    "shippingWeight": 4.8
  },
  {
    "id": "wbg-050",
    "slug": "chicken-of-the-sea-chunk-light-tuna-5oz-four-pack",
    "brand": "Chicken of the Sea",
    "title": "Chicken of the Sea Chunk Light Tuna in Water, 5 oz, Four-Pack",
    "packageSize": "5 oz each",
    "packCount": 4,
    "price": 7.49,
    "unitPrice": "$1.87 / can",
    "image": "/products/chicken-of-the-sea-chunk-light-tuna-5oz-four-pack/main.webp",
    "imageAlt": "Chicken of the Sea Chunk Light Tuna in Water, 5 oz, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "canned-goods",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Four cans of chunk light tuna in water for sandwiches and salads.",
    "synonyms": [
      "tuna",
      "chicken of the sea",
      "canned fish",
      "protein"
    ],
    "shippingWeight": 1.9
  },
  {
    "id": "wbg-051",
    "slug": "spaghettios-original-15-8oz-four-pack",
    "brand": "SpaghettiOs",
    "title": "SpaghettiOs Original, 15.8 oz, Four-Pack",
    "packageSize": "15.8 oz each",
    "packCount": 4,
    "price": 7.99,
    "unitPrice": "$2.00 / can",
    "image": "/products/spaghettios-original-15-8oz-four-pack/main.webp",
    "imageAlt": "SpaghettiOs Original, 15.8 oz, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "canned-goods",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Four cans of classic pasta rings in tomato and cheese sauce.",
    "synonyms": [
      "spaghettios",
      "pasta",
      "canned pasta",
      "kids"
    ],
    "shippingWeight": 5
  },
  {
    "id": "wbg-052",
    "slug": "cheez-it-original-baked-snack-crackers-12-4oz",
    "brand": "Cheez-It",
    "title": "Cheez-It Original Baked Snack Crackers, 12.4 oz",
    "packageSize": "12.4 oz",
    "packCount": 1,
    "price": 5.79,
    "unitPrice": "$0.47 / oz",
    "image": "/products/cheez-it-original-baked-snack-crackers-12-4oz/main.webp",
    "imageAlt": "Cheez-It Original Baked Snack Crackers, 12.4 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Original baked cheese crackers for lunchboxes and snacking.",
    "synonyms": [
      "cheez it",
      "cheese crackers",
      "snack",
      "crackers"
    ],
    "shippingWeight": 1.1
  },
  {
    "id": "wbg-053",
    "slug": "goldfish-cheddar-crackers-30oz",
    "brand": "Goldfish",
    "title": "Goldfish Cheddar Crackers, 30 oz",
    "packageSize": "30 oz",
    "packCount": 1,
    "price": 8.99,
    "unitPrice": "$0.30 / oz",
    "image": "/products/goldfish-cheddar-crackers-30oz/main.webp",
    "imageAlt": "Goldfish Cheddar Crackers, 30 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Family-size cheddar Goldfish crackers for everyday snacking.",
    "synonyms": [
      "goldfish",
      "cheddar",
      "crackers",
      "snack"
    ],
    "shippingWeight": 2.3
  },
  {
    "id": "wbg-054",
    "slug": "chips-ahoy-original-chocolate-chip-cookies-13oz",
    "brand": "Chips Ahoy!",
    "title": "Chips Ahoy! Original Chocolate Chip Cookies, 13 oz",
    "packageSize": "13 oz",
    "packCount": 1,
    "price": 5.49,
    "unitPrice": "$0.42 / oz",
    "image": "/products/chips-ahoy-original-chocolate-chip-cookies-13oz/main.webp",
    "imageAlt": "Chips Ahoy! Original Chocolate Chip Cookies, 13 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Classic chocolate chip cookies for lunchboxes and dessert trays.",
    "synonyms": [
      "chips ahoy",
      "cookies",
      "chocolate chip",
      "snack"
    ],
    "shippingWeight": 1.1
  },
  {
    "id": "wbg-055",
    "slug": "pringles-original-potato-crisps-5-2oz",
    "brand": "Pringles",
    "title": "Pringles Original Potato Crisps, 5.2 oz",
    "packageSize": "5.2 oz",
    "packCount": 1,
    "price": 5.09,
    "unitPrice": "$0.98 / oz",
    "image": "/products/pringles-original-potato-crisps-5-2oz/main.webp",
    "imageAlt": "Pringles Original Potato Crisps, 5.2 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Original stackable potato crisps in a resealable can.",
    "synonyms": [
      "pringles",
      "potato chips",
      "crisps",
      "snack"
    ],
    "shippingWeight": 0.7
  },
  {
    "id": "wbg-056",
    "slug": "snyders-of-hanover-mini-pretzels-12oz",
    "brand": "Snyder's of Hanover",
    "title": "Snyder's of Hanover Mini Pretzels, 12 oz",
    "packageSize": "12 oz",
    "packCount": 1,
    "price": 5.29,
    "unitPrice": "$0.44 / oz",
    "image": "/products/snyders-of-hanover-mini-pretzels-12oz/main.webp",
    "imageAlt": "Snyder's of Hanover Mini Pretzels, 12 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Mini pretzels for lunchboxes, parties and everyday snacking.",
    "synonyms": [
      "pretzels",
      "snyders",
      "mini pretzels",
      "snack"
    ],
    "shippingWeight": 1
  },
  {
    "id": "wbg-057",
    "slug": "triscuit-original-crackers-8-5oz",
    "brand": "Triscuit",
    "title": "Triscuit Original Crackers, 8.5 oz",
    "packageSize": "8.5 oz",
    "packCount": 1,
    "price": 5.49,
    "unitPrice": "$0.65 / oz",
    "image": "/products/triscuit-original-crackers-8-5oz/main.webp",
    "imageAlt": "Triscuit Original Crackers, 8.5 oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "snacks",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Original woven wheat crackers for cheese boards and snacks.",
    "synonyms": [
      "triscuit",
      "wheat crackers",
      "crackers",
      "snack"
    ],
    "shippingWeight": 0.8
  },
  {
    "id": "wbg-058",
    "slug": "pepsi-cola-12-pack-12oz-cans",
    "brand": "Pepsi",
    "title": "Pepsi Cola, 12 fl oz Cans, 12-Pack",
    "packageSize": "12 fl oz cans",
    "packCount": 12,
    "price": 9.49,
    "unitPrice": "$0.79 / can",
    "image": "/products/pepsi-cola-12-pack-12oz-cans/main.webp",
    "imageAlt": "Pepsi Cola, 12 fl oz Cans, 12-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "beverages",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Twelve cans of classic Pepsi for home beverage restocking.",
    "synonyms": [
      "pepsi",
      "cola",
      "soda",
      "soft drink"
    ],
    "shippingWeight": 11
  },
  {
    "id": "wbg-059",
    "slug": "sprite-lemon-lime-12-pack-12oz-cans",
    "brand": "Sprite",
    "title": "Sprite Lemon-Lime, 12 fl oz Cans, 12-Pack",
    "packageSize": "12 fl oz cans",
    "packCount": 12,
    "price": 9.49,
    "unitPrice": "$0.79 / can",
    "image": "/products/sprite-lemon-lime-12-pack-12oz-cans/main.webp",
    "imageAlt": "Sprite Lemon-Lime, 12 fl oz Cans, 12-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "beverages",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Twelve cans of lemon-lime Sprite for everyday soft drinks.",
    "synonyms": [
      "sprite",
      "lemon lime",
      "soda",
      "soft drink"
    ],
    "shippingWeight": 11
  },
  {
    "id": "wbg-060",
    "slug": "dasani-purified-water-16-9oz-24-pack",
    "brand": "Dasani",
    "title": "Dasani Purified Water, 16.9 fl oz Bottles, 24-Pack",
    "packageSize": "16.9 fl oz bottles",
    "packCount": 24,
    "price": 8.99,
    "unitPrice": "$0.37 / bottle",
    "image": "/products/dasani-purified-water-16-9oz-24-pack/main.webp",
    "imageAlt": "Dasani Purified Water, 16.9 fl oz Bottles, 24-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "beverages",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Twenty-four bottles of purified water for home and on-the-go hydration.",
    "synonyms": [
      "dasani",
      "water",
      "bottled water",
      "hydration"
    ],
    "shippingWeight": 30
  },
  {
    "id": "wbg-061",
    "slug": "tropicana-pure-premium-orange-juice-59oz",
    "brand": "Tropicana",
    "title": "Tropicana Pure Premium Orange Juice, 59 fl oz",
    "packageSize": "59 fl oz",
    "packCount": 1,
    "price": 6.99,
    "unitPrice": "$0.12 / fl oz",
    "image": "/products/tropicana-pure-premium-orange-juice-59oz/main.webp",
    "imageAlt": "Tropicana Pure Premium Orange Juice, 59 fl oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "beverages",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Pure premium orange juice carton for breakfasts and everyday pours.",
    "synonyms": [
      "tropicana",
      "orange juice",
      "juice",
      "breakfast"
    ],
    "shippingWeight": 4.6
  },
  {
    "id": "wbg-062",
    "slug": "arizona-iced-tea-with-lemon-23oz-four-pack",
    "brand": "AriZona",
    "title": "AriZona Iced Tea with Lemon, 23 fl oz Cans, Four-Pack",
    "packageSize": "23 fl oz cans",
    "packCount": 4,
    "price": 5.99,
    "unitPrice": "$1.50 / can",
    "image": "/products/arizona-iced-tea-with-lemon-23oz-four-pack/main.webp",
    "imageAlt": "AriZona Iced Tea with Lemon, 23 fl oz Cans, Four-Pack product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "beverages",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": false,
    "shortDescription": "Four tall cans of lemon iced tea for ready-to-drink refreshment.",
    "synonyms": [
      "arizona",
      "iced tea",
      "lemon tea",
      "drink"
    ],
    "shippingWeight": 7
  },
  {
    "id": "wbg-063",
    "slug": "charmin-essential-soft-toilet-paper-12-mega-rolls",
    "brand": "Charmin",
    "title": "Charmin Essential Soft Toilet Paper, 12 Mega Rolls",
    "packageSize": "12 Mega Rolls",
    "packCount": 12,
    "price": 14.99,
    "unitPrice": "$1.25 / roll",
    "image": "/products/charmin-essential-soft-toilet-paper-12-mega-rolls/main.webp",
    "imageAlt": "Charmin Essential Soft Toilet Paper, 12 Mega Rolls product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Twelve mega rolls of soft toilet paper for household restocking.",
    "synonyms": [
      "charmin",
      "toilet paper",
      "bathroom tissue",
      "household"
    ],
    "shippingWeight": 7.2
  },
  {
    "id": "wbg-064",
    "slug": "clorox-disinfecting-wipes-75-count-fresh-scent",
    "brand": "Clorox",
    "title": "Clorox Disinfecting Wipes, 75 Count, Fresh Scent",
    "packageSize": "75 Count",
    "packCount": 75,
    "price": 7.49,
    "unitPrice": "$0.10 / wipe",
    "image": "/products/clorox-disinfecting-wipes-75-count-fresh-scent/main.webp",
    "imageAlt": "Clorox Disinfecting Wipes, 75 Count, Fresh Scent product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": true,
    "shortDescription": "Disinfecting wipes for everyday kitchen and household surface cleaning.",
    "synonyms": [
      "clorox",
      "wipes",
      "disinfecting",
      "cleaning"
    ],
    "shippingWeight": 2.5
  },
  {
    "id": "wbg-065",
    "slug": "reynolds-wrap-aluminum-foil-75-sq-ft",
    "brand": "Reynolds Wrap",
    "title": "Reynolds Wrap Aluminum Foil, 75 sq ft",
    "packageSize": "75 sq ft",
    "packCount": 1,
    "price": 5.99,
    "unitPrice": "$0.08 / sq ft",
    "image": "/products/reynolds-wrap-aluminum-foil-75-sq-ft/main.webp",
    "imageAlt": "Reynolds Wrap Aluminum Foil, 75 sq ft product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Aluminum foil roll for cooking, covering and food storage.",
    "synonyms": [
      "aluminum foil",
      "reynolds",
      "foil",
      "kitchen"
    ],
    "shippingWeight": 1
  },
  {
    "id": "wbg-066",
    "slug": "ziploc-sandwich-bags-90-count",
    "brand": "Ziploc",
    "title": "Ziploc Sandwich Bags, 90 Count",
    "packageSize": "90 Count",
    "packCount": 90,
    "price": 5.49,
    "unitPrice": "$0.06 / bag",
    "image": "/products/ziploc-sandwich-bags-90-count/main.webp",
    "imageAlt": "Ziploc Sandwich Bags, 90 Count product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Resealable sandwich bags for lunches and leftover storage.",
    "synonyms": [
      "ziploc",
      "sandwich bags",
      "storage bags",
      "kitchen"
    ],
    "shippingWeight": 0.9
  },
  {
    "id": "wbg-067",
    "slug": "softsoap-liquid-hand-soap-refill-50oz",
    "brand": "Softsoap",
    "title": "Softsoap Liquid Hand Soap Refill, 50 fl oz",
    "packageSize": "50 fl oz",
    "packCount": 1,
    "price": 6.99,
    "unitPrice": "$0.14 / fl oz",
    "image": "/products/softsoap-liquid-hand-soap-refill-50oz/main.webp",
    "imageAlt": "Softsoap Liquid Hand Soap Refill, 50 fl oz product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": true,
    "featured": false,
    "shortDescription": "Large liquid hand soap refill for bathroom and kitchen pumps.",
    "synonyms": [
      "softsoap",
      "hand soap",
      "refill",
      "bathroom"
    ],
    "shippingWeight": 3.8
  },
  {
    "id": "wbg-068",
    "slug": "cascade-platinum-dishwasher-pods-42-count",
    "brand": "Cascade",
    "title": "Cascade Platinum Dishwasher Detergent Pods, 42 Count",
    "packageSize": "42 Count",
    "packCount": 42,
    "price": 15.99,
    "unitPrice": "$0.38 / pod",
    "image": "/products/cascade-platinum-dishwasher-pods-42-count/main.webp",
    "imageAlt": "Cascade Platinum Dishwasher Detergent Pods, 42 Count product package",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "category": "household",
    "secondaryCategories": [],
    "weeklyEssential": false,
    "featured": true,
    "shortDescription": "Dishwasher detergent pods for everyday automatic dishwashing.",
    "synonyms": [
      "cascade",
      "dishwasher pods",
      "detergent",
      "kitchen"
    ],
    "shippingWeight": 2.7
  }
];

export const searchIndex: SearchIndexItem[] = [
  {
    "id": "wbg-001",
    "slug": "quaker-old-fashioned-oats-42oz",
    "brand": "Quaker",
    "title": "Quaker Old Fashioned Oats, 42 oz",
    "category": "breakfast",
    "packageSize": "42 oz",
    "packCount": 1,
    "synonyms": [
      "oats",
      "oatmeal",
      "breakfast",
      "quaker"
    ],
    "shortDescription": "Classic rolled oats for warm breakfasts, overnight oats and everyday recipes.",
    "image": "/products/quaker-old-fashioned-oats-42oz/main.webp"
  },
  {
    "id": "wbg-002",
    "slug": "cheerios-original-cereal-18oz",
    "brand": "Cheerios",
    "title": "Cheerios Original Cereal, 18 oz",
    "category": "breakfast",
    "packageSize": "18 oz",
    "packCount": 1,
    "synonyms": [
      "cereal",
      "cheerios",
      "oat cereal",
      "breakfast"
    ],
    "shortDescription": "Classic toasted oat cereal for breakfast and everyday snacking.",
    "image": "/products/cheerios-original-cereal-18oz/main.webp"
  },
  {
    "id": "wbg-003",
    "slug": "kelloggs-frosted-flakes-17-3oz",
    "brand": "Kellogg's",
    "title": "Kellogg's Frosted Flakes Cereal, 17.3 oz",
    "category": "breakfast",
    "packageSize": "17.3 oz",
    "packCount": 1,
    "synonyms": [
      "frosted flakes",
      "cereal",
      "kellogg",
      "breakfast"
    ],
    "shortDescription": "Crunchy frosted corn cereal for simple breakfasts and snacks.",
    "image": "/products/kelloggs-frosted-flakes-17-3oz/main.webp"
  },
  {
    "id": "wbg-004",
    "slug": "nature-valley-oats-honey-12-bars",
    "brand": "Nature Valley",
    "title": "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars",
    "category": "breakfast",
    "packageSize": "12 Bars",
    "packCount": 12,
    "synonyms": [
      "granola",
      "granola bars",
      "nature valley",
      "bars",
      "honey"
    ],
    "shortDescription": "Crunchy oat-and-honey granola bars in individually packaged portions.",
    "image": "/products/nature-valley-oats-honey-12-bars/main.webp"
  },
  {
    "id": "wbg-005",
    "slug": "folgers-classic-roast-ground-coffee-25-9oz",
    "brand": "Folgers",
    "title": "Folgers Classic Roast Ground Coffee, 25.9 oz",
    "category": "coffee-tea",
    "packageSize": "25.9 oz",
    "packCount": 1,
    "synonyms": [
      "coffee",
      "folgers",
      "ground coffee",
      "roast"
    ],
    "shortDescription": "Medium-roast ground coffee for familiar everyday brewing.",
    "image": "/products/folgers-classic-roast-ground-coffee-25-9oz/main.webp"
  },
  {
    "id": "wbg-006",
    "slug": "lipton-black-tea-bags-100-count",
    "brand": "Lipton",
    "title": "Lipton Black Tea Bags, 100 Count",
    "category": "coffee-tea",
    "packageSize": "100 Count",
    "packCount": 100,
    "synonyms": [
      "tea",
      "lipton",
      "black tea",
      "tea bags"
    ],
    "shortDescription": "Classic black tea bags for hot tea or iced tea.",
    "image": "/products/lipton-black-tea-bags-100-count/main.webp"
  },
  {
    "id": "wbg-007",
    "slug": "barilla-spaghetti-16oz-two-pack",
    "brand": "Barilla",
    "title": "Barilla Spaghetti Pasta, 16 oz, Two-Pack",
    "category": "pasta-pantry",
    "packageSize": "16 oz each (2-pack)",
    "packCount": 2,
    "synonyms": [
      "pasta",
      "spaghetti",
      "barilla",
      "noodles"
    ],
    "shortDescription": "A convenient two-pack of classic spaghetti for pantry restocking.",
    "image": "/products/barilla-spaghetti-16oz-two-pack/main.webp"
  },
  {
    "id": "wbg-008",
    "slug": "prego-traditional-italian-sauce-24oz",
    "brand": "Prego",
    "title": "Prego Traditional Italian Sauce, 24 oz",
    "category": "pasta-pantry",
    "packageSize": "24 oz",
    "packCount": 1,
    "synonyms": [
      "sauce",
      "pasta sauce",
      "prego",
      "tomato sauce"
    ],
    "shortDescription": "A classic tomato-based pasta sauce for spaghetti and simple family meals.",
    "image": "/products/prego-traditional-italian-sauce-24oz/main.webp"
  },
  {
    "id": "wbg-009",
    "slug": "kraft-original-macaroni-cheese-five-pack",
    "brand": "Kraft",
    "title": "Kraft Original Macaroni and Cheese Dinner, Five-Pack",
    "category": "pasta-pantry",
    "packageSize": "5 Boxes",
    "packCount": 5,
    "synonyms": [
      "mac and cheese",
      "macaroni",
      "kraft",
      "pasta"
    ],
    "shortDescription": "A five-box pantry pack of classic macaroni and cheese dinner.",
    "image": "/products/kraft-original-macaroni-cheese-five-pack/main.webp"
  },
  {
    "id": "wbg-010",
    "slug": "jif-creamy-peanut-butter-16oz",
    "brand": "Jif",
    "title": "Jif Creamy Peanut Butter, 16 oz",
    "category": "condiments-spreads",
    "packageSize": "16 oz",
    "packCount": 1,
    "synonyms": [
      "peanut butter",
      "jif",
      "spread",
      "pb"
    ],
    "shortDescription": "Smooth creamy peanut butter for sandwiches, breakfast and snacks.",
    "image": "/products/jif-creamy-peanut-butter-16oz/main.webp"
  },
  {
    "id": "wbg-011",
    "slug": "smuckers-strawberry-preserves-18oz",
    "brand": "Smucker's",
    "title": "Smucker's Strawberry Preserves, 18 oz",
    "category": "condiments-spreads",
    "packageSize": "18 oz",
    "packCount": 1,
    "synonyms": [
      "jam",
      "preserves",
      "strawberry",
      "smuckers",
      "jelly"
    ],
    "shortDescription": "Sweet strawberry preserves for toast, sandwiches and baking.",
    "image": "/products/smuckers-strawberry-preserves-18oz/main.webp"
  },
  {
    "id": "wbg-012",
    "slug": "heinz-tomato-ketchup-32oz",
    "brand": "Heinz",
    "title": "Heinz Tomato Ketchup, 32 oz",
    "category": "condiments-spreads",
    "packageSize": "32 oz",
    "packCount": 1,
    "synonyms": [
      "ketchup",
      "heinz",
      "catsup",
      "condiment"
    ],
    "shortDescription": "Classic tomato ketchup in a family-sized squeeze bottle.",
    "image": "/products/heinz-tomato-ketchup-32oz/main.webp"
  },
  {
    "id": "wbg-013",
    "slug": "hellmanns-real-mayonnaise-30oz",
    "brand": "Hellmann's",
    "title": "Hellmann's Real Mayonnaise, 30 oz",
    "category": "condiments-spreads",
    "packageSize": "30 oz",
    "packCount": 1,
    "synonyms": [
      "mayo",
      "mayonnaise",
      "hellmanns",
      "condiment"
    ],
    "shortDescription": "Creamy mayonnaise for sandwiches, salads, dips and recipes.",
    "image": "/products/hellmanns-real-mayonnaise-30oz/main.webp"
  },
  {
    "id": "wbg-014",
    "slug": "bushs-original-baked-beans-28oz",
    "brand": "Bush's",
    "title": "Bush's Original Baked Beans, 28 oz",
    "category": "canned-goods",
    "packageSize": "28 oz",
    "packCount": 1,
    "synonyms": [
      "baked beans",
      "beans",
      "bushs",
      "canned"
    ],
    "shortDescription": "Seasoned baked beans in a convenient family-sized can.",
    "image": "/products/bushs-original-baked-beans-28oz/main.webp"
  },
  {
    "id": "wbg-015",
    "slug": "del-monte-whole-kernel-corn-four-pack",
    "brand": "Del Monte",
    "title": "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack",
    "category": "canned-goods",
    "packageSize": "15.25 oz each (4-pack)",
    "packCount": 4,
    "synonyms": [
      "corn",
      "canned corn",
      "del monte",
      "vegetables"
    ],
    "shortDescription": "A pantry-ready four-pack of whole-kernel corn.",
    "image": "/products/del-monte-whole-kernel-corn-four-pack/main.webp"
  },
  {
    "id": "wbg-016",
    "slug": "starkist-chunk-light-tuna-four-pack",
    "brand": "StarKist",
    "title": "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack",
    "category": "canned-goods",
    "packageSize": "5 oz each (4-pack)",
    "packCount": 4,
    "synonyms": [
      "tuna",
      "starkist",
      "canned tuna",
      "fish"
    ],
    "shortDescription": "A convenient four-pack of chunk light tuna packed in water.",
    "image": "/products/starkist-chunk-light-tuna-four-pack/main.webp"
  },
  {
    "id": "wbg-017",
    "slug": "oreo-original-cookies-14-3oz",
    "brand": "Oreo",
    "title": "Oreo Original Chocolate Sandwich Cookies, 14.3 oz",
    "category": "snacks",
    "packageSize": "14.3 oz",
    "packCount": 1,
    "synonyms": [
      "cookies",
      "oreo",
      "biscuits",
      "snacks"
    ],
    "shortDescription": "Classic chocolate sandwich cookies with creme filling.",
    "image": "/products/oreo-original-cookies-14-3oz/main.webp"
  },
  {
    "id": "wbg-018",
    "slug": "ritz-original-crackers-13-7oz",
    "brand": "Ritz",
    "title": "Ritz Original Crackers, 13.7 oz",
    "category": "snacks",
    "packageSize": "13.7 oz",
    "packCount": 1,
    "synonyms": [
      "crackers",
      "ritz",
      "snacks"
    ],
    "shortDescription": "Light crackers for snacks, dips and simple lunch plates.",
    "image": "/products/ritz-original-crackers-13-7oz/main.webp"
  },
  {
    "id": "wbg-019",
    "slug": "lays-classic-potato-chips-8oz",
    "brand": "Lay's",
    "title": "Lay's Classic Potato Chips, 8 oz",
    "category": "snacks",
    "packageSize": "8 oz",
    "packCount": 1,
    "synonyms": [
      "chips",
      "potato chips",
      "lays",
      "crisps"
    ],
    "shortDescription": "Classic salted potato chips in a shareable bag.",
    "image": "/products/lays-classic-potato-chips-8oz/main.webp"
  },
  {
    "id": "wbg-020",
    "slug": "doritos-nacho-cheese-9-25oz",
    "brand": "Doritos",
    "title": "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz",
    "category": "snacks",
    "packageSize": "9.25 oz",
    "packCount": 1,
    "synonyms": [
      "doritos",
      "chips",
      "nacho",
      "tortilla chips"
    ],
    "shortDescription": "Crunchy tortilla chips with nacho-cheese seasoning.",
    "image": "/products/doritos-nacho-cheese-9-25oz/main.webp"
  },
  {
    "id": "wbg-021",
    "slug": "coca-cola-original-12-pack",
    "brand": "Coca-Cola",
    "title": "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack",
    "category": "beverages",
    "packageSize": "12 fl oz cans (12-pack)",
    "packCount": 12,
    "synonyms": [
      "coke",
      "soda",
      "soft drink",
      "cola",
      "coca cola"
    ],
    "shortDescription": "A 12-pack of classic Coca-Cola in 12 fl oz cans.",
    "image": "/products/coca-cola-original-12-pack/main.webp"
  },
  {
    "id": "wbg-022",
    "slug": "gatorade-variety-pack-12-count",
    "brand": "Gatorade",
    "title": "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack",
    "category": "beverages",
    "packageSize": "12 fl oz bottles (12-pack)",
    "packCount": 12,
    "synonyms": [
      "gatorade",
      "sports drink",
      "electrolyte",
      "beverage"
    ],
    "shortDescription": "A mixed-flavor sports-drink pack for refrigerator and pantry restocking.",
    "image": "/products/gatorade-variety-pack-12-count/main.webp"
  },
  {
    "id": "wbg-023",
    "slug": "tide-simply-clean-fresh-84oz",
    "brand": "Tide",
    "title": "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz",
    "category": "household",
    "packageSize": "84 fl oz",
    "packCount": 1,
    "synonyms": [
      "laundry",
      "detergent",
      "tide",
      "cleaning",
      "wash"
    ],
    "shortDescription": "Liquid laundry detergent for regular household washing.",
    "image": "/products/tide-simply-clean-fresh-84oz/main.webp"
  },
  {
    "id": "wbg-024",
    "slug": "dawn-ultra-dishwashing-liquid-18oz",
    "brand": "Dawn",
    "title": "Dawn Ultra Dishwashing Liquid, 18 fl oz",
    "category": "household",
    "packageSize": "18 fl oz",
    "packCount": 1,
    "synonyms": [
      "dish soap",
      "dawn",
      "dishwashing",
      "cleaning",
      "dishes"
    ],
    "shortDescription": "Concentrated liquid dish soap for everyday hand-washing of dishes.",
    "image": "/products/dawn-ultra-dishwashing-liquid-18oz/main.webp"
  },
  {
    "id": "wbg-025",
    "slug": "bounty-essentials-six-double-rolls",
    "brand": "Bounty",
    "title": "Bounty Essentials Paper Towels, Six Double Rolls",
    "category": "household",
    "packageSize": "6 Double Rolls",
    "packCount": 6,
    "synonyms": [
      "paper towels",
      "bounty",
      "paper",
      "kitchen towels"
    ],
    "shortDescription": "A six-double-roll multipack of everyday paper towels.",
    "image": "/products/bounty-essentials-six-double-rolls/main.webp"
  },
  {
    "id": "wbg-026",
    "slug": "glad-forceflexplus-13-gallon-40-count",
    "brand": "Glad",
    "title": "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count",
    "category": "household",
    "packageSize": "13 Gallon, 40 Count",
    "packCount": 40,
    "synonyms": [
      "trash bags",
      "garbage bags",
      "glad",
      "kitchen bags"
    ],
    "shortDescription": "Tall-kitchen trash bags designed for standard 13-gallon kitchen bins.",
    "image": "/products/glad-forceflexplus-13-gallon-40-count/main.webp"
  },
  {
    "id": "wbg-027",
    "slug": "honey-nut-cheerios-cereal-18-8oz",
    "brand": "Cheerios",
    "title": "Honey Nut Cheerios Cereal, 18.8 oz",
    "category": "breakfast",
    "packageSize": "18.8 oz",
    "packCount": 1,
    "synonyms": [
      "cheerios",
      "honey nut",
      "cereal",
      "breakfast"
    ],
    "shortDescription": "Honey-sweetened oat cereal for everyday breakfast bowls.",
    "image": "/products/honey-nut-cheerios-cereal-18-8oz/main.webp"
  },
  {
    "id": "wbg-028",
    "slug": "kelloggs-rice-krispies-12oz",
    "brand": "Kellogg's",
    "title": "Kellogg's Rice Krispies Cereal, 12 oz",
    "category": "breakfast",
    "packageSize": "12 oz",
    "packCount": 1,
    "synonyms": [
      "rice krispies",
      "kellogg",
      "cereal",
      "breakfast"
    ],
    "shortDescription": "Crispy rice cereal for breakfast bowls and classic treat recipes.",
    "image": "/products/kelloggs-rice-krispies-12oz/main.webp"
  },
  {
    "id": "wbg-029",
    "slug": "quaker-instant-oatmeal-variety-48-count",
    "brand": "Quaker",
    "title": "Quaker Instant Oatmeal Variety Pack, 48 Packets",
    "category": "breakfast",
    "packageSize": "48 Packets",
    "packCount": 48,
    "synonyms": [
      "oatmeal",
      "instant oats",
      "quaker",
      "breakfast"
    ],
    "shortDescription": "Assorted instant oatmeal packets for quick weekday breakfasts.",
    "image": "/products/quaker-instant-oatmeal-variety-48-count/main.webp"
  },
  {
    "id": "wbg-030",
    "slug": "pop-tarts-frosted-strawberry-8-count",
    "brand": "Pop-Tarts",
    "title": "Pop-Tarts Frosted Strawberry, 8 Count",
    "category": "breakfast",
    "packageSize": "8 Count",
    "packCount": 8,
    "synonyms": [
      "pop tarts",
      "toaster pastry",
      "strawberry",
      "breakfast"
    ],
    "shortDescription": "Frosted strawberry toaster pastries for quick breakfasts and snacks.",
    "image": "/products/pop-tarts-frosted-strawberry-8-count/main.webp"
  },
  {
    "id": "wbg-031",
    "slug": "special-k-original-cereal-12oz",
    "brand": "Special K",
    "title": "Special K Original Cereal, 12 oz",
    "category": "breakfast",
    "packageSize": "12 oz",
    "packCount": 1,
    "synonyms": [
      "special k",
      "cereal",
      "kellogg",
      "breakfast"
    ],
    "shortDescription": "Crispy rice cereal for lighter everyday breakfast bowls.",
    "image": "/products/special-k-original-cereal-12oz/main.webp"
  },
  {
    "id": "wbg-032",
    "slug": "maxwell-house-original-roast-coffee-30-6oz",
    "brand": "Maxwell House",
    "title": "Maxwell House Original Roast Ground Coffee, 30.6 oz",
    "category": "coffee-tea",
    "packageSize": "30.6 oz",
    "packCount": 1,
    "synonyms": [
      "coffee",
      "maxwell house",
      "ground coffee",
      "breakfast"
    ],
    "shortDescription": "Classic original roast ground coffee for everyday brewing.",
    "image": "/products/maxwell-house-original-roast-coffee-30-6oz/main.webp"
  },
  {
    "id": "wbg-033",
    "slug": "twinings-english-breakfast-tea-50-count",
    "brand": "Twinings",
    "title": "Twinings English Breakfast Tea Bags, 50 Count",
    "category": "coffee-tea",
    "packageSize": "50 Count",
    "packCount": 50,
    "synonyms": [
      "tea",
      "twinings",
      "english breakfast",
      "black tea"
    ],
    "shortDescription": "Classic English breakfast black tea bags for hot or iced tea.",
    "image": "/products/twinings-english-breakfast-tea-50-count/main.webp"
  },
  {
    "id": "wbg-034",
    "slug": "swiss-miss-milk-chocolate-cocoas-60-count",
    "brand": "Swiss Miss",
    "title": "Swiss Miss Milk Chocolate Hot Cocoa Mix, 60 Packets",
    "category": "coffee-tea",
    "packageSize": "60 Packets",
    "packCount": 60,
    "synonyms": [
      "hot cocoa",
      "swiss miss",
      "chocolate",
      "drink mix"
    ],
    "shortDescription": "Instant milk chocolate cocoa packets for quick warm drinks.",
    "image": "/products/swiss-miss-milk-chocolate-cocoas-60-count/main.webp"
  },
  {
    "id": "wbg-035",
    "slug": "celestial-seasonings-sleepytime-tea-40-count",
    "brand": "Celestial Seasonings",
    "title": "Celestial Seasonings Sleepytime Tea, 40 Count",
    "category": "coffee-tea",
    "packageSize": "40 Count",
    "packCount": 40,
    "synonyms": [
      "sleepytime",
      "herbal tea",
      "celestial",
      "tea"
    ],
    "shortDescription": "Caffeine-free herbal tea bags for evening wind-down routines.",
    "image": "/products/celestial-seasonings-sleepytime-tea-40-count/main.webp"
  },
  {
    "id": "wbg-036",
    "slug": "barilla-penne-16oz",
    "brand": "Barilla",
    "title": "Barilla Penne Pasta, 16 oz",
    "category": "pasta-pantry",
    "packageSize": "16 oz",
    "packCount": 1,
    "synonyms": [
      "penne",
      "pasta",
      "barilla",
      "pantry"
    ],
    "shortDescription": "Classic penne pasta for sauces, bakes and weeknight dinners.",
    "image": "/products/barilla-penne-16oz/main.webp"
  },
  {
    "id": "wbg-037",
    "slug": "campbells-condensed-tomato-soup-10-75oz-four-pack",
    "brand": "Campbell's",
    "title": "Campbell's Condensed Tomato Soup, 10.75 oz, Four-Pack",
    "category": "pasta-pantry",
    "packageSize": "10.75 oz each",
    "packCount": 4,
    "synonyms": [
      "tomato soup",
      "campbells",
      "soup",
      "pantry"
    ],
    "shortDescription": "Four cans of classic condensed tomato soup for quick lunches.",
    "image": "/products/campbells-condensed-tomato-soup-10-75oz-four-pack/main.webp"
  },
  {
    "id": "wbg-038",
    "slug": "progresso-traditional-chicken-noodle-19oz",
    "brand": "Progresso",
    "title": "Progresso Traditional Chicken Noodle Soup, 19 oz",
    "category": "pasta-pantry",
    "packageSize": "19 oz",
    "packCount": 1,
    "synonyms": [
      "progresso",
      "chicken noodle",
      "soup",
      "pantry"
    ],
    "shortDescription": "Ready-to-serve chicken noodle soup for quick lunches.",
    "image": "/products/progresso-traditional-chicken-noodle-19oz/main.webp"
  },
  {
    "id": "wbg-039",
    "slug": "uncle-bens-original-ready-rice-8-8oz",
    "brand": "Ben's Original",
    "title": "Ben's Original Ready Rice Original, 8.8 oz",
    "category": "pasta-pantry",
    "packageSize": "8.8 oz",
    "packCount": 1,
    "synonyms": [
      "ready rice",
      "uncle bens",
      "rice",
      "microwave"
    ],
    "shortDescription": "Microwave-ready white rice pouch for fast side dishes.",
    "image": "/products/uncle-bens-original-ready-rice-8-8oz/main.webp"
  },
  {
    "id": "wbg-040",
    "slug": "knorr-pasta-sides-butter-4-pack",
    "brand": "Knorr",
    "title": "Knorr Pasta Sides Butter, Four-Pack",
    "category": "pasta-pantry",
    "packageSize": "Four Pouches",
    "packCount": 4,
    "synonyms": [
      "knorr",
      "pasta sides",
      "butter pasta",
      "pantry"
    ],
    "shortDescription": "Four butter pasta side pouches for quick weeknight dinners.",
    "image": "/products/knorr-pasta-sides-butter-4-pack/main.webp"
  },
  {
    "id": "wbg-041",
    "slug": "betty-crocker-fudge-brownie-mix-18-3oz",
    "brand": "Betty Crocker",
    "title": "Betty Crocker Fudge Brownie Mix, 18.3 oz",
    "category": "pasta-pantry",
    "packageSize": "18.3 oz",
    "packCount": 1,
    "synonyms": [
      "brownie mix",
      "betty crocker",
      "baking",
      "dessert"
    ],
    "shortDescription": "Classic fudge brownie mix for simple homemade baking.",
    "image": "/products/betty-crocker-fudge-brownie-mix-18-3oz/main.webp"
  },
  {
    "id": "wbg-042",
    "slug": "frenchs-classic-yellow-mustard-20oz",
    "brand": "French's",
    "title": "French's Classic Yellow Mustard, 20 oz",
    "category": "condiments-spreads",
    "packageSize": "20 oz",
    "packCount": 1,
    "synonyms": [
      "mustard",
      "frenchs",
      "yellow mustard",
      "condiment"
    ],
    "shortDescription": "Classic yellow mustard for sandwiches, hot dogs and recipes.",
    "image": "/products/frenchs-classic-yellow-mustard-20oz/main.webp"
  },
  {
    "id": "wbg-043",
    "slug": "hidden-valley-original-ranch-24oz",
    "brand": "Hidden Valley",
    "title": "Hidden Valley Original Ranch Dressing, 24 fl oz",
    "category": "condiments-spreads",
    "packageSize": "24 fl oz",
    "packCount": 1,
    "synonyms": [
      "ranch",
      "hidden valley",
      "dressing",
      "condiment"
    ],
    "shortDescription": "Original ranch dressing for salads, dips and everyday meals.",
    "image": "/products/hidden-valley-original-ranch-24oz/main.webp"
  },
  {
    "id": "wbg-044",
    "slug": "franks-redhot-original-cayenne-12oz",
    "brand": "Frank's RedHot",
    "title": "Frank's RedHot Original Cayenne Pepper Sauce, 12 fl oz",
    "category": "condiments-spreads",
    "packageSize": "12 fl oz",
    "packCount": 1,
    "synonyms": [
      "hot sauce",
      "franks",
      "redhot",
      "cayenne"
    ],
    "shortDescription": "Classic cayenne pepper hot sauce for wings, dips and recipes.",
    "image": "/products/franks-redhot-original-cayenne-12oz/main.webp"
  },
  {
    "id": "wbg-045",
    "slug": "welchs-concord-grape-jelly-30oz",
    "brand": "Welch's",
    "title": "Welch's Concord Grape Jelly, 30 oz",
    "category": "condiments-spreads",
    "packageSize": "30 oz",
    "packCount": 1,
    "synonyms": [
      "grape jelly",
      "welchs",
      "jelly",
      "spread"
    ],
    "shortDescription": "Concord grape jelly for peanut butter sandwiches and toast.",
    "image": "/products/welchs-concord-grape-jelly-30oz/main.webp"
  },
  {
    "id": "wbg-046",
    "slug": "skippy-creamy-peanut-butter-40oz",
    "brand": "Skippy",
    "title": "Skippy Creamy Peanut Butter, 40 oz",
    "category": "condiments-spreads",
    "packageSize": "40 oz",
    "packCount": 1,
    "synonyms": [
      "skippy",
      "peanut butter",
      "creamy",
      "spread"
    ],
    "shortDescription": "Family-size creamy peanut butter for sandwiches and snacks.",
    "image": "/products/skippy-creamy-peanut-butter-40oz/main.webp"
  },
  {
    "id": "wbg-047",
    "slug": "hunts-diced-tomatoes-14-5oz-four-pack",
    "brand": "Hunt's",
    "title": "Hunt's Diced Tomatoes, 14.5 oz, Four-Pack",
    "category": "canned-goods",
    "packageSize": "14.5 oz each",
    "packCount": 4,
    "synonyms": [
      "diced tomatoes",
      "hunts",
      "canned tomatoes",
      "pantry"
    ],
    "shortDescription": "Four cans of diced tomatoes for soups, sauces and skillet meals.",
    "image": "/products/hunts-diced-tomatoes-14-5oz-four-pack/main.webp"
  },
  {
    "id": "wbg-048",
    "slug": "green-giant-sweet-peas-15oz-four-pack",
    "brand": "Green Giant",
    "title": "Green Giant Sweet Peas, 15 oz, Four-Pack",
    "category": "canned-goods",
    "packageSize": "15 oz each",
    "packCount": 4,
    "synonyms": [
      "peas",
      "green giant",
      "canned vegetables",
      "pantry"
    ],
    "shortDescription": "Four cans of sweet peas for quick vegetable sides.",
    "image": "/products/green-giant-sweet-peas-15oz-four-pack/main.webp"
  },
  {
    "id": "wbg-049",
    "slug": "hormel-chili-with-beans-15oz-four-pack",
    "brand": "Hormel",
    "title": "Hormel Chili with Beans, 15 oz, Four-Pack",
    "category": "canned-goods",
    "packageSize": "15 oz each",
    "packCount": 4,
    "synonyms": [
      "chili",
      "hormel",
      "beans",
      "canned"
    ],
    "shortDescription": "Four cans of chili with beans for quick hearty lunches.",
    "image": "/products/hormel-chili-with-beans-15oz-four-pack/main.webp"
  },
  {
    "id": "wbg-050",
    "slug": "chicken-of-the-sea-chunk-light-tuna-5oz-four-pack",
    "brand": "Chicken of the Sea",
    "title": "Chicken of the Sea Chunk Light Tuna in Water, 5 oz, Four-Pack",
    "category": "canned-goods",
    "packageSize": "5 oz each",
    "packCount": 4,
    "synonyms": [
      "tuna",
      "chicken of the sea",
      "canned fish",
      "protein"
    ],
    "shortDescription": "Four cans of chunk light tuna in water for sandwiches and salads.",
    "image": "/products/chicken-of-the-sea-chunk-light-tuna-5oz-four-pack/main.webp"
  },
  {
    "id": "wbg-051",
    "slug": "spaghettios-original-15-8oz-four-pack",
    "brand": "SpaghettiOs",
    "title": "SpaghettiOs Original, 15.8 oz, Four-Pack",
    "category": "canned-goods",
    "packageSize": "15.8 oz each",
    "packCount": 4,
    "synonyms": [
      "spaghettios",
      "pasta",
      "canned pasta",
      "kids"
    ],
    "shortDescription": "Four cans of classic pasta rings in tomato and cheese sauce.",
    "image": "/products/spaghettios-original-15-8oz-four-pack/main.webp"
  },
  {
    "id": "wbg-052",
    "slug": "cheez-it-original-baked-snack-crackers-12-4oz",
    "brand": "Cheez-It",
    "title": "Cheez-It Original Baked Snack Crackers, 12.4 oz",
    "category": "snacks",
    "packageSize": "12.4 oz",
    "packCount": 1,
    "synonyms": [
      "cheez it",
      "cheese crackers",
      "snack",
      "crackers"
    ],
    "shortDescription": "Original baked cheese crackers for lunchboxes and snacking.",
    "image": "/products/cheez-it-original-baked-snack-crackers-12-4oz/main.webp"
  },
  {
    "id": "wbg-053",
    "slug": "goldfish-cheddar-crackers-30oz",
    "brand": "Goldfish",
    "title": "Goldfish Cheddar Crackers, 30 oz",
    "category": "snacks",
    "packageSize": "30 oz",
    "packCount": 1,
    "synonyms": [
      "goldfish",
      "cheddar",
      "crackers",
      "snack"
    ],
    "shortDescription": "Family-size cheddar Goldfish crackers for everyday snacking.",
    "image": "/products/goldfish-cheddar-crackers-30oz/main.webp"
  },
  {
    "id": "wbg-054",
    "slug": "chips-ahoy-original-chocolate-chip-cookies-13oz",
    "brand": "Chips Ahoy!",
    "title": "Chips Ahoy! Original Chocolate Chip Cookies, 13 oz",
    "category": "snacks",
    "packageSize": "13 oz",
    "packCount": 1,
    "synonyms": [
      "chips ahoy",
      "cookies",
      "chocolate chip",
      "snack"
    ],
    "shortDescription": "Classic chocolate chip cookies for lunchboxes and dessert trays.",
    "image": "/products/chips-ahoy-original-chocolate-chip-cookies-13oz/main.webp"
  },
  {
    "id": "wbg-055",
    "slug": "pringles-original-potato-crisps-5-2oz",
    "brand": "Pringles",
    "title": "Pringles Original Potato Crisps, 5.2 oz",
    "category": "snacks",
    "packageSize": "5.2 oz",
    "packCount": 1,
    "synonyms": [
      "pringles",
      "potato chips",
      "crisps",
      "snack"
    ],
    "shortDescription": "Original stackable potato crisps in a resealable can.",
    "image": "/products/pringles-original-potato-crisps-5-2oz/main.webp"
  },
  {
    "id": "wbg-056",
    "slug": "snyders-of-hanover-mini-pretzels-12oz",
    "brand": "Snyder's of Hanover",
    "title": "Snyder's of Hanover Mini Pretzels, 12 oz",
    "category": "snacks",
    "packageSize": "12 oz",
    "packCount": 1,
    "synonyms": [
      "pretzels",
      "snyders",
      "mini pretzels",
      "snack"
    ],
    "shortDescription": "Mini pretzels for lunchboxes, parties and everyday snacking.",
    "image": "/products/snyders-of-hanover-mini-pretzels-12oz/main.webp"
  },
  {
    "id": "wbg-057",
    "slug": "triscuit-original-crackers-8-5oz",
    "brand": "Triscuit",
    "title": "Triscuit Original Crackers, 8.5 oz",
    "category": "snacks",
    "packageSize": "8.5 oz",
    "packCount": 1,
    "synonyms": [
      "triscuit",
      "wheat crackers",
      "crackers",
      "snack"
    ],
    "shortDescription": "Original woven wheat crackers for cheese boards and snacks.",
    "image": "/products/triscuit-original-crackers-8-5oz/main.webp"
  },
  {
    "id": "wbg-058",
    "slug": "pepsi-cola-12-pack-12oz-cans",
    "brand": "Pepsi",
    "title": "Pepsi Cola, 12 fl oz Cans, 12-Pack",
    "category": "beverages",
    "packageSize": "12 fl oz cans",
    "packCount": 12,
    "synonyms": [
      "pepsi",
      "cola",
      "soda",
      "soft drink"
    ],
    "shortDescription": "Twelve cans of classic Pepsi for home beverage restocking.",
    "image": "/products/pepsi-cola-12-pack-12oz-cans/main.webp"
  },
  {
    "id": "wbg-059",
    "slug": "sprite-lemon-lime-12-pack-12oz-cans",
    "brand": "Sprite",
    "title": "Sprite Lemon-Lime, 12 fl oz Cans, 12-Pack",
    "category": "beverages",
    "packageSize": "12 fl oz cans",
    "packCount": 12,
    "synonyms": [
      "sprite",
      "lemon lime",
      "soda",
      "soft drink"
    ],
    "shortDescription": "Twelve cans of lemon-lime Sprite for everyday soft drinks.",
    "image": "/products/sprite-lemon-lime-12-pack-12oz-cans/main.webp"
  },
  {
    "id": "wbg-060",
    "slug": "dasani-purified-water-16-9oz-24-pack",
    "brand": "Dasani",
    "title": "Dasani Purified Water, 16.9 fl oz Bottles, 24-Pack",
    "category": "beverages",
    "packageSize": "16.9 fl oz bottles",
    "packCount": 24,
    "synonyms": [
      "dasani",
      "water",
      "bottled water",
      "hydration"
    ],
    "shortDescription": "Twenty-four bottles of purified water for home and on-the-go hydration.",
    "image": "/products/dasani-purified-water-16-9oz-24-pack/main.webp"
  },
  {
    "id": "wbg-061",
    "slug": "tropicana-pure-premium-orange-juice-59oz",
    "brand": "Tropicana",
    "title": "Tropicana Pure Premium Orange Juice, 59 fl oz",
    "category": "beverages",
    "packageSize": "59 fl oz",
    "packCount": 1,
    "synonyms": [
      "tropicana",
      "orange juice",
      "juice",
      "breakfast"
    ],
    "shortDescription": "Pure premium orange juice carton for breakfasts and everyday pours.",
    "image": "/products/tropicana-pure-premium-orange-juice-59oz/main.webp"
  },
  {
    "id": "wbg-062",
    "slug": "arizona-iced-tea-with-lemon-23oz-four-pack",
    "brand": "AriZona",
    "title": "AriZona Iced Tea with Lemon, 23 fl oz Cans, Four-Pack",
    "category": "beverages",
    "packageSize": "23 fl oz cans",
    "packCount": 4,
    "synonyms": [
      "arizona",
      "iced tea",
      "lemon tea",
      "drink"
    ],
    "shortDescription": "Four tall cans of lemon iced tea for ready-to-drink refreshment.",
    "image": "/products/arizona-iced-tea-with-lemon-23oz-four-pack/main.webp"
  },
  {
    "id": "wbg-063",
    "slug": "charmin-essential-soft-toilet-paper-12-mega-rolls",
    "brand": "Charmin",
    "title": "Charmin Essential Soft Toilet Paper, 12 Mega Rolls",
    "category": "household",
    "packageSize": "12 Mega Rolls",
    "packCount": 12,
    "synonyms": [
      "charmin",
      "toilet paper",
      "bathroom tissue",
      "household"
    ],
    "shortDescription": "Twelve mega rolls of soft toilet paper for household restocking.",
    "image": "/products/charmin-essential-soft-toilet-paper-12-mega-rolls/main.webp"
  },
  {
    "id": "wbg-064",
    "slug": "clorox-disinfecting-wipes-75-count-fresh-scent",
    "brand": "Clorox",
    "title": "Clorox Disinfecting Wipes, 75 Count, Fresh Scent",
    "category": "household",
    "packageSize": "75 Count",
    "packCount": 75,
    "synonyms": [
      "clorox",
      "wipes",
      "disinfecting",
      "cleaning"
    ],
    "shortDescription": "Disinfecting wipes for everyday kitchen and household surface cleaning.",
    "image": "/products/clorox-disinfecting-wipes-75-count-fresh-scent/main.webp"
  },
  {
    "id": "wbg-065",
    "slug": "reynolds-wrap-aluminum-foil-75-sq-ft",
    "brand": "Reynolds Wrap",
    "title": "Reynolds Wrap Aluminum Foil, 75 sq ft",
    "category": "household",
    "packageSize": "75 sq ft",
    "packCount": 1,
    "synonyms": [
      "aluminum foil",
      "reynolds",
      "foil",
      "kitchen"
    ],
    "shortDescription": "Aluminum foil roll for cooking, covering and food storage.",
    "image": "/products/reynolds-wrap-aluminum-foil-75-sq-ft/main.webp"
  },
  {
    "id": "wbg-066",
    "slug": "ziploc-sandwich-bags-90-count",
    "brand": "Ziploc",
    "title": "Ziploc Sandwich Bags, 90 Count",
    "category": "household",
    "packageSize": "90 Count",
    "packCount": 90,
    "synonyms": [
      "ziploc",
      "sandwich bags",
      "storage bags",
      "kitchen"
    ],
    "shortDescription": "Resealable sandwich bags for lunches and leftover storage.",
    "image": "/products/ziploc-sandwich-bags-90-count/main.webp"
  },
  {
    "id": "wbg-067",
    "slug": "softsoap-liquid-hand-soap-refill-50oz",
    "brand": "Softsoap",
    "title": "Softsoap Liquid Hand Soap Refill, 50 fl oz",
    "category": "household",
    "packageSize": "50 fl oz",
    "packCount": 1,
    "synonyms": [
      "softsoap",
      "hand soap",
      "refill",
      "bathroom"
    ],
    "shortDescription": "Large liquid hand soap refill for bathroom and kitchen pumps.",
    "image": "/products/softsoap-liquid-hand-soap-refill-50oz/main.webp"
  },
  {
    "id": "wbg-068",
    "slug": "cascade-platinum-dishwasher-pods-42-count",
    "brand": "Cascade",
    "title": "Cascade Platinum Dishwasher Detergent Pods, 42 Count",
    "category": "household",
    "packageSize": "42 Count",
    "packCount": 42,
    "synonyms": [
      "cascade",
      "dishwasher pods",
      "detergent",
      "kitchen"
    ],
    "shortDescription": "Dishwasher detergent pods for everyday automatic dishwashing.",
    "image": "/products/cascade-platinum-dishwasher-pods-42-count/main.webp"
  }
];

export const catalogBrands: string[] = [
  "AriZona",
  "Barilla",
  "Ben's Original",
  "Betty Crocker",
  "Bounty",
  "Bush's",
  "Campbell's",
  "Cascade",
  "Celestial Seasonings",
  "Charmin",
  "Cheerios",
  "Cheez-It",
  "Chicken of the Sea",
  "Chips Ahoy!",
  "Clorox",
  "Coca-Cola",
  "Dasani",
  "Dawn",
  "Del Monte",
  "Doritos",
  "Folgers",
  "Frank's RedHot",
  "French's",
  "Gatorade",
  "Glad",
  "Goldfish",
  "Green Giant",
  "Heinz",
  "Hellmann's",
  "Hidden Valley",
  "Hormel",
  "Hunt's",
  "Jif",
  "Kellogg's",
  "Knorr",
  "Kraft",
  "Lay's",
  "Lipton",
  "Maxwell House",
  "Nature Valley",
  "Oreo",
  "Pepsi",
  "Pop-Tarts",
  "Prego",
  "Pringles",
  "Progresso",
  "Quaker",
  "Reynolds Wrap",
  "Ritz",
  "Skippy",
  "Smucker's",
  "Snyder's of Hanover",
  "Softsoap",
  "SpaghettiOs",
  "Special K",
  "Sprite",
  "StarKist",
  "Swiss Miss",
  "Tide",
  "Triscuit",
  "Tropicana",
  "Twinings",
  "Welch's",
  "Ziploc"
];

export const relatedProductIds: Record<string, string[]> = {
  "wbg-001": [
    "wbg-002",
    "wbg-004"
  ],
  "wbg-002": [
    "wbg-001",
    "wbg-003"
  ],
  "wbg-003": [
    "wbg-002",
    "wbg-004"
  ],
  "wbg-004": [
    "wbg-001",
    "wbg-017"
  ],
  "wbg-005": [
    "wbg-006",
    "wbg-002"
  ],
  "wbg-006": [
    "wbg-005"
  ],
  "wbg-007": [
    "wbg-008",
    "wbg-009"
  ],
  "wbg-008": [
    "wbg-007",
    "wbg-009"
  ],
  "wbg-009": [
    "wbg-007",
    "wbg-008"
  ],
  "wbg-010": [
    "wbg-011",
    "wbg-017"
  ],
  "wbg-011": [
    "wbg-010"
  ],
  "wbg-012": [
    "wbg-013"
  ],
  "wbg-013": [
    "wbg-012"
  ],
  "wbg-014": [
    "wbg-015",
    "wbg-016"
  ],
  "wbg-015": [
    "wbg-014",
    "wbg-016"
  ],
  "wbg-016": [
    "wbg-014",
    "wbg-015"
  ],
  "wbg-017": [
    "wbg-021",
    "wbg-018"
  ],
  "wbg-018": [
    "wbg-017",
    "wbg-019"
  ],
  "wbg-019": [
    "wbg-021",
    "wbg-020"
  ],
  "wbg-020": [
    "wbg-019",
    "wbg-021"
  ],
  "wbg-021": [
    "wbg-022",
    "wbg-017"
  ],
  "wbg-022": [
    "wbg-021"
  ],
  "wbg-023": [
    "wbg-024",
    "wbg-025"
  ],
  "wbg-024": [
    "wbg-023",
    "wbg-025"
  ],
  "wbg-025": [
    "wbg-024",
    "wbg-026"
  ],
  "wbg-026": [
    "wbg-025",
    "wbg-023"
  ],
  "wbg-027": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "wbg-028": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "wbg-029": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "wbg-030": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "wbg-031": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "wbg-032": [
    "wbg-005",
    "wbg-006",
    "wbg-033"
  ],
  "wbg-033": [
    "wbg-005",
    "wbg-006",
    "wbg-032"
  ],
  "wbg-034": [
    "wbg-005",
    "wbg-006",
    "wbg-032"
  ],
  "wbg-035": [
    "wbg-005",
    "wbg-006",
    "wbg-032"
  ],
  "wbg-036": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "wbg-037": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "wbg-038": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "wbg-039": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "wbg-040": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "wbg-041": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "wbg-042": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "wbg-043": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "wbg-044": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "wbg-045": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "wbg-046": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "wbg-047": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "wbg-048": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "wbg-049": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "wbg-050": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "wbg-051": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "wbg-052": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "wbg-053": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "wbg-054": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "wbg-055": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "wbg-056": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "wbg-057": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "wbg-058": [
    "wbg-021",
    "wbg-022",
    "wbg-059"
  ],
  "wbg-059": [
    "wbg-021",
    "wbg-022",
    "wbg-058"
  ],
  "wbg-060": [
    "wbg-021",
    "wbg-022",
    "wbg-058"
  ],
  "wbg-061": [
    "wbg-021",
    "wbg-022",
    "wbg-058"
  ],
  "wbg-062": [
    "wbg-021",
    "wbg-022",
    "wbg-058"
  ],
  "wbg-063": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "wbg-064": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "wbg-065": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "wbg-066": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "wbg-067": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "wbg-068": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ]
};

export function getCardById(id: string) {
  return productCards.find((item) => item.id === id);
}

export function getCardsByIds(ids: string[]) {
  return ids.map((id) => getCardById(id)).filter((item): item is ProductCardData => Boolean(item));
}

export function getCrossSellCards(productIds: string[]) {
  const seen = new Set(productIds);
  const out: ProductCardData[] = [];
  for (const id of productIds) {
    for (const relatedId of relatedProductIds[id] ?? []) {
      if (seen.has(relatedId)) continue;
      const card = getCardById(relatedId);
      if (!card) continue;
      seen.add(relatedId);
      out.push(card);
    }
  }
  return out.slice(0, 4);
}

export function searchCatalog(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return searchIndex.filter((item) => {
    const haystack = [
      item.title,
      item.brand,
      item.category,
      item.packageSize,
      String(item.packCount),
      item.shortDescription,
      ...item.synonyms,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q) || q.split(/\s+/).every((part) => haystack.includes(part));
  });
}
