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
    "image": "/products/quaker-old-fashioned-oats-42oz/main.svg",
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
    "image": "/products/cheerios-original-cereal-18oz/main.svg",
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
    "image": "/products/kelloggs-frosted-flakes-17-3oz/main.svg",
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
    "image": "/products/nature-valley-oats-honey-12-bars/main.svg",
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
    "image": "/products/folgers-classic-roast-ground-coffee-25-9oz/main.svg",
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
    "image": "/products/lipton-black-tea-bags-100-count/main.svg",
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
    "image": "/products/barilla-spaghetti-16oz-two-pack/main.svg",
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
    "image": "/products/prego-traditional-italian-sauce-24oz/main.svg",
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
    "image": "/products/kraft-original-macaroni-cheese-five-pack/main.svg",
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
    "image": "/products/jif-creamy-peanut-butter-16oz/main.svg",
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
    "image": "/products/smuckers-strawberry-preserves-18oz/main.svg",
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
    "image": "/products/heinz-tomato-ketchup-32oz/main.svg",
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
    "image": "/products/hellmanns-real-mayonnaise-30oz/main.svg",
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
    "image": "/products/bushs-original-baked-beans-28oz/main.svg",
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
    "image": "/products/del-monte-whole-kernel-corn-four-pack/main.svg",
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
    "image": "/products/starkist-chunk-light-tuna-four-pack/main.svg",
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
    "image": "/products/oreo-original-cookies-14-3oz/main.svg",
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
    "image": "/products/ritz-original-crackers-13-7oz/main.svg",
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
    "image": "/products/lays-classic-potato-chips-8oz/main.svg",
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
    "image": "/products/doritos-nacho-cheese-9-25oz/main.svg",
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
    "image": "/products/coca-cola-original-12-pack/main.svg",
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
    "image": "/products/gatorade-variety-pack-12-count/main.svg",
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
    "image": "/products/tide-simply-clean-fresh-84oz/main.svg",
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
    "image": "/products/dawn-ultra-dishwashing-liquid-18oz/main.svg",
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
    "image": "/products/bounty-essentials-six-double-rolls/main.svg",
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
    "image": "/products/glad-forceflexplus-13-gallon-40-count/main.svg",
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
    "image": "/products/quaker-old-fashioned-oats-42oz/main.svg"
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
    "image": "/products/cheerios-original-cereal-18oz/main.svg"
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
    "image": "/products/kelloggs-frosted-flakes-17-3oz/main.svg"
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
    "image": "/products/nature-valley-oats-honey-12-bars/main.svg"
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
    "image": "/products/folgers-classic-roast-ground-coffee-25-9oz/main.svg"
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
    "image": "/products/lipton-black-tea-bags-100-count/main.svg"
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
    "image": "/products/barilla-spaghetti-16oz-two-pack/main.svg"
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
    "image": "/products/prego-traditional-italian-sauce-24oz/main.svg"
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
    "image": "/products/kraft-original-macaroni-cheese-five-pack/main.svg"
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
    "image": "/products/jif-creamy-peanut-butter-16oz/main.svg"
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
    "image": "/products/smuckers-strawberry-preserves-18oz/main.svg"
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
    "image": "/products/heinz-tomato-ketchup-32oz/main.svg"
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
    "image": "/products/hellmanns-real-mayonnaise-30oz/main.svg"
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
    "image": "/products/bushs-original-baked-beans-28oz/main.svg"
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
    "image": "/products/del-monte-whole-kernel-corn-four-pack/main.svg"
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
    "image": "/products/starkist-chunk-light-tuna-four-pack/main.svg"
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
    "image": "/products/oreo-original-cookies-14-3oz/main.svg"
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
    "image": "/products/ritz-original-crackers-13-7oz/main.svg"
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
    "image": "/products/lays-classic-potato-chips-8oz/main.svg"
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
    "image": "/products/doritos-nacho-cheese-9-25oz/main.svg"
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
    "image": "/products/coca-cola-original-12-pack/main.svg"
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
    "image": "/products/gatorade-variety-pack-12-count/main.svg"
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
    "image": "/products/tide-simply-clean-fresh-84oz/main.svg"
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
    "image": "/products/dawn-ultra-dishwashing-liquid-18oz/main.svg"
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
    "image": "/products/bounty-essentials-six-double-rolls/main.svg"
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
    "image": "/products/glad-forceflexplus-13-gallon-40-count/main.svg"
  }
];

export const catalogBrands: string[] = [
  "Barilla",
  "Bounty",
  "Bush's",
  "Cheerios",
  "Coca-Cola",
  "Dawn",
  "Del Monte",
  "Doritos",
  "Folgers",
  "Gatorade",
  "Glad",
  "Heinz",
  "Hellmann's",
  "Jif",
  "Kellogg's",
  "Kraft",
  "Lay's",
  "Lipton",
  "Nature Valley",
  "Oreo",
  "Prego",
  "Quaker",
  "Ritz",
  "Smucker's",
  "StarKist",
  "Tide"
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
