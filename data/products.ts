import type { Product } from "./types";

function assertMinimumPrices(items: Product[]): Product[] {
  for (const item of items) {
    if (item.price < 5) {
      throw new Error(`Product ${item.sku} is priced below the $5 minimum.`);
    }
  }
  return items;
}

export const products: Product[] = assertMinimumPrices([
  {
    "id": "wbg-001",
    "sku": "WBG-BRK-001",
    "slug": "quaker-old-fashioned-oats-42oz",
    "brand": "Quaker",
    "manufacturer": "The Quaker Oats Company",
    "title": "Quaker Old Fashioned Oats, 42 oz",
    "subtitle": "Classic rolled oats",
    "category": "breakfast",
    "price": 6.99,
    "packageSize": "42 oz",
    "packCount": 1,
    "unitPrice": "$0.17 / oz",
    "shortDescription": "Classic rolled oats for warm breakfasts, overnight oats and everyday recipes.",
    "fullDescription": "Quaker Old Fashioned Oats in a 42 oz package for everyday breakfasts and recipes. Package size and preparation directions are shown clearly so you know what you are ordering before checkout.",
    "keyFeatures": [
      "Net weight 42 oz",
      "Rolled oats for hot cereal and recipes",
      "Shelf-stable pantry breakfast staple"
    ],
    "storageInstructions": "Store in a cool, dry place.",
    "preparationInstructions": "Prepare according to the directions printed on the package for hot oatmeal or overnight oats.",
    "weight": 2.8,
    "shippingWeight": 3,
    "featured": true,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-002",
      "wbg-004"
    ],
    "synonyms": [
      "oats",
      "oatmeal",
      "breakfast",
      "quaker"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/quaker-old-fashioned-oats-42oz/main.webp",
        "alt": "Quaker Old Fashioned Oats, 42 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/quaker-old-fashioned-oats-42oz/angle.webp",
        "alt": "Quaker Old Fashioned Oats, 42 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Quaker Old Fashioned Oats, 42 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "active": true,
    "seoTitle": "Quaker Old Fashioned Oats, 42 oz | WB Groceries",
    "seoDescription": "Classic rolled oats for warm breakfasts, overnight oats and everyday recipes."
  },
  {
    "id": "wbg-002",
    "sku": "WBG-BRK-002",
    "slug": "cheerios-original-cereal-18oz",
    "brand": "Cheerios",
    "manufacturer": "General Mills",
    "title": "Cheerios Original Cereal, 18 oz",
    "subtitle": "Toasted oat cereal",
    "category": "breakfast",
    "price": 6.49,
    "packageSize": "18 oz",
    "packCount": 1,
    "unitPrice": "$0.36 / oz",
    "shortDescription": "Classic toasted oat cereal for breakfast and everyday snacking.",
    "fullDescription": "Cheerios Original Cereal in an 18 oz package for breakfast bowls and simple snacking. The listing reflects the exact package size offered in the WB Groceries catalogue.",
    "keyFeatures": [
      "Net weight 18 oz",
      "Toasted oat cereal",
      "Familiar breakfast staple"
    ],
    "storageInstructions": "Store in a cool, dry place. Reseal after opening.",
    "preparationInstructions": "Serve with milk or enjoy dry as a snack according to package guidance.",
    "weight": 1.2,
    "shippingWeight": 1.4,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-001",
      "wbg-003"
    ],
    "synonyms": [
      "cereal",
      "cheerios",
      "oat cereal",
      "breakfast"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/cheerios-original-cereal-18oz/main.webp",
        "alt": "Cheerios Original Cereal, 18 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/cheerios-original-cereal-18oz/angle.webp",
        "alt": "Cheerios Original Cereal, 18 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Cheerios Original Cereal, 18 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Cheerios Original Cereal, 18 oz | WB Groceries",
    "seoDescription": "Classic toasted oat cereal for breakfast and everyday snacking."
  },
  {
    "id": "wbg-003",
    "sku": "WBG-BRK-003",
    "slug": "kelloggs-frosted-flakes-17-3oz",
    "brand": "Kellogg's",
    "manufacturer": "WK Kellogg Co",
    "title": "Kellogg's Frosted Flakes Cereal, 17.3 oz",
    "subtitle": "Frosted corn cereal",
    "category": "breakfast",
    "price": 6.49,
    "packageSize": "17.3 oz",
    "packCount": 1,
    "unitPrice": "$0.38 / oz",
    "shortDescription": "Crunchy frosted corn cereal for simple breakfasts and snacks.",
    "fullDescription": "Kellogg's Frosted Flakes in a 17.3 oz package for everyday breakfasts. Confirm the package size on the product page before adding to your cart.",
    "keyFeatures": [
      "Net weight 17.3 oz",
      "Frosted corn flakes",
      "Breakfast and snack cereal"
    ],
    "storageInstructions": "Store in a cool, dry place. Reseal after opening.",
    "preparationInstructions": "Serve with milk according to package directions.",
    "weight": 1.15,
    "shippingWeight": 1.35,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-002",
      "wbg-004"
    ],
    "synonyms": [
      "frosted flakes",
      "cereal",
      "kellogg",
      "breakfast"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/kelloggs-frosted-flakes-17-3oz/main.webp",
        "alt": "Kellogg's Frosted Flakes Cereal, 17.3 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/kelloggs-frosted-flakes-17-3oz/angle.webp",
        "alt": "Kellogg's Frosted Flakes Cereal, 17.3 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Kellogg's Frosted Flakes Cereal, 17.3 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Kellogg's Frosted Flakes Cereal, 17.3 oz | WB Groceries",
    "seoDescription": "Crunchy frosted corn cereal for simple breakfasts and snacks."
  },
  {
    "id": "wbg-004",
    "sku": "WBG-BRK-004",
    "slug": "nature-valley-oats-honey-12-bars",
    "brand": "Nature Valley",
    "manufacturer": "General Mills",
    "title": "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars",
    "subtitle": "Crunchy granola bars",
    "category": "breakfast",
    "secondaryCategories": [
      "snacks"
    ],
    "price": 5.49,
    "packageSize": "12 Bars",
    "packCount": 12,
    "unitPrice": "$0.46 / bar",
    "shortDescription": "Crunchy oat-and-honey granola bars in individually packaged portions.",
    "fullDescription": "Nature Valley Oats 'n Honey Crunchy Granola Bars in a 12-bar retail package for breakfasts, lunchboxes and snacks on the go.",
    "keyFeatures": [
      "12 individually wrapped bars",
      "Oats and honey flavor",
      "Useful for breakfast and snacks"
    ],
    "storageInstructions": "Store in a cool, dry place.",
    "preparationInstructions": null,
    "weight": 0.9,
    "shippingWeight": 1.1,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-001",
      "wbg-017"
    ],
    "synonyms": [
      "granola",
      "granola bars",
      "nature valley",
      "bars",
      "honey"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/nature-valley-oats-honey-12-bars/main.webp",
        "alt": "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/nature-valley-oats-honey-12-bars/angle.webp",
        "alt": "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars | WB Groceries",
    "seoDescription": "Crunchy oat-and-honey granola bars in individually packaged portions."
  },
  {
    "id": "wbg-005",
    "sku": "WBG-COF-001",
    "slug": "folgers-classic-roast-ground-coffee-25-9oz",
    "brand": "Folgers",
    "manufacturer": "The Folgers Coffee Company",
    "title": "Folgers Classic Roast Ground Coffee, 25.9 oz",
    "subtitle": "Medium roast ground coffee",
    "category": "coffee-tea",
    "price": 12.99,
    "packageSize": "25.9 oz",
    "packCount": 1,
    "unitPrice": "$0.50 / oz",
    "shortDescription": "Medium-roast ground coffee for familiar everyday brewing.",
    "fullDescription": "Folgers Classic Roast Ground Coffee in a 25.9 oz container for everyday brewing. Exact package size is listed so you can plan pantry restocking with confidence.",
    "keyFeatures": [
      "Net weight 25.9 oz",
      "Classic medium roast",
      "Ground coffee for drip brewing"
    ],
    "storageInstructions": "Store tightly sealed in a cool, dry place.",
    "preparationInstructions": "Brew according to your preferred coffee maker directions and package guidance.",
    "weight": 1.7,
    "shippingWeight": 2,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-006",
      "wbg-002"
    ],
    "synonyms": [
      "coffee",
      "folgers",
      "ground coffee",
      "roast"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": false,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/folgers-classic-roast-ground-coffee-25-9oz/main.webp",
        "alt": "Folgers Classic Roast Ground Coffee, 25.9 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/folgers-classic-roast-ground-coffee-25-9oz/angle.webp",
        "alt": "Folgers Classic Roast Ground Coffee, 25.9 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Folgers Classic Roast Ground Coffee, 25.9 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Folgers Classic Roast Ground Coffee, 25.9 oz | WB Groceries",
    "seoDescription": "Medium-roast ground coffee for familiar everyday brewing."
  },
  {
    "id": "wbg-006",
    "sku": "WBG-TEA-001",
    "slug": "lipton-black-tea-bags-100-count",
    "brand": "Lipton",
    "manufacturer": "Unilever",
    "title": "Lipton Black Tea Bags, 100 Count",
    "subtitle": "Classic black tea",
    "category": "coffee-tea",
    "price": 7.49,
    "packageSize": "100 Count",
    "packCount": 100,
    "unitPrice": "$0.07 / bag",
    "shortDescription": "Classic black tea bags for hot tea or iced tea.",
    "fullDescription": "Lipton Black Tea Bags in a 100-count package for hot or iced tea. A straightforward pantry staple for everyday beverage restocking.",
    "keyFeatures": [
      "100 tea bags",
      "Classic black tea",
      "Suitable for hot or iced tea"
    ],
    "storageInstructions": "Store in a cool, dry place away from strong odors.",
    "preparationInstructions": "Steep in hot water according to package directions. Chill for iced tea as preferred.",
    "weight": 0.7,
    "shippingWeight": 0.9,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-005"
    ],
    "synonyms": [
      "tea",
      "lipton",
      "black tea",
      "tea bags"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/lipton-black-tea-bags-100-count/main.webp",
        "alt": "Lipton Black Tea Bags, 100 Count product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/lipton-black-tea-bags-100-count/angle.webp",
        "alt": "Lipton Black Tea Bags, 100 Count alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Lipton Black Tea Bags, 100 Count product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Lipton Black Tea Bags, 100 Count | WB Groceries",
    "seoDescription": "Classic black tea bags for hot tea or iced tea."
  },
  {
    "id": "wbg-007",
    "sku": "WBG-PAN-001",
    "slug": "barilla-spaghetti-16oz-two-pack",
    "brand": "Barilla",
    "manufacturer": "Barilla",
    "title": "Barilla Spaghetti Pasta, 16 oz, Two-Pack",
    "subtitle": "Two 16 oz spaghetti boxes",
    "category": "pasta-pantry",
    "price": 5.49,
    "packageSize": "16 oz each (2-pack)",
    "packCount": 2,
    "unitPrice": "$0.17 / oz",
    "shortDescription": "A convenient two-pack of classic spaghetti for pantry restocking.",
    "fullDescription": "Barilla Spaghetti Pasta sold as a two-pack of 16 oz boxes (32 oz total). Ideal for stocking the pantry with a familiar pasta staple for simple meals.",
    "keyFeatures": [
      "Two 16 oz boxes",
      "Total net weight 32 oz",
      "Classic spaghetti shape"
    ],
    "storageInstructions": "Store in a cool, dry place.",
    "preparationInstructions": "Cook pasta in boiling water according to package directions.",
    "weight": 2.1,
    "shippingWeight": 2.4,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-008",
      "wbg-009"
    ],
    "synonyms": [
      "pasta",
      "spaghetti",
      "barilla",
      "noodles"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/barilla-spaghetti-16oz-two-pack/main.webp",
        "alt": "Barilla Spaghetti Pasta, 16 oz, Two-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/barilla-spaghetti-16oz-two-pack/angle.webp",
        "alt": "Barilla Spaghetti Pasta, 16 oz, Two-Pack alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Barilla Spaghetti Pasta, 16 oz, Two-Pack product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Barilla Spaghetti Pasta, 16 oz, Two-Pack | WB Groceries",
    "seoDescription": "A convenient two-pack of classic spaghetti for pantry restocking."
  },
  {
    "id": "wbg-008",
    "sku": "WBG-PAN-002",
    "slug": "prego-traditional-italian-sauce-24oz",
    "brand": "Prego",
    "manufacturer": "Campbell Soup Company",
    "title": "Prego Traditional Italian Sauce, 24 oz",
    "subtitle": "Tomato-based pasta sauce",
    "category": "pasta-pantry",
    "price": 5.49,
    "packageSize": "24 oz",
    "packCount": 1,
    "unitPrice": "$0.23 / oz",
    "shortDescription": "A classic tomato-based pasta sauce for spaghetti and simple family meals.",
    "fullDescription": "Prego Traditional Italian Sauce in a 24 oz container for spaghetti nights and simple pasta meals. Pair with pantry pasta for an easy weeknight dinner.",
    "keyFeatures": [
      "Net weight 24 oz",
      "Traditional tomato-based sauce",
      "Pairs well with spaghetti"
    ],
    "storageInstructions": "Store unopened jars in a cool, dry place. Refrigerate after opening according to package directions.",
    "preparationInstructions": "Heat and serve with cooked pasta according to package directions.",
    "weight": 1.7,
    "shippingWeight": 2,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-007",
      "wbg-009"
    ],
    "synonyms": [
      "sauce",
      "pasta sauce",
      "prego",
      "tomato sauce"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/prego-traditional-italian-sauce-24oz/main.webp",
        "alt": "Prego Traditional Italian Sauce, 24 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/prego-traditional-italian-sauce-24oz/angle.webp",
        "alt": "Prego Traditional Italian Sauce, 24 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Prego Traditional Italian Sauce, 24 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Prego Traditional Italian Sauce, 24 oz | WB Groceries",
    "seoDescription": "A classic tomato-based pasta sauce for spaghetti and simple family meals."
  },
  {
    "id": "wbg-009",
    "sku": "WBG-PAN-003",
    "slug": "kraft-original-macaroni-cheese-five-pack",
    "brand": "Kraft",
    "manufacturer": "Kraft Heinz",
    "title": "Kraft Original Macaroni and Cheese Dinner, Five-Pack",
    "subtitle": "Five-box pantry pack",
    "category": "pasta-pantry",
    "price": 7.99,
    "packageSize": "5 Boxes",
    "packCount": 5,
    "unitPrice": "$1.60 / box",
    "shortDescription": "A five-box pantry pack of classic macaroni and cheese dinner.",
    "fullDescription": "Kraft Original Macaroni and Cheese Dinner in a five-pack for convenient pantry restocking. Each listing shows the exact pack count included with the order.",
    "keyFeatures": [
      "Five dinner boxes",
      "Classic macaroni and cheese",
      "Pantry-ready multipack"
    ],
    "storageInstructions": "Store in a cool, dry place.",
    "preparationInstructions": "Prepare each box according to the package cooking directions.",
    "weight": 2,
    "shippingWeight": 2.3,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-007",
      "wbg-008"
    ],
    "synonyms": [
      "mac and cheese",
      "macaroni",
      "kraft",
      "pasta"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/kraft-original-macaroni-cheese-five-pack/main.webp",
        "alt": "Kraft Original Macaroni and Cheese Dinner, Five-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/kraft-original-macaroni-cheese-five-pack/angle.webp",
        "alt": "Kraft Original Macaroni and Cheese Dinner, Five-Pack alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Kraft Original Macaroni and Cheese Dinner, Five-Pack product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Kraft Original Macaroni and Cheese Dinner, Five-Pack | WB Groceries",
    "seoDescription": "A five-box pantry pack of classic macaroni and cheese dinner."
  },
  {
    "id": "wbg-010",
    "sku": "WBG-CON-001",
    "slug": "jif-creamy-peanut-butter-16oz",
    "brand": "Jif",
    "manufacturer": "The J.M. Smucker Company",
    "title": "Jif Creamy Peanut Butter, 16 oz",
    "subtitle": "Smooth creamy peanut butter",
    "category": "condiments-spreads",
    "price": 5.99,
    "packageSize": "16 oz",
    "packCount": 1,
    "unitPrice": "$0.37 / oz",
    "shortDescription": "Smooth creamy peanut butter for sandwiches, breakfast and snacks.",
    "fullDescription": "Jif Creamy Peanut Butter in a 16 oz jar for sandwiches, toast and recipes. A familiar spread for everyday grocery restocking.",
    "keyFeatures": [
      "Net weight 16 oz",
      "Creamy texture",
      "Useful for sandwiches and snacks"
    ],
    "storageInstructions": "Store in a cool, dry place. Stir if needed according to package guidance.",
    "preparationInstructions": null,
    "weight": 1.1,
    "shippingWeight": 1.3,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-011",
      "wbg-017"
    ],
    "synonyms": [
      "peanut butter",
      "jif",
      "spread",
      "pb"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/jif-creamy-peanut-butter-16oz/main.webp",
        "alt": "Jif Creamy Peanut Butter, 16 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/jif-creamy-peanut-butter-16oz/angle.webp",
        "alt": "Jif Creamy Peanut Butter, 16 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Jif Creamy Peanut Butter, 16 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Jif Creamy Peanut Butter, 16 oz | WB Groceries",
    "seoDescription": "Smooth creamy peanut butter for sandwiches, breakfast and snacks."
  },
  {
    "id": "wbg-011",
    "sku": "WBG-CON-002",
    "slug": "smuckers-strawberry-preserves-18oz",
    "brand": "Smucker's",
    "manufacturer": "The J.M. Smucker Company",
    "title": "Smucker's Strawberry Preserves, 18 oz",
    "subtitle": "Strawberry preserves",
    "category": "condiments-spreads",
    "price": 5.99,
    "packageSize": "18 oz",
    "packCount": 1,
    "unitPrice": "$0.33 / oz",
    "shortDescription": "Sweet strawberry preserves for toast, sandwiches and baking.",
    "fullDescription": "Smucker's Strawberry Preserves in an 18 oz jar for toast, sandwiches and simple baking. Pair with peanut butter for a classic pantry combination.",
    "keyFeatures": [
      "Net weight 18 oz",
      "Strawberry preserves",
      "Jar packaging for pantry storage"
    ],
    "storageInstructions": "Store unopened jars in a cool, dry place. Refrigerate after opening according to package directions.",
    "preparationInstructions": null,
    "weight": 1.3,
    "shippingWeight": 1.5,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-010"
    ],
    "synonyms": [
      "jam",
      "preserves",
      "strawberry",
      "smuckers",
      "jelly"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/smuckers-strawberry-preserves-18oz/main.webp",
        "alt": "Smucker's Strawberry Preserves, 18 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/smuckers-strawberry-preserves-18oz/angle.webp",
        "alt": "Smucker's Strawberry Preserves, 18 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Smucker's Strawberry Preserves, 18 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Smucker's Strawberry Preserves, 18 oz | WB Groceries",
    "seoDescription": "Sweet strawberry preserves for toast, sandwiches and baking."
  },
  {
    "id": "wbg-012",
    "sku": "WBG-CON-003",
    "slug": "heinz-tomato-ketchup-32oz",
    "brand": "Heinz",
    "manufacturer": "Kraft Heinz",
    "title": "Heinz Tomato Ketchup, 32 oz",
    "subtitle": "Family-sized squeeze bottle",
    "category": "condiments-spreads",
    "price": 5.99,
    "packageSize": "32 oz",
    "packCount": 1,
    "unitPrice": "$0.19 / oz",
    "shortDescription": "Classic tomato ketchup in a family-sized squeeze bottle.",
    "fullDescription": "Heinz Tomato Ketchup in a 32 oz squeeze bottle for everyday meals. Clear package sizing helps you choose the right bottle for your household.",
    "keyFeatures": [
      "Net weight 32 oz",
      "Squeeze bottle",
      "Classic tomato ketchup"
    ],
    "storageInstructions": "Refrigerate after opening according to package directions.",
    "preparationInstructions": null,
    "weight": 2.2,
    "shippingWeight": 2.5,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-013"
    ],
    "synonyms": [
      "ketchup",
      "heinz",
      "catsup",
      "condiment"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/heinz-tomato-ketchup-32oz/main.webp",
        "alt": "Heinz Tomato Ketchup, 32 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/heinz-tomato-ketchup-32oz/angle.webp",
        "alt": "Heinz Tomato Ketchup, 32 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Heinz Tomato Ketchup, 32 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Heinz Tomato Ketchup, 32 oz | WB Groceries",
    "seoDescription": "Classic tomato ketchup in a family-sized squeeze bottle."
  },
  {
    "id": "wbg-013",
    "sku": "WBG-CON-004",
    "slug": "hellmanns-real-mayonnaise-30oz",
    "brand": "Hellmann's",
    "manufacturer": "Unilever",
    "title": "Hellmann's Real Mayonnaise, 30 oz",
    "subtitle": "Creamy mayonnaise",
    "category": "condiments-spreads",
    "price": 7.99,
    "packageSize": "30 oz",
    "packCount": 1,
    "unitPrice": "$0.27 / oz",
    "shortDescription": "Creamy mayonnaise for sandwiches, salads, dips and recipes.",
    "fullDescription": "Hellmann's Real Mayonnaise in a 30 oz jar for sandwiches, salads and recipes. Review the package label for the most current product details.",
    "keyFeatures": [
      "Net weight 30 oz",
      "Real mayonnaise",
      "Jar size suited for household use"
    ],
    "storageInstructions": "Refrigerate after opening according to package directions.",
    "preparationInstructions": null,
    "weight": 2,
    "shippingWeight": 2.3,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-012"
    ],
    "synonyms": [
      "mayo",
      "mayonnaise",
      "hellmanns",
      "condiment"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/hellmanns-real-mayonnaise-30oz/main.webp",
        "alt": "Hellmann's Real Mayonnaise, 30 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/hellmanns-real-mayonnaise-30oz/angle.webp",
        "alt": "Hellmann's Real Mayonnaise, 30 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Hellmann's Real Mayonnaise, 30 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Hellmann's Real Mayonnaise, 30 oz | WB Groceries",
    "seoDescription": "Creamy mayonnaise for sandwiches, salads, dips and recipes."
  },
  {
    "id": "wbg-014",
    "sku": "WBG-CAN-001",
    "slug": "bushs-original-baked-beans-28oz",
    "brand": "Bush's",
    "manufacturer": "Bush Brothers & Company",
    "title": "Bush's Original Baked Beans, 28 oz",
    "subtitle": "Seasoned baked beans",
    "category": "canned-goods",
    "price": 5.49,
    "packageSize": "28 oz",
    "packCount": 1,
    "unitPrice": "$0.20 / oz",
    "shortDescription": "Seasoned baked beans in a convenient family-sized can.",
    "fullDescription": "Bush's Original Baked Beans in a 28 oz can for side dishes and simple meals. A shelf-stable canned staple for pantry readiness.",
    "keyFeatures": [
      "Net weight 28 oz",
      "Original seasoned baked beans",
      "Family-sized can"
    ],
    "storageInstructions": "Store unopened cans in a cool, dry place. Refrigerate leftovers according to package directions.",
    "preparationInstructions": "Heat thoroughly according to package directions before serving.",
    "weight": 1.9,
    "shippingWeight": 2.1,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-015",
      "wbg-016"
    ],
    "synonyms": [
      "baked beans",
      "beans",
      "bushs",
      "canned"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/bushs-original-baked-beans-28oz/main.webp",
        "alt": "Bush's Original Baked Beans, 28 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/bushs-original-baked-beans-28oz/angle.webp",
        "alt": "Bush's Original Baked Beans, 28 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Bush's Original Baked Beans, 28 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Bush's Original Baked Beans, 28 oz | WB Groceries",
    "seoDescription": "Seasoned baked beans in a convenient family-sized can."
  },
  {
    "id": "wbg-015",
    "sku": "WBG-CAN-002",
    "slug": "del-monte-whole-kernel-corn-four-pack",
    "brand": "Del Monte",
    "manufacturer": "Del Monte Foods",
    "title": "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack",
    "subtitle": "Four-pack canned corn",
    "category": "canned-goods",
    "price": 6.99,
    "packageSize": "15.25 oz each (4-pack)",
    "packCount": 4,
    "unitPrice": "$1.75 / can",
    "shortDescription": "A pantry-ready four-pack of whole-kernel corn.",
    "fullDescription": "Del Monte Whole Kernel Corn sold as a four-pack of 15.25 oz cans. The pack count is listed clearly so you know exactly how many cans are included.",
    "keyFeatures": [
      "Four 15.25 oz cans",
      "Whole kernel corn",
      "Pantry multipack"
    ],
    "storageInstructions": "Store unopened cans in a cool, dry place.",
    "preparationInstructions": "Heat or serve according to package directions.",
    "weight": 4.2,
    "shippingWeight": 4.6,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-014",
      "wbg-016"
    ],
    "synonyms": [
      "corn",
      "canned corn",
      "del monte",
      "vegetables"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/del-monte-whole-kernel-corn-four-pack/main.webp",
        "alt": "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/del-monte-whole-kernel-corn-four-pack/angle.webp",
        "alt": "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack | WB Groceries",
    "seoDescription": "A pantry-ready four-pack of whole-kernel corn."
  },
  {
    "id": "wbg-016",
    "sku": "WBG-CAN-003",
    "slug": "starkist-chunk-light-tuna-four-pack",
    "brand": "StarKist",
    "manufacturer": "StarKist Co.",
    "title": "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack",
    "subtitle": "Four-pack tuna in water",
    "category": "canned-goods",
    "price": 7.49,
    "packageSize": "5 oz each (4-pack)",
    "packCount": 4,
    "unitPrice": "$1.87 / can",
    "shortDescription": "A convenient four-pack of chunk light tuna packed in water.",
    "fullDescription": "StarKist Chunk Light Tuna in Water as a four-pack of 5 oz cans for sandwiches, salads and quick meals. Exact can count is shown on the product listing.",
    "keyFeatures": [
      "Four 5 oz cans",
      "Chunk light tuna in water",
      "Convenient multipack"
    ],
    "storageInstructions": "Store unopened cans in a cool, dry place. Refrigerate after opening according to package directions.",
    "preparationInstructions": "Drain and use according to package directions.",
    "weight": 1.6,
    "shippingWeight": 1.9,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-014",
      "wbg-015"
    ],
    "synonyms": [
      "tuna",
      "starkist",
      "canned tuna",
      "fish"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/starkist-chunk-light-tuna-four-pack/main.webp",
        "alt": "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/starkist-chunk-light-tuna-four-pack/angle.webp",
        "alt": "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack | WB Groceries",
    "seoDescription": "A convenient four-pack of chunk light tuna packed in water."
  },
  {
    "id": "wbg-017",
    "sku": "WBG-SNK-001",
    "slug": "oreo-original-cookies-14-3oz",
    "brand": "Oreo",
    "manufacturer": "Mondelēz International",
    "title": "Oreo Original Chocolate Sandwich Cookies, 14.3 oz",
    "subtitle": "Chocolate sandwich cookies",
    "category": "snacks",
    "price": 5.49,
    "packageSize": "14.3 oz",
    "packCount": 1,
    "unitPrice": "$0.38 / oz",
    "shortDescription": "Classic chocolate sandwich cookies with creme filling.",
    "fullDescription": "Oreo Original Chocolate Sandwich Cookies in a 14.3 oz package for snacks and dessert moments. A familiar cookie for household snack restocking.",
    "keyFeatures": [
      "Net weight 14.3 oz",
      "Original chocolate sandwich cookies",
      "Creme filling"
    ],
    "storageInstructions": "Store in a cool, dry place.",
    "preparationInstructions": null,
    "weight": 1,
    "shippingWeight": 1.2,
    "featured": true,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-021",
      "wbg-018"
    ],
    "synonyms": [
      "cookies",
      "oreo",
      "biscuits",
      "snacks"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/oreo-original-cookies-14-3oz/main.webp",
        "alt": "Oreo Original Chocolate Sandwich Cookies, 14.3 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/oreo-original-cookies-14-3oz/angle.webp",
        "alt": "Oreo Original Chocolate Sandwich Cookies, 14.3 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Oreo Original Chocolate Sandwich Cookies, 14.3 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "active": true,
    "seoTitle": "Oreo Original Chocolate Sandwich Cookies, 14.3 oz | WB Groceries",
    "seoDescription": "Classic chocolate sandwich cookies with creme filling."
  },
  {
    "id": "wbg-018",
    "sku": "WBG-SNK-002",
    "slug": "ritz-original-crackers-13-7oz",
    "brand": "Ritz",
    "manufacturer": "Mondelēz International",
    "title": "Ritz Original Crackers, 13.7 oz",
    "subtitle": "Light snack crackers",
    "category": "snacks",
    "price": 5.49,
    "packageSize": "13.7 oz",
    "packCount": 1,
    "unitPrice": "$0.40 / oz",
    "shortDescription": "Light crackers for snacks, dips and simple lunch plates.",
    "fullDescription": "Ritz Original Crackers in a 13.7 oz package for snacks, dips and lunch plates. Clear sizing helps you restock crackers with confidence.",
    "keyFeatures": [
      "Net weight 13.7 oz",
      "Original Ritz crackers",
      "Snack and lunch staple"
    ],
    "storageInstructions": "Store in a cool, dry place. Reseal after opening.",
    "preparationInstructions": null,
    "weight": 0.95,
    "shippingWeight": 1.15,
    "weeklyEssential": true,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-017",
      "wbg-019"
    ],
    "synonyms": [
      "crackers",
      "ritz",
      "snacks"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/ritz-original-crackers-13-7oz/main.webp",
        "alt": "Ritz Original Crackers, 13.7 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/ritz-original-crackers-13-7oz/angle.webp",
        "alt": "Ritz Original Crackers, 13.7 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Ritz Original Crackers, 13.7 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Ritz Original Crackers, 13.7 oz | WB Groceries",
    "seoDescription": "Light crackers for snacks, dips and simple lunch plates."
  },
  {
    "id": "wbg-019",
    "sku": "WBG-SNK-003",
    "slug": "lays-classic-potato-chips-8oz",
    "brand": "Lay's",
    "manufacturer": "Frito-Lay / PepsiCo",
    "title": "Lay's Classic Potato Chips, 8 oz",
    "subtitle": "Salted potato chips",
    "category": "snacks",
    "price": 5.99,
    "packageSize": "8 oz",
    "packCount": 1,
    "unitPrice": "$0.75 / oz",
    "shortDescription": "Classic salted potato chips in a shareable bag.",
    "fullDescription": "Lay's Classic Potato Chips in an 8 oz bag for sharing and everyday snacking. Exact bag size is listed on the product page.",
    "keyFeatures": [
      "Net weight 8 oz",
      "Classic salted potato chips",
      "Shareable bag size"
    ],
    "storageInstructions": "Store in a cool, dry place. Reseal after opening.",
    "preparationInstructions": null,
    "weight": 0.55,
    "shippingWeight": 0.75,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-021",
      "wbg-020"
    ],
    "synonyms": [
      "chips",
      "potato chips",
      "lays",
      "crisps"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/lays-classic-potato-chips-8oz/main.webp",
        "alt": "Lay's Classic Potato Chips, 8 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/lays-classic-potato-chips-8oz/angle.webp",
        "alt": "Lay's Classic Potato Chips, 8 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Lay's Classic Potato Chips, 8 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Lay's Classic Potato Chips, 8 oz | WB Groceries",
    "seoDescription": "Classic salted potato chips in a shareable bag."
  },
  {
    "id": "wbg-020",
    "sku": "WBG-SNK-004",
    "slug": "doritos-nacho-cheese-9-25oz",
    "brand": "Doritos",
    "manufacturer": "Frito-Lay / PepsiCo",
    "title": "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz",
    "subtitle": "Nacho cheese tortilla chips",
    "category": "snacks",
    "price": 5.99,
    "packageSize": "9.25 oz",
    "packCount": 1,
    "unitPrice": "$0.65 / oz",
    "shortDescription": "Crunchy tortilla chips with nacho-cheese seasoning.",
    "fullDescription": "Doritos Nacho Cheese Flavored Tortilla Chips in a 9.25 oz bag. The listing matches the exact flavor and package size offered in the store.",
    "keyFeatures": [
      "Net weight 9.25 oz",
      "Nacho cheese flavor",
      "Tortilla chips"
    ],
    "storageInstructions": "Store in a cool, dry place. Reseal after opening.",
    "preparationInstructions": null,
    "weight": 0.65,
    "shippingWeight": 0.85,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-019",
      "wbg-021"
    ],
    "synonyms": [
      "doritos",
      "chips",
      "nacho",
      "tortilla chips"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/doritos-nacho-cheese-9-25oz/main.webp",
        "alt": "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/doritos-nacho-cheese-9-25oz/angle.webp",
        "alt": "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz | WB Groceries",
    "seoDescription": "Crunchy tortilla chips with nacho-cheese seasoning."
  },
  {
    "id": "wbg-021",
    "sku": "WBG-BEV-001",
    "slug": "coca-cola-original-12-pack",
    "brand": "Coca-Cola",
    "manufacturer": "The Coca-Cola Company",
    "title": "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack",
    "subtitle": "12-pack soft drink cans",
    "category": "beverages",
    "price": 9.99,
    "packageSize": "12 fl oz cans (12-pack)",
    "packCount": 12,
    "unitPrice": "$0.83 / can",
    "shortDescription": "A 12-pack of classic Coca-Cola in 12 fl oz cans.",
    "fullDescription": "Coca-Cola Original Taste sold as a 12-pack of 12 fl oz cans. Exact can count and can size are listed for accurate ordering and shipping weight planning.",
    "keyFeatures": [
      "Exactly 12 cans",
      "12 fl oz each",
      "Original Taste Coca-Cola"
    ],
    "storageInstructions": "Store in a cool place. Refrigerate before serving if preferred.",
    "preparationInstructions": null,
    "weight": 10.5,
    "shippingWeight": 11.5,
    "maximumOrderQuantity": 6,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-022",
      "wbg-017"
    ],
    "synonyms": [
      "coke",
      "soda",
      "soft drink",
      "cola",
      "coca cola"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/coca-cola-original-12-pack/main.webp",
        "alt": "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/coca-cola-original-12-pack/angle.webp",
        "alt": "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack | WB Groceries",
    "seoDescription": "A 12-pack of classic Coca-Cola in 12 fl oz cans."
  },
  {
    "id": "wbg-022",
    "sku": "WBG-BEV-002",
    "slug": "gatorade-variety-pack-12-count",
    "brand": "Gatorade",
    "manufacturer": "PepsiCo",
    "title": "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack",
    "subtitle": "12-bottle variety pack",
    "category": "beverages",
    "price": 10.99,
    "packageSize": "12 fl oz bottles (12-pack)",
    "packCount": 12,
    "unitPrice": "$0.92 / bottle",
    "shortDescription": "A mixed-flavor sports-drink pack for refrigerator and pantry restocking.",
    "fullDescription": "Gatorade Thirst Quencher Variety Pack with 12 bottles at 12 fl oz each. Confirm included flavors on the physical package, as variety assortments can change by production run.",
    "keyFeatures": [
      "Exactly 12 bottles",
      "12 fl oz each",
      "Mixed-flavor variety pack"
    ],
    "storageInstructions": "Store in a cool place. Refrigerate before serving if preferred.",
    "preparationInstructions": null,
    "weight": 11,
    "shippingWeight": 12,
    "maximumOrderQuantity": 6,
    "foodProduct": true,
    "relatedProductIds": [
      "wbg-021"
    ],
    "synonyms": [
      "gatorade",
      "sports drink",
      "electrolyte",
      "beverage"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": false,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/gatorade-variety-pack-12-count/main.webp",
        "alt": "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/gatorade-variety-pack-12-count/angle.webp",
        "alt": "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack | WB Groceries",
    "seoDescription": "A mixed-flavor sports-drink pack for refrigerator and pantry restocking."
  },
  {
    "id": "wbg-023",
    "sku": "WBG-HOU-001",
    "slug": "tide-simply-clean-fresh-84oz",
    "brand": "Tide",
    "manufacturer": "Procter & Gamble",
    "title": "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz",
    "subtitle": "Liquid laundry detergent",
    "category": "household",
    "price": 11.99,
    "packageSize": "84 fl oz",
    "packCount": 1,
    "unitPrice": "$0.14 / fl oz",
    "shortDescription": "Liquid laundry detergent for regular household washing.",
    "fullDescription": "Tide Simply Clean and Fresh Liquid Laundry Detergent in an 84 fl oz bottle for regular household laundry. Review the bottle label for scent details, load guidance and safety instructions.",
    "keyFeatures": [
      "84 fl oz bottle",
      "Liquid laundry detergent",
      "Household laundry essential"
    ],
    "storageInstructions": "Store upright in a cool place. Keep out of reach of children and pets. Follow all safety instructions on the package.",
    "preparationInstructions": "Use according to the dosage and care instructions printed on the package.",
    "weight": 6,
    "shippingWeight": 6.5,
    "maximumOrderQuantity": 4,
    "foodProduct": false,
    "relatedProductIds": [
      "wbg-024",
      "wbg-025"
    ],
    "synonyms": [
      "laundry",
      "detergent",
      "tide",
      "cleaning",
      "wash"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": false,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/tide-simply-clean-fresh-84oz/main.webp",
        "alt": "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/tide-simply-clean-fresh-84oz/angle.webp",
        "alt": "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz | WB Groceries",
    "seoDescription": "Liquid laundry detergent for regular household washing."
  },
  {
    "id": "wbg-024",
    "sku": "WBG-HOU-002",
    "slug": "dawn-ultra-dishwashing-liquid-18oz",
    "brand": "Dawn",
    "manufacturer": "Procter & Gamble",
    "title": "Dawn Ultra Dishwashing Liquid, 18 fl oz",
    "subtitle": "Concentrated dish soap",
    "category": "household",
    "price": 5.49,
    "packageSize": "18 fl oz",
    "packCount": 1,
    "unitPrice": "$0.31 / fl oz",
    "shortDescription": "Concentrated liquid dish soap for everyday hand-washing of dishes.",
    "fullDescription": "Dawn Ultra Dishwashing Liquid in an 18 fl oz bottle for everyday hand dishwashing. Follow the package directions for use and safety.",
    "keyFeatures": [
      "18 fl oz bottle",
      "Concentrated dishwashing liquid",
      "Kitchen dish-care essential"
    ],
    "storageInstructions": "Store upright. Keep out of reach of children. Follow package safety instructions.",
    "preparationInstructions": "Use a small amount with water according to package directions.",
    "weight": 1.3,
    "shippingWeight": 1.5,
    "weeklyEssential": true,
    "foodProduct": false,
    "relatedProductIds": [
      "wbg-023",
      "wbg-025"
    ],
    "synonyms": [
      "dish soap",
      "dawn",
      "dishwashing",
      "cleaning",
      "dishes"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": true,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/dawn-ultra-dishwashing-liquid-18oz/main.webp",
        "alt": "Dawn Ultra Dishwashing Liquid, 18 fl oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/dawn-ultra-dishwashing-liquid-18oz/angle.webp",
        "alt": "Dawn Ultra Dishwashing Liquid, 18 fl oz alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Dawn Ultra Dishwashing Liquid, 18 fl oz product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "active": true,
    "seoTitle": "Dawn Ultra Dishwashing Liquid, 18 fl oz | WB Groceries",
    "seoDescription": "Concentrated liquid dish soap for everyday hand-washing of dishes."
  },
  {
    "id": "wbg-025",
    "sku": "WBG-HOU-003",
    "slug": "bounty-essentials-six-double-rolls",
    "brand": "Bounty",
    "manufacturer": "Procter & Gamble",
    "title": "Bounty Essentials Paper Towels, Six Double Rolls",
    "subtitle": "Six double-roll multipack",
    "category": "household",
    "price": 12.99,
    "packageSize": "6 Double Rolls",
    "packCount": 6,
    "unitPrice": "$2.17 / roll",
    "shortDescription": "A six-double-roll multipack of everyday paper towels.",
    "fullDescription": "Bounty Essentials Paper Towels in a six-double-roll multipack for everyday kitchen cleanups. Exact roll count is listed; sheet counts can vary by package revision and should be confirmed on the physical package.",
    "keyFeatures": [
      "Six double rolls",
      "Everyday paper towels",
      "Household paper product"
    ],
    "storageInstructions": "Store in a clean, dry place.",
    "preparationInstructions": null,
    "weight": 3.5,
    "shippingWeight": 4,
    "maximumOrderQuantity": 4,
    "foodProduct": false,
    "relatedProductIds": [
      "wbg-024",
      "wbg-026"
    ],
    "synonyms": [
      "paper towels",
      "bounty",
      "paper",
      "kitchen towels"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": false,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/bounty-essentials-six-double-rolls/main.webp",
        "alt": "Bounty Essentials Paper Towels, Six Double Rolls product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/bounty-essentials-six-double-rolls/angle.webp",
        "alt": "Bounty Essentials Paper Towels, Six Double Rolls alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Bounty Essentials Paper Towels, Six Double Rolls product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Bounty Essentials Paper Towels, Six Double Rolls | WB Groceries",
    "seoDescription": "A six-double-roll multipack of everyday paper towels."
  },
  {
    "id": "wbg-026",
    "sku": "WBG-HOU-004",
    "slug": "glad-forceflexplus-13-gallon-40-count",
    "brand": "Glad",
    "manufacturer": "The Clorox Company",
    "title": "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count",
    "subtitle": "40 tall kitchen bags",
    "category": "household",
    "price": 10.99,
    "packageSize": "13 Gallon, 40 Count",
    "packCount": 40,
    "unitPrice": "$0.27 / bag",
    "shortDescription": "Tall-kitchen trash bags designed for standard 13-gallon kitchen bins.",
    "fullDescription": "Glad ForceFlexPlus Tall Kitchen Trash Bags in a 40-count package sized for 13-gallon kitchen bins. Confirm scent or unscented variation on the physical package before use if scent sensitivity matters.",
    "keyFeatures": [
      "Exactly 40 bags",
      "13-gallon tall kitchen size",
      "ForceFlexPlus construction"
    ],
    "storageInstructions": "Store in a clean, dry place.",
    "preparationInstructions": null,
    "weight": 2.2,
    "shippingWeight": 2.5,
    "foodProduct": false,
    "relatedProductIds": [
      "wbg-025",
      "wbg-023"
    ],
    "synonyms": [
      "trash bags",
      "garbage bags",
      "glad",
      "kitchen bags"
    ],
    "upc": null,
    "currency": "USD",
    "compareAtPrice": null,
    "underTen": false,
    "secondaryCategories": [],
    "ingredients": null,
    "nutritionInformation": null,
    "allergenInformation": null,
    "images": [
      {
        "src": "/products/glad-forceflexplus-13-gallon-40-count/main.webp",
        "alt": "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/glad-forceflexplus-13-gallon-40-count/angle.webp",
        "alt": "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count alternate package view",
        "type": "angle",
        "replacementRequired": true
      }
    ],
    "imageAltText": "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count product package",
    "imageSource": "Development placeholder — exact authorized manufacturer or distributor packshot required before launch",
    "imageLicense": "Replacement required before production launch",
    "stockStatus": "in_stock",
    "maximumOrderQuantity": 10,
    "featured": false,
    "weeklyEssential": false,
    "active": true,
    "seoTitle": "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count | WB Groceries",
    "seoDescription": "Tall-kitchen trash bags designed for standard 13-gallon kitchen bins."
  },
{
  "id": "wbg-027",
  "sku": "WBG-BRK-027",
  "upc": null,
  "slug": "honey-nut-cheerios-cereal-18-8oz",
  "brand": "Cheerios",
  "manufacturer": "General Mills",
  "title": "Honey Nut Cheerios Cereal, 18.8 oz",
  "subtitle": "Sweet honey oat cereal",
  "category": "breakfast",
  "secondaryCategories": [],
  "price": 6.79,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "18.8 oz",
  "packCount": 1,
  "unitPrice": "$0.36 / oz",
  "shortDescription": "Honey-sweetened oat cereal for everyday breakfast bowls.",
  "fullDescription": "Honey Nut Cheerios in an 18.8 oz box for sweet oat cereal mornings. Package size is listed clearly so you know what you are ordering before checkout.",
  "keyFeatures": [
    "Net weight 18.8 oz",
    "Honey-flavored oat cereal",
    "Shelf-stable breakfast staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Serve with milk or as directed on the package.",
  "images": [
    {
      "src": "/products/honey-nut-cheerios-cereal-18-8oz/main.webp",
      "alt": "Honey Nut Cheerios Cereal, 18.8 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/honey-nut-cheerios-cereal-18-8oz/angle.webp",
      "alt": "Honey Nut Cheerios Cereal, 18.8 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Honey Nut Cheerios Cereal, 18.8 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 1.3,
  "shippingWeight": 1.6,
  "featured": true,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "active": true,
  "seoTitle": "Honey Nut Cheerios Cereal, 18.8 oz | WB Groceries",
  "seoDescription": "Honey-sweetened oat cereal for everyday breakfast bowls.",
  "foodProduct": true,
  "synonyms": [
    "cheerios",
    "honey nut",
    "cereal",
    "breakfast"
  ]
},
{
  "id": "wbg-028",
  "sku": "WBG-BRK-028",
  "upc": null,
  "slug": "kelloggs-rice-krispies-12oz",
  "brand": "Kellogg's",
  "manufacturer": "Kellanova",
  "title": "Kellogg's Rice Krispies Cereal, 12 oz",
  "subtitle": "Crispy rice cereal",
  "category": "breakfast",
  "secondaryCategories": [],
  "price": 5.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "12 oz",
  "packCount": 1,
  "unitPrice": "$0.46 / oz",
  "shortDescription": "Crispy rice cereal for breakfast bowls and classic treat recipes.",
  "fullDescription": "Kellogg's Rice Krispies in a 12 oz box for everyday breakfasts and recipes. Package details are shown clearly before you checkout.",
  "keyFeatures": [
    "Net weight 12 oz",
    "Crispy rice cereal",
    "Shelf-stable pantry staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Serve with milk or follow package recipes.",
  "images": [
    {
      "src": "/products/kelloggs-rice-krispies-12oz/main.webp",
      "alt": "Kellogg's Rice Krispies Cereal, 12 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/kelloggs-rice-krispies-12oz/angle.webp",
      "alt": "Kellogg's Rice Krispies Cereal, 12 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Kellogg's Rice Krispies Cereal, 12 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.9,
  "shippingWeight": 1.2,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "active": true,
  "seoTitle": "Kellogg's Rice Krispies Cereal, 12 oz | WB Groceries",
  "seoDescription": "Crispy rice cereal for breakfast bowls and classic treat recipes.",
  "foodProduct": true,
  "synonyms": [
    "rice krispies",
    "kellogg",
    "cereal",
    "breakfast"
  ]
},
{
  "id": "wbg-029",
  "sku": "WBG-BRK-029",
  "upc": null,
  "slug": "quaker-instant-oatmeal-variety-48-count",
  "brand": "Quaker",
  "manufacturer": "The Quaker Oats Company",
  "title": "Quaker Instant Oatmeal Variety Pack, 48 Packets",
  "subtitle": "Assorted instant oatmeal packets",
  "category": "breakfast",
  "secondaryCategories": [],
  "price": 12.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "48 Packets",
  "packCount": 48,
  "unitPrice": "$0.27 / packet",
  "shortDescription": "Assorted instant oatmeal packets for quick weekday breakfasts.",
  "fullDescription": "Quaker Instant Oatmeal variety pack with 48 packets for fast hot breakfasts. Packet count and preparation directions are listed so you know what you are ordering.",
  "keyFeatures": [
    "48 instant oatmeal packets",
    "Variety flavors",
    "Microwave-ready breakfast option"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Prepare each packet with hot water or milk as directed on the package.",
  "images": [
    {
      "src": "/products/quaker-instant-oatmeal-variety-48-count/main.webp",
      "alt": "Quaker Instant Oatmeal Variety Pack, 48 Packets product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/quaker-instant-oatmeal-variety-48-count/angle.webp",
      "alt": "Quaker Instant Oatmeal Variety Pack, 48 Packets alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Quaker Instant Oatmeal Variety Pack, 48 Packets product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 3.2,
  "shippingWeight": 3.6,
  "featured": true,
  "weeklyEssential": true,
  "underTen": false,
  "relatedProductIds": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "active": true,
  "seoTitle": "Quaker Instant Oatmeal Variety Pack, 48 Packets | WB Groceries",
  "seoDescription": "Assorted instant oatmeal packets for quick weekday breakfasts.",
  "foodProduct": true,
  "synonyms": [
    "oatmeal",
    "instant oats",
    "quaker",
    "breakfast"
  ]
},
{
  "id": "wbg-030",
  "sku": "WBG-BRK-030",
  "upc": null,
  "slug": "pop-tarts-frosted-strawberry-8-count",
  "brand": "Pop-Tarts",
  "manufacturer": "Kellanova",
  "title": "Pop-Tarts Frosted Strawberry, 8 Count",
  "subtitle": "Toaster pastry breakfast treats",
  "category": "breakfast",
  "secondaryCategories": [],
  "price": 5.29,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "8 Count",
  "packCount": 8,
  "unitPrice": "$0.66 / pastry",
  "shortDescription": "Frosted strawberry toaster pastries for quick breakfasts and snacks.",
  "fullDescription": "Pop-Tarts Frosted Strawberry in an 8-count box for toaster or microwave preparation. Count and flavor are listed clearly on the product page.",
  "keyFeatures": [
    "8 frosted pastry toaster treats",
    "Strawberry flavor",
    "Shelf-stable breakfast snack"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Toast or microwave according to the package directions.",
  "images": [
    {
      "src": "/products/pop-tarts-frosted-strawberry-8-count/main.webp",
      "alt": "Pop-Tarts Frosted Strawberry, 8 Count product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/pop-tarts-frosted-strawberry-8-count/angle.webp",
      "alt": "Pop-Tarts Frosted Strawberry, 8 Count alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Pop-Tarts Frosted Strawberry, 8 Count product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.9,
  "shippingWeight": 1.1,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "active": true,
  "seoTitle": "Pop-Tarts Frosted Strawberry, 8 Count | WB Groceries",
  "seoDescription": "Frosted strawberry toaster pastries for quick breakfasts and snacks.",
  "foodProduct": true,
  "synonyms": [
    "pop tarts",
    "toaster pastry",
    "strawberry",
    "breakfast"
  ]
},
{
  "id": "wbg-031",
  "sku": "WBG-BRK-031",
  "upc": null,
  "slug": "special-k-original-cereal-12oz",
  "brand": "Special K",
  "manufacturer": "Kellanova",
  "title": "Special K Original Cereal, 12 oz",
  "subtitle": "Light crispy rice cereal",
  "category": "breakfast",
  "secondaryCategories": [],
  "price": 5.79,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "12 oz",
  "packCount": 1,
  "unitPrice": "$0.48 / oz",
  "shortDescription": "Crispy rice cereal for lighter everyday breakfast bowls.",
  "fullDescription": "Special K Original cereal in a 12 oz box. Package size is listed clearly so you can compare options before checkout.",
  "keyFeatures": [
    "Net weight 12 oz",
    "Crispy rice cereal flakes",
    "Shelf-stable breakfast option"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Serve with milk as directed on the package.",
  "images": [
    {
      "src": "/products/special-k-original-cereal-12oz/main.webp",
      "alt": "Special K Original Cereal, 12 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/special-k-original-cereal-12oz/angle.webp",
      "alt": "Special K Original Cereal, 12 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Special K Original Cereal, 12 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.9,
  "shippingWeight": 1.2,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-001",
    "wbg-002",
    "wbg-003"
  ],
  "active": true,
  "seoTitle": "Special K Original Cereal, 12 oz | WB Groceries",
  "seoDescription": "Crispy rice cereal for lighter everyday breakfast bowls.",
  "foodProduct": true,
  "synonyms": [
    "special k",
    "cereal",
    "kellogg",
    "breakfast"
  ]
},
{
  "id": "wbg-032",
  "sku": "WBG-CTE-032",
  "upc": null,
  "slug": "maxwell-house-original-roast-coffee-30-6oz",
  "brand": "Maxwell House",
  "manufacturer": "Kraft Heinz",
  "title": "Maxwell House Original Roast Ground Coffee, 30.6 oz",
  "subtitle": "Classic ground coffee",
  "category": "coffee-tea",
  "secondaryCategories": [],
  "price": 11.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "30.6 oz",
  "packCount": 1,
  "unitPrice": "$0.38 / oz",
  "shortDescription": "Classic original roast ground coffee for everyday brewing.",
  "fullDescription": "Maxwell House Original Roast ground coffee in a 30.6 oz canister for drip or percolator brewing. Package weight is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 30.6 oz",
    "Original roast ground coffee",
    "Shelf-stable pantry staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store sealed in a cool, dry place.",
  "preparationInstructions": "Brew according to your coffee maker directions.",
  "images": [
    {
      "src": "/products/maxwell-house-original-roast-coffee-30-6oz/main.webp",
      "alt": "Maxwell House Original Roast Ground Coffee, 30.6 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/maxwell-house-original-roast-coffee-30-6oz/angle.webp",
      "alt": "Maxwell House Original Roast Ground Coffee, 30.6 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Maxwell House Original Roast Ground Coffee, 30.6 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 2.1,
  "shippingWeight": 2.4,
  "featured": true,
  "weeklyEssential": true,
  "underTen": false,
  "relatedProductIds": [
    "wbg-005",
    "wbg-006",
    "wbg-033"
  ],
  "active": true,
  "seoTitle": "Maxwell House Original Roast Ground Coffee, 30.6 oz | WB Groceries",
  "seoDescription": "Classic original roast ground coffee for everyday brewing.",
  "foodProduct": true,
  "synonyms": [
    "coffee",
    "maxwell house",
    "ground coffee",
    "breakfast"
  ]
},
{
  "id": "wbg-033",
  "sku": "WBG-CTE-033",
  "upc": null,
  "slug": "twinings-english-breakfast-tea-50-count",
  "brand": "Twinings",
  "manufacturer": "Twinings North America",
  "title": "Twinings English Breakfast Tea Bags, 50 Count",
  "subtitle": "Classic black tea bags",
  "category": "coffee-tea",
  "secondaryCategories": [],
  "price": 6.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "50 Count",
  "packCount": 50,
  "unitPrice": "$0.13 / bag",
  "shortDescription": "Classic English breakfast black tea bags for hot or iced tea.",
  "fullDescription": "Twinings English Breakfast tea in a 50-count box. Bag count is listed clearly for everyday hot tea brewing.",
  "keyFeatures": [
    "50 tea bags",
    "English breakfast black tea",
    "Shelf-stable hot drink staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Steep in hot water as directed on the package.",
  "images": [
    {
      "src": "/products/twinings-english-breakfast-tea-50-count/main.webp",
      "alt": "Twinings English Breakfast Tea Bags, 50 Count product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/twinings-english-breakfast-tea-50-count/angle.webp",
      "alt": "Twinings English Breakfast Tea Bags, 50 Count alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Twinings English Breakfast Tea Bags, 50 Count product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.4,
  "shippingWeight": 0.6,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-005",
    "wbg-006",
    "wbg-032"
  ],
  "active": true,
  "seoTitle": "Twinings English Breakfast Tea Bags, 50 Count | WB Groceries",
  "seoDescription": "Classic English breakfast black tea bags for hot or iced tea.",
  "foodProduct": true,
  "synonyms": [
    "tea",
    "twinings",
    "english breakfast",
    "black tea"
  ]
},
{
  "id": "wbg-034",
  "sku": "WBG-CTE-034",
  "upc": null,
  "slug": "swiss-miss-milk-chocolate-cocoas-60-count",
  "brand": "Swiss Miss",
  "manufacturer": "Conagra Brands",
  "title": "Swiss Miss Milk Chocolate Hot Cocoa Mix, 60 Packets",
  "subtitle": "Instant hot cocoa packets",
  "category": "coffee-tea",
  "secondaryCategories": [],
  "price": 13.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "60 Packets",
  "packCount": 60,
  "unitPrice": "$0.23 / packet",
  "shortDescription": "Instant milk chocolate cocoa packets for quick warm drinks.",
  "fullDescription": "Swiss Miss Milk Chocolate hot cocoa mix with 60 packets for easy warm drinks. Packet count is listed clearly before checkout.",
  "keyFeatures": [
    "60 cocoa mix packets",
    "Milk chocolate flavor",
    "Just-add-water convenience"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Mix with hot water as directed on the package.",
  "images": [
    {
      "src": "/products/swiss-miss-milk-chocolate-cocoas-60-count/main.webp",
      "alt": "Swiss Miss Milk Chocolate Hot Cocoa Mix, 60 Packets product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/swiss-miss-milk-chocolate-cocoas-60-count/angle.webp",
      "alt": "Swiss Miss Milk Chocolate Hot Cocoa Mix, 60 Packets alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Swiss Miss Milk Chocolate Hot Cocoa Mix, 60 Packets product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 2.8,
  "shippingWeight": 3.1,
  "featured": false,
  "weeklyEssential": false,
  "underTen": false,
  "relatedProductIds": [
    "wbg-005",
    "wbg-006",
    "wbg-032"
  ],
  "active": true,
  "seoTitle": "Swiss Miss Milk Chocolate Hot Cocoa Mix, 60 Packets | WB Groceries",
  "seoDescription": "Instant milk chocolate cocoa packets for quick warm drinks.",
  "foodProduct": true,
  "synonyms": [
    "hot cocoa",
    "swiss miss",
    "chocolate",
    "drink mix"
  ]
},
{
  "id": "wbg-035",
  "sku": "WBG-CTE-035",
  "upc": null,
  "slug": "celestial-seasonings-sleepytime-tea-40-count",
  "brand": "Celestial Seasonings",
  "manufacturer": "The Hain Celestial Group",
  "title": "Celestial Seasonings Sleepytime Tea, 40 Count",
  "subtitle": "Herbal bedtime tea bags",
  "category": "coffee-tea",
  "secondaryCategories": [],
  "price": 5.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "40 Count",
  "packCount": 40,
  "unitPrice": "$0.15 / bag",
  "shortDescription": "Caffeine-free herbal tea bags for evening wind-down routines.",
  "fullDescription": "Celestial Seasonings Sleepytime herbal tea in a 40-count box. Bag count and caffeine-free style are listed clearly on the product page.",
  "keyFeatures": [
    "40 herbal tea bags",
    "Caffeine-free bedtime blend",
    "Shelf-stable pantry staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Steep in hot water as directed on the package.",
  "images": [
    {
      "src": "/products/celestial-seasonings-sleepytime-tea-40-count/main.webp",
      "alt": "Celestial Seasonings Sleepytime Tea, 40 Count product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/celestial-seasonings-sleepytime-tea-40-count/angle.webp",
      "alt": "Celestial Seasonings Sleepytime Tea, 40 Count alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Celestial Seasonings Sleepytime Tea, 40 Count product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.3,
  "shippingWeight": 0.5,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-005",
    "wbg-006",
    "wbg-032"
  ],
  "active": true,
  "seoTitle": "Celestial Seasonings Sleepytime Tea, 40 Count | WB Groceries",
  "seoDescription": "Caffeine-free herbal tea bags for evening wind-down routines.",
  "foodProduct": true,
  "synonyms": [
    "sleepytime",
    "herbal tea",
    "celestial",
    "tea"
  ]
},
{
  "id": "wbg-036",
  "sku": "WBG-PAN-036",
  "upc": null,
  "slug": "barilla-penne-16oz",
  "brand": "Barilla",
  "manufacturer": "Barilla America",
  "title": "Barilla Penne Pasta, 16 oz",
  "subtitle": "Classic penne rigate",
  "category": "pasta-pantry",
  "secondaryCategories": [],
  "price": 5.29,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "16 oz",
  "packCount": 1,
  "unitPrice": "$0.33 / oz",
  "shortDescription": "Classic penne pasta for sauces, bakes and weeknight dinners.",
  "fullDescription": "Barilla Penne in a 16 oz box for everyday pasta meals. Package weight is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 16 oz",
    "Penne rigate shape",
    "Shelf-stable pantry pasta"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Boil according to the package cook time.",
  "images": [
    {
      "src": "/products/barilla-penne-16oz/main.webp",
      "alt": "Barilla Penne Pasta, 16 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/barilla-penne-16oz/angle.webp",
      "alt": "Barilla Penne Pasta, 16 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Barilla Penne Pasta, 16 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 1.1,
  "shippingWeight": 1.3,
  "featured": true,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "active": true,
  "seoTitle": "Barilla Penne Pasta, 16 oz | WB Groceries",
  "seoDescription": "Classic penne pasta for sauces, bakes and weeknight dinners.",
  "foodProduct": true,
  "synonyms": [
    "penne",
    "pasta",
    "barilla",
    "pantry"
  ]
},
{
  "id": "wbg-037",
  "sku": "WBG-PAN-037",
  "upc": null,
  "slug": "campbells-condensed-tomato-soup-10-75oz-four-pack",
  "brand": "Campbell's",
  "manufacturer": "Campbell Soup Company",
  "title": "Campbell's Condensed Tomato Soup, 10.75 oz, Four-Pack",
  "subtitle": "Classic condensed tomato soup cans",
  "category": "pasta-pantry",
  "secondaryCategories": [],
  "price": 7.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "10.75 oz each",
  "packCount": 4,
  "unitPrice": "$1.87 / can",
  "shortDescription": "Four cans of classic condensed tomato soup for quick lunches.",
  "fullDescription": "Campbell's Condensed Tomato Soup four-pack with 10.75 oz cans. Pack count and can size are listed clearly before checkout.",
  "keyFeatures": [
    "Four 10.75 oz cans",
    "Condensed tomato soup",
    "Shelf-stable pantry staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store unopened cans in a cool, dry place.",
  "preparationInstructions": "Prepare according to the label directions.",
  "images": [
    {
      "src": "/products/campbells-condensed-tomato-soup-10-75oz-four-pack/main.webp",
      "alt": "Campbell's Condensed Tomato Soup, 10.75 oz, Four-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/campbells-condensed-tomato-soup-10-75oz-four-pack/angle.webp",
      "alt": "Campbell's Condensed Tomato Soup, 10.75 oz, Four-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Campbell's Condensed Tomato Soup, 10.75 oz, Four-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 3.2,
  "shippingWeight": 3.6,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "active": true,
  "seoTitle": "Campbell's Condensed Tomato Soup, 10.75 oz, Four-Pack | WB Groceries",
  "seoDescription": "Four cans of classic condensed tomato soup for quick lunches.",
  "foodProduct": true,
  "synonyms": [
    "tomato soup",
    "campbells",
    "soup",
    "pantry"
  ]
},
{
  "id": "wbg-038",
  "sku": "WBG-PAN-038",
  "upc": null,
  "slug": "progresso-traditional-chicken-noodle-19oz",
  "brand": "Progresso",
  "manufacturer": "General Mills",
  "title": "Progresso Traditional Chicken Noodle Soup, 19 oz",
  "subtitle": "Ready-to-serve chicken noodle soup",
  "category": "pasta-pantry",
  "secondaryCategories": [],
  "price": 5.19,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "19 oz",
  "packCount": 1,
  "unitPrice": "$0.27 / oz",
  "shortDescription": "Ready-to-serve chicken noodle soup for quick lunches.",
  "fullDescription": "Progresso Traditional Chicken Noodle Soup in a 19 oz can. Ready-to-heat convenience with package size listed clearly.",
  "keyFeatures": [
    "Net weight 19 oz",
    "Ready-to-serve soup",
    "Chicken noodle style"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store unopened can in a cool, dry place.",
  "preparationInstructions": "Heat as directed on the label.",
  "images": [
    {
      "src": "/products/progresso-traditional-chicken-noodle-19oz/main.webp",
      "alt": "Progresso Traditional Chicken Noodle Soup, 19 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/progresso-traditional-chicken-noodle-19oz/angle.webp",
      "alt": "Progresso Traditional Chicken Noodle Soup, 19 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Progresso Traditional Chicken Noodle Soup, 19 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 1.4,
  "shippingWeight": 1.6,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "active": true,
  "seoTitle": "Progresso Traditional Chicken Noodle Soup, 19 oz | WB Groceries",
  "seoDescription": "Ready-to-serve chicken noodle soup for quick lunches.",
  "foodProduct": true,
  "synonyms": [
    "progresso",
    "chicken noodle",
    "soup",
    "pantry"
  ]
},
{
  "id": "wbg-039",
  "sku": "WBG-PAN-039",
  "upc": null,
  "slug": "uncle-bens-original-ready-rice-8-8oz",
  "brand": "Ben's Original",
  "manufacturer": "Mars Food",
  "title": "Ben's Original Ready Rice Original, 8.8 oz",
  "subtitle": "Microwave-ready white rice pouch",
  "category": "pasta-pantry",
  "secondaryCategories": [],
  "price": 5.09,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "8.8 oz",
  "packCount": 1,
  "unitPrice": "$0.58 / oz",
  "shortDescription": "Microwave-ready white rice pouch for fast side dishes.",
  "fullDescription": "Ben's Original Ready Rice Original in an 8.8 oz pouch for quick microwave sides. Package size is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 8.8 oz",
    "Microwave-ready pouch",
    "Original white rice"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Microwave according to the pouch directions.",
  "images": [
    {
      "src": "/products/uncle-bens-original-ready-rice-8-8oz/main.webp",
      "alt": "Ben's Original Ready Rice Original, 8.8 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/uncle-bens-original-ready-rice-8-8oz/angle.webp",
      "alt": "Ben's Original Ready Rice Original, 8.8 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Ben's Original Ready Rice Original, 8.8 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.6,
  "shippingWeight": 0.8,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "active": true,
  "seoTitle": "Ben's Original Ready Rice Original, 8.8 oz | WB Groceries",
  "seoDescription": "Microwave-ready white rice pouch for fast side dishes.",
  "foodProduct": true,
  "synonyms": [
    "ready rice",
    "uncle bens",
    "rice",
    "microwave"
  ]
},
{
  "id": "wbg-040",
  "sku": "WBG-PAN-040",
  "upc": null,
  "slug": "knorr-pasta-sides-butter-4-pack",
  "brand": "Knorr",
  "manufacturer": "Unilever",
  "title": "Knorr Pasta Sides Butter, Four-Pack",
  "subtitle": "Pasta side dish pouches",
  "category": "pasta-pantry",
  "secondaryCategories": [],
  "price": 6.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "Four Pouches",
  "packCount": 4,
  "unitPrice": "$1.75 / pouch",
  "shortDescription": "Four butter pasta side pouches for quick weeknight dinners.",
  "fullDescription": "Knorr Pasta Sides Butter four-pack for fast stovetop pasta sides. Pack count is listed clearly before checkout.",
  "keyFeatures": [
    "Four pasta side pouches",
    "Butter flavor",
    "Stovetop convenience"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Cook according to the pouch directions.",
  "images": [
    {
      "src": "/products/knorr-pasta-sides-butter-4-pack/main.webp",
      "alt": "Knorr Pasta Sides Butter, Four-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/knorr-pasta-sides-butter-4-pack/angle.webp",
      "alt": "Knorr Pasta Sides Butter, Four-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Knorr Pasta Sides Butter, Four-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 1.2,
  "shippingWeight": 1.4,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "active": true,
  "seoTitle": "Knorr Pasta Sides Butter, Four-Pack | WB Groceries",
  "seoDescription": "Four butter pasta side pouches for quick weeknight dinners.",
  "foodProduct": true,
  "synonyms": [
    "knorr",
    "pasta sides",
    "butter pasta",
    "pantry"
  ]
},
{
  "id": "wbg-041",
  "sku": "WBG-PAN-041",
  "upc": null,
  "slug": "betty-crocker-fudge-brownie-mix-18-3oz",
  "brand": "Betty Crocker",
  "manufacturer": "General Mills",
  "title": "Betty Crocker Fudge Brownie Mix, 18.3 oz",
  "subtitle": "Boxed fudge brownie baking mix",
  "category": "pasta-pantry",
  "secondaryCategories": [],
  "price": 5.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "18.3 oz",
  "packCount": 1,
  "unitPrice": "$0.30 / oz",
  "shortDescription": "Classic fudge brownie mix for simple homemade baking.",
  "fullDescription": "Betty Crocker Fudge Brownie Mix in an 18.3 oz box. Package size and bake-at-home convenience are listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 18.3 oz",
    "Fudge brownie mix",
    "Shelf-stable baking staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": "Bake according to the box directions.",
  "images": [
    {
      "src": "/products/betty-crocker-fudge-brownie-mix-18-3oz/main.webp",
      "alt": "Betty Crocker Fudge Brownie Mix, 18.3 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/betty-crocker-fudge-brownie-mix-18-3oz/angle.webp",
      "alt": "Betty Crocker Fudge Brownie Mix, 18.3 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Betty Crocker Fudge Brownie Mix, 18.3 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 1.2,
  "shippingWeight": 1.4,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-007",
    "wbg-008",
    "wbg-009"
  ],
  "active": true,
  "seoTitle": "Betty Crocker Fudge Brownie Mix, 18.3 oz | WB Groceries",
  "seoDescription": "Classic fudge brownie mix for simple homemade baking.",
  "foodProduct": true,
  "synonyms": [
    "brownie mix",
    "betty crocker",
    "baking",
    "dessert"
  ]
},
{
  "id": "wbg-042",
  "sku": "WBG-CND-042",
  "upc": null,
  "slug": "frenchs-classic-yellow-mustard-20oz",
  "brand": "French's",
  "manufacturer": "McCormick & Company",
  "title": "French's Classic Yellow Mustard, 20 oz",
  "subtitle": "Classic yellow mustard squeeze bottle",
  "category": "condiments-spreads",
  "secondaryCategories": [],
  "price": 5.19,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "20 oz",
  "packCount": 1,
  "unitPrice": "$0.26 / oz",
  "shortDescription": "Classic yellow mustard for sandwiches, hot dogs and recipes.",
  "fullDescription": "French's Classic Yellow Mustard in a 20 oz bottle. Package size is listed clearly for everyday condiment restocking.",
  "keyFeatures": [
    "Net weight 20 oz",
    "Classic yellow mustard",
    "Squeeze-bottle convenience"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Refrigerate after opening if directed on the label.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/frenchs-classic-yellow-mustard-20oz/main.webp",
      "alt": "French's Classic Yellow Mustard, 20 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/frenchs-classic-yellow-mustard-20oz/angle.webp",
      "alt": "French's Classic Yellow Mustard, 20 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "French's Classic Yellow Mustard, 20 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 1.4,
  "shippingWeight": 1.6,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "active": true,
  "seoTitle": "French's Classic Yellow Mustard, 20 oz | WB Groceries",
  "seoDescription": "Classic yellow mustard for sandwiches, hot dogs and recipes.",
  "foodProduct": true,
  "synonyms": [
    "mustard",
    "frenchs",
    "yellow mustard",
    "condiment"
  ]
},
{
  "id": "wbg-043",
  "sku": "WBG-CND-043",
  "upc": null,
  "slug": "hidden-valley-original-ranch-24oz",
  "brand": "Hidden Valley",
  "manufacturer": "The Clorox Company",
  "title": "Hidden Valley Original Ranch Dressing, 24 fl oz",
  "subtitle": "Classic ranch salad dressing",
  "category": "condiments-spreads",
  "secondaryCategories": [],
  "price": 5.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "24 fl oz",
  "packCount": 1,
  "unitPrice": "$0.25 / fl oz",
  "shortDescription": "Original ranch dressing for salads, dips and everyday meals.",
  "fullDescription": "Hidden Valley Original Ranch Dressing in a 24 fl oz bottle. Package size is listed clearly before checkout.",
  "keyFeatures": [
    "24 fl oz bottle",
    "Original ranch flavor",
    "Salad dressing and dip staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Refrigerate after opening.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/hidden-valley-original-ranch-24oz/main.webp",
      "alt": "Hidden Valley Original Ranch Dressing, 24 fl oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/hidden-valley-original-ranch-24oz/angle.webp",
      "alt": "Hidden Valley Original Ranch Dressing, 24 fl oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Hidden Valley Original Ranch Dressing, 24 fl oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 1.7,
  "shippingWeight": 1.9,
  "featured": true,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "active": true,
  "seoTitle": "Hidden Valley Original Ranch Dressing, 24 fl oz | WB Groceries",
  "seoDescription": "Original ranch dressing for salads, dips and everyday meals.",
  "foodProduct": true,
  "synonyms": [
    "ranch",
    "hidden valley",
    "dressing",
    "condiment"
  ]
},
{
  "id": "wbg-044",
  "sku": "WBG-CND-044",
  "upc": null,
  "slug": "franks-redhot-original-cayenne-12oz",
  "brand": "Frank's RedHot",
  "manufacturer": "McCormick & Company",
  "title": "Frank's RedHot Original Cayenne Pepper Sauce, 12 fl oz",
  "subtitle": "Classic cayenne hot sauce",
  "category": "condiments-spreads",
  "secondaryCategories": [],
  "price": 5.29,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "12 fl oz",
  "packCount": 1,
  "unitPrice": "$0.44 / fl oz",
  "shortDescription": "Classic cayenne pepper hot sauce for wings, dips and recipes.",
  "fullDescription": "Frank's RedHot Original Cayenne Pepper Sauce in a 12 fl oz bottle. Heat level style and size are listed clearly before checkout.",
  "keyFeatures": [
    "12 fl oz bottle",
    "Original cayenne hot sauce",
    "Shelf-stable condiment"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place; refrigerate after opening if directed.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/franks-redhot-original-cayenne-12oz/main.webp",
      "alt": "Frank's RedHot Original Cayenne Pepper Sauce, 12 fl oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/franks-redhot-original-cayenne-12oz/angle.webp",
      "alt": "Frank's RedHot Original Cayenne Pepper Sauce, 12 fl oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Frank's RedHot Original Cayenne Pepper Sauce, 12 fl oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.9,
  "shippingWeight": 1.1,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "active": true,
  "seoTitle": "Frank's RedHot Original Cayenne Pepper Sauce, 12 fl oz | WB Groceries",
  "seoDescription": "Classic cayenne pepper hot sauce for wings, dips and recipes.",
  "foodProduct": true,
  "synonyms": [
    "hot sauce",
    "franks",
    "redhot",
    "cayenne"
  ]
},
{
  "id": "wbg-045",
  "sku": "WBG-CND-045",
  "upc": null,
  "slug": "welchs-concord-grape-jelly-30oz",
  "brand": "Welch's",
  "manufacturer": "Welch Foods Inc.",
  "title": "Welch's Concord Grape Jelly, 30 oz",
  "subtitle": "Classic grape jelly jar",
  "category": "condiments-spreads",
  "secondaryCategories": [],
  "price": 5.79,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "30 oz",
  "packCount": 1,
  "unitPrice": "$0.19 / oz",
  "shortDescription": "Concord grape jelly for peanut butter sandwiches and toast.",
  "fullDescription": "Welch's Concord Grape Jelly in a 30 oz jar for everyday sandwich spreads. Package size is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 30 oz",
    "Concord grape jelly",
    "Shelf-stable spread"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Refrigerate after opening.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/welchs-concord-grape-jelly-30oz/main.webp",
      "alt": "Welch's Concord Grape Jelly, 30 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/welchs-concord-grape-jelly-30oz/angle.webp",
      "alt": "Welch's Concord Grape Jelly, 30 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Welch's Concord Grape Jelly, 30 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 2.1,
  "shippingWeight": 2.4,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "active": true,
  "seoTitle": "Welch's Concord Grape Jelly, 30 oz | WB Groceries",
  "seoDescription": "Concord grape jelly for peanut butter sandwiches and toast.",
  "foodProduct": true,
  "synonyms": [
    "grape jelly",
    "welchs",
    "jelly",
    "spread"
  ]
},
{
  "id": "wbg-046",
  "sku": "WBG-CND-046",
  "upc": null,
  "slug": "skippy-creamy-peanut-butter-40oz",
  "brand": "Skippy",
  "manufacturer": "Hormel Foods",
  "title": "Skippy Creamy Peanut Butter, 40 oz",
  "subtitle": "Family-size creamy peanut butter",
  "category": "condiments-spreads",
  "secondaryCategories": [],
  "price": 8.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "40 oz",
  "packCount": 1,
  "unitPrice": "$0.22 / oz",
  "shortDescription": "Family-size creamy peanut butter for sandwiches and snacks.",
  "fullDescription": "Skippy Creamy Peanut Butter in a 40 oz jar. Large pantry size is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 40 oz",
    "Creamy peanut butter",
    "Family pantry size"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/skippy-creamy-peanut-butter-40oz/main.webp",
      "alt": "Skippy Creamy Peanut Butter, 40 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/skippy-creamy-peanut-butter-40oz/angle.webp",
      "alt": "Skippy Creamy Peanut Butter, 40 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Skippy Creamy Peanut Butter, 40 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 2.7,
  "shippingWeight": 3,
  "featured": true,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-010",
    "wbg-011",
    "wbg-012"
  ],
  "active": true,
  "seoTitle": "Skippy Creamy Peanut Butter, 40 oz | WB Groceries",
  "seoDescription": "Family-size creamy peanut butter for sandwiches and snacks.",
  "foodProduct": true,
  "synonyms": [
    "skippy",
    "peanut butter",
    "creamy",
    "spread"
  ]
},
{
  "id": "wbg-047",
  "sku": "WBG-CAN-047",
  "upc": null,
  "slug": "hunts-diced-tomatoes-14-5oz-four-pack",
  "brand": "Hunt's",
  "manufacturer": "Conagra Brands",
  "title": "Hunt's Diced Tomatoes, 14.5 oz, Four-Pack",
  "subtitle": "Diced tomato cans for recipes",
  "category": "canned-goods",
  "secondaryCategories": [],
  "price": 6.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "14.5 oz each",
  "packCount": 4,
  "unitPrice": "$1.75 / can",
  "shortDescription": "Four cans of diced tomatoes for soups, sauces and skillet meals.",
  "fullDescription": "Hunt's Diced Tomatoes four-pack with 14.5 oz cans. Pack count and can size are listed clearly before checkout.",
  "keyFeatures": [
    "Four 14.5 oz cans",
    "Diced tomatoes",
    "Shelf-stable recipe staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store unopened cans in a cool, dry place.",
  "preparationInstructions": "Use as directed in recipes after opening.",
  "images": [
    {
      "src": "/products/hunts-diced-tomatoes-14-5oz-four-pack/main.webp",
      "alt": "Hunt's Diced Tomatoes, 14.5 oz, Four-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/hunts-diced-tomatoes-14-5oz-four-pack/angle.webp",
      "alt": "Hunt's Diced Tomatoes, 14.5 oz, Four-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Hunt's Diced Tomatoes, 14.5 oz, Four-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 4.2,
  "shippingWeight": 4.6,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "active": true,
  "seoTitle": "Hunt's Diced Tomatoes, 14.5 oz, Four-Pack | WB Groceries",
  "seoDescription": "Four cans of diced tomatoes for soups, sauces and skillet meals.",
  "foodProduct": true,
  "synonyms": [
    "diced tomatoes",
    "hunts",
    "canned tomatoes",
    "pantry"
  ]
},
{
  "id": "wbg-048",
  "sku": "WBG-CAN-048",
  "upc": null,
  "slug": "green-giant-sweet-peas-15oz-four-pack",
  "brand": "Green Giant",
  "manufacturer": "B&G Foods",
  "title": "Green Giant Sweet Peas, 15 oz, Four-Pack",
  "subtitle": "Canned sweet peas multipack",
  "category": "canned-goods",
  "secondaryCategories": [],
  "price": 6.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "15 oz each",
  "packCount": 4,
  "unitPrice": "$1.62 / can",
  "shortDescription": "Four cans of sweet peas for quick vegetable sides.",
  "fullDescription": "Green Giant Sweet Peas four-pack with 15 oz cans. Pack count is listed clearly for pantry vegetable restocking.",
  "keyFeatures": [
    "Four 15 oz cans",
    "Sweet peas",
    "Shelf-stable vegetable staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store unopened cans in a cool, dry place.",
  "preparationInstructions": "Heat and serve as directed on the label.",
  "images": [
    {
      "src": "/products/green-giant-sweet-peas-15oz-four-pack/main.webp",
      "alt": "Green Giant Sweet Peas, 15 oz, Four-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/green-giant-sweet-peas-15oz-four-pack/angle.webp",
      "alt": "Green Giant Sweet Peas, 15 oz, Four-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Green Giant Sweet Peas, 15 oz, Four-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 4.4,
  "shippingWeight": 4.8,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "active": true,
  "seoTitle": "Green Giant Sweet Peas, 15 oz, Four-Pack | WB Groceries",
  "seoDescription": "Four cans of sweet peas for quick vegetable sides.",
  "foodProduct": true,
  "synonyms": [
    "peas",
    "green giant",
    "canned vegetables",
    "pantry"
  ]
},
{
  "id": "wbg-049",
  "sku": "WBG-CAN-049",
  "upc": null,
  "slug": "hormel-chili-with-beans-15oz-four-pack",
  "brand": "Hormel",
  "manufacturer": "Hormel Foods",
  "title": "Hormel Chili with Beans, 15 oz, Four-Pack",
  "subtitle": "Ready chili cans with beans",
  "category": "canned-goods",
  "secondaryCategories": [],
  "price": 9.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "15 oz each",
  "packCount": 4,
  "unitPrice": "$2.50 / can",
  "shortDescription": "Four cans of chili with beans for quick hearty lunches.",
  "fullDescription": "Hormel Chili with Beans four-pack with 15 oz cans. Pack count and style are listed clearly before checkout.",
  "keyFeatures": [
    "Four 15 oz cans",
    "Chili with beans",
    "Heat-and-serve convenience"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store unopened cans in a cool, dry place.",
  "preparationInstructions": "Heat as directed on the label.",
  "images": [
    {
      "src": "/products/hormel-chili-with-beans-15oz-four-pack/main.webp",
      "alt": "Hormel Chili with Beans, 15 oz, Four-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/hormel-chili-with-beans-15oz-four-pack/angle.webp",
      "alt": "Hormel Chili with Beans, 15 oz, Four-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Hormel Chili with Beans, 15 oz, Four-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 4.4,
  "shippingWeight": 4.8,
  "featured": true,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "active": true,
  "seoTitle": "Hormel Chili with Beans, 15 oz, Four-Pack | WB Groceries",
  "seoDescription": "Four cans of chili with beans for quick hearty lunches.",
  "foodProduct": true,
  "synonyms": [
    "chili",
    "hormel",
    "beans",
    "canned"
  ]
},
{
  "id": "wbg-050",
  "sku": "WBG-CAN-050",
  "upc": null,
  "slug": "chicken-of-the-sea-chunk-light-tuna-5oz-four-pack",
  "brand": "Chicken of the Sea",
  "manufacturer": "Thai Union Group",
  "title": "Chicken of the Sea Chunk Light Tuna in Water, 5 oz, Four-Pack",
  "subtitle": "Chunk light tuna multipack",
  "category": "canned-goods",
  "secondaryCategories": [],
  "price": 7.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "5 oz each",
  "packCount": 4,
  "unitPrice": "$1.87 / can",
  "shortDescription": "Four cans of chunk light tuna in water for sandwiches and salads.",
  "fullDescription": "Chicken of the Sea Chunk Light Tuna in Water four-pack with 5 oz cans. Pack count is listed clearly before checkout.",
  "keyFeatures": [
    "Four 5 oz cans",
    "Chunk light tuna in water",
    "Shelf-stable protein staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store unopened cans in a cool, dry place.",
  "preparationInstructions": "Drain and use as directed on the label.",
  "images": [
    {
      "src": "/products/chicken-of-the-sea-chunk-light-tuna-5oz-four-pack/main.webp",
      "alt": "Chicken of the Sea Chunk Light Tuna in Water, 5 oz, Four-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/chicken-of-the-sea-chunk-light-tuna-5oz-four-pack/angle.webp",
      "alt": "Chicken of the Sea Chunk Light Tuna in Water, 5 oz, Four-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Chicken of the Sea Chunk Light Tuna in Water, 5 oz, Four-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 1.6,
  "shippingWeight": 1.9,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "active": true,
  "seoTitle": "Chicken of the Sea Chunk Light Tuna in Water, 5 oz, Four-Pack | WB Groceries",
  "seoDescription": "Four cans of chunk light tuna in water for sandwiches and salads.",
  "foodProduct": true,
  "synonyms": [
    "tuna",
    "chicken of the sea",
    "canned fish",
    "protein"
  ]
},
{
  "id": "wbg-051",
  "sku": "WBG-CAN-051",
  "upc": null,
  "slug": "spaghettios-original-15-8oz-four-pack",
  "brand": "SpaghettiOs",
  "manufacturer": "Campbell Soup Company",
  "title": "SpaghettiOs Original, 15.8 oz, Four-Pack",
  "subtitle": "Classic pasta rings in tomato sauce",
  "category": "canned-goods",
  "secondaryCategories": [],
  "price": 7.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "15.8 oz each",
  "packCount": 4,
  "unitPrice": "$2.00 / can",
  "shortDescription": "Four cans of classic pasta rings in tomato and cheese sauce.",
  "fullDescription": "SpaghettiOs Original four-pack with 15.8 oz cans for quick kid-friendly meals. Pack count is listed clearly before checkout.",
  "keyFeatures": [
    "Four 15.8 oz cans",
    "Pasta rings in sauce",
    "Heat-and-serve convenience"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store unopened cans in a cool, dry place.",
  "preparationInstructions": "Heat as directed on the label.",
  "images": [
    {
      "src": "/products/spaghettios-original-15-8oz-four-pack/main.webp",
      "alt": "SpaghettiOs Original, 15.8 oz, Four-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/spaghettios-original-15-8oz-four-pack/angle.webp",
      "alt": "SpaghettiOs Original, 15.8 oz, Four-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "SpaghettiOs Original, 15.8 oz, Four-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 4.6,
  "shippingWeight": 5,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-014",
    "wbg-015",
    "wbg-016"
  ],
  "active": true,
  "seoTitle": "SpaghettiOs Original, 15.8 oz, Four-Pack | WB Groceries",
  "seoDescription": "Four cans of classic pasta rings in tomato and cheese sauce.",
  "foodProduct": true,
  "synonyms": [
    "spaghettios",
    "pasta",
    "canned pasta",
    "kids"
  ]
},
{
  "id": "wbg-052",
  "sku": "WBG-SNK-052",
  "upc": null,
  "slug": "cheez-it-original-baked-snack-crackers-12-4oz",
  "brand": "Cheez-It",
  "manufacturer": "Kellanova",
  "title": "Cheez-It Original Baked Snack Crackers, 12.4 oz",
  "subtitle": "Baked cheese snack crackers",
  "category": "snacks",
  "secondaryCategories": [],
  "price": 5.79,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "12.4 oz",
  "packCount": 1,
  "unitPrice": "$0.47 / oz",
  "shortDescription": "Original baked cheese crackers for lunchboxes and snacking.",
  "fullDescription": "Cheez-It Original baked snack crackers in a 12.4 oz box. Package size is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 12.4 oz",
    "Original cheese crackers",
    "Shelf-stable snack"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/cheez-it-original-baked-snack-crackers-12-4oz/main.webp",
      "alt": "Cheez-It Original Baked Snack Crackers, 12.4 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/cheez-it-original-baked-snack-crackers-12-4oz/angle.webp",
      "alt": "Cheez-It Original Baked Snack Crackers, 12.4 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Cheez-It Original Baked Snack Crackers, 12.4 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.9,
  "shippingWeight": 1.1,
  "featured": true,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "active": true,
  "seoTitle": "Cheez-It Original Baked Snack Crackers, 12.4 oz | WB Groceries",
  "seoDescription": "Original baked cheese crackers for lunchboxes and snacking.",
  "foodProduct": true,
  "synonyms": [
    "cheez it",
    "cheese crackers",
    "snack",
    "crackers"
  ]
},
{
  "id": "wbg-053",
  "sku": "WBG-SNK-053",
  "upc": null,
  "slug": "goldfish-cheddar-crackers-30oz",
  "brand": "Goldfish",
  "manufacturer": "Pepperidge Farm",
  "title": "Goldfish Cheddar Crackers, 30 oz",
  "subtitle": "Family-size cheddar snack crackers",
  "category": "snacks",
  "secondaryCategories": [],
  "price": 8.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "30 oz",
  "packCount": 1,
  "unitPrice": "$0.30 / oz",
  "shortDescription": "Family-size cheddar Goldfish crackers for everyday snacking.",
  "fullDescription": "Goldfish Cheddar crackers in a 30 oz carton. Family pantry size is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 30 oz",
    "Cheddar cheese crackers",
    "Family snack size"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/goldfish-cheddar-crackers-30oz/main.webp",
      "alt": "Goldfish Cheddar Crackers, 30 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/goldfish-cheddar-crackers-30oz/angle.webp",
      "alt": "Goldfish Cheddar Crackers, 30 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Goldfish Cheddar Crackers, 30 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 2,
  "shippingWeight": 2.3,
  "featured": true,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "active": true,
  "seoTitle": "Goldfish Cheddar Crackers, 30 oz | WB Groceries",
  "seoDescription": "Family-size cheddar Goldfish crackers for everyday snacking.",
  "foodProduct": true,
  "synonyms": [
    "goldfish",
    "cheddar",
    "crackers",
    "snack"
  ]
},
{
  "id": "wbg-054",
  "sku": "WBG-SNK-054",
  "upc": null,
  "slug": "chips-ahoy-original-chocolate-chip-cookies-13oz",
  "brand": "Chips Ahoy!",
  "manufacturer": "Mondelez International",
  "title": "Chips Ahoy! Original Chocolate Chip Cookies, 13 oz",
  "subtitle": "Classic chocolate chip cookies",
  "category": "snacks",
  "secondaryCategories": [],
  "price": 5.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "13 oz",
  "packCount": 1,
  "unitPrice": "$0.42 / oz",
  "shortDescription": "Classic chocolate chip cookies for lunchboxes and dessert trays.",
  "fullDescription": "Chips Ahoy! Original chocolate chip cookies in a 13 oz package. Package size is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 13 oz",
    "Chocolate chip cookies",
    "Shelf-stable cookie staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/chips-ahoy-original-chocolate-chip-cookies-13oz/main.webp",
      "alt": "Chips Ahoy! Original Chocolate Chip Cookies, 13 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/chips-ahoy-original-chocolate-chip-cookies-13oz/angle.webp",
      "alt": "Chips Ahoy! Original Chocolate Chip Cookies, 13 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Chips Ahoy! Original Chocolate Chip Cookies, 13 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.9,
  "shippingWeight": 1.1,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "active": true,
  "seoTitle": "Chips Ahoy! Original Chocolate Chip Cookies, 13 oz | WB Groceries",
  "seoDescription": "Classic chocolate chip cookies for lunchboxes and dessert trays.",
  "foodProduct": true,
  "synonyms": [
    "chips ahoy",
    "cookies",
    "chocolate chip",
    "snack"
  ]
},
{
  "id": "wbg-055",
  "sku": "WBG-SNK-055",
  "upc": null,
  "slug": "pringles-original-potato-crisps-5-2oz",
  "brand": "Pringles",
  "manufacturer": "Kellanova",
  "title": "Pringles Original Potato Crisps, 5.2 oz",
  "subtitle": "Stackable original potato crisps",
  "category": "snacks",
  "secondaryCategories": [],
  "price": 5.09,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "5.2 oz",
  "packCount": 1,
  "unitPrice": "$0.98 / oz",
  "shortDescription": "Original stackable potato crisps in a resealable can.",
  "fullDescription": "Pringles Original potato crisps in a 5.2 oz can. Flavor and package size are listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 5.2 oz",
    "Original potato crisps",
    "Resealable can"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/pringles-original-potato-crisps-5-2oz/main.webp",
      "alt": "Pringles Original Potato Crisps, 5.2 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/pringles-original-potato-crisps-5-2oz/angle.webp",
      "alt": "Pringles Original Potato Crisps, 5.2 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Pringles Original Potato Crisps, 5.2 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.5,
  "shippingWeight": 0.7,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "active": true,
  "seoTitle": "Pringles Original Potato Crisps, 5.2 oz | WB Groceries",
  "seoDescription": "Original stackable potato crisps in a resealable can.",
  "foodProduct": true,
  "synonyms": [
    "pringles",
    "potato chips",
    "crisps",
    "snack"
  ]
},
{
  "id": "wbg-056",
  "sku": "WBG-SNK-056",
  "upc": null,
  "slug": "snyders-of-hanover-mini-pretzels-12oz",
  "brand": "Snyder's of Hanover",
  "manufacturer": "Snyder's-Lance",
  "title": "Snyder's of Hanover Mini Pretzels, 12 oz",
  "subtitle": "Mini pretzel snacks",
  "category": "snacks",
  "secondaryCategories": [],
  "price": 5.29,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "12 oz",
  "packCount": 1,
  "unitPrice": "$0.44 / oz",
  "shortDescription": "Mini pretzels for lunchboxes, parties and everyday snacking.",
  "fullDescription": "Snyder's of Hanover Mini Pretzels in a 12 oz bag. Package size is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 12 oz",
    "Mini pretzel shape",
    "Shelf-stable snack"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/snyders-of-hanover-mini-pretzels-12oz/main.webp",
      "alt": "Snyder's of Hanover Mini Pretzels, 12 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/snyders-of-hanover-mini-pretzels-12oz/angle.webp",
      "alt": "Snyder's of Hanover Mini Pretzels, 12 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Snyder's of Hanover Mini Pretzels, 12 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.8,
  "shippingWeight": 1,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "active": true,
  "seoTitle": "Snyder's of Hanover Mini Pretzels, 12 oz | WB Groceries",
  "seoDescription": "Mini pretzels for lunchboxes, parties and everyday snacking.",
  "foodProduct": true,
  "synonyms": [
    "pretzels",
    "snyders",
    "mini pretzels",
    "snack"
  ]
},
{
  "id": "wbg-057",
  "sku": "WBG-SNK-057",
  "upc": null,
  "slug": "triscuit-original-crackers-8-5oz",
  "brand": "Triscuit",
  "manufacturer": "Mondelez International",
  "title": "Triscuit Original Crackers, 8.5 oz",
  "subtitle": "Whole grain wheat crackers",
  "category": "snacks",
  "secondaryCategories": [],
  "price": 5.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "8.5 oz",
  "packCount": 1,
  "unitPrice": "$0.65 / oz",
  "shortDescription": "Original woven wheat crackers for cheese boards and snacks.",
  "fullDescription": "Triscuit Original crackers in an 8.5 oz box. Package size is listed clearly before checkout.",
  "keyFeatures": [
    "Net weight 8.5 oz",
    "Original wheat crackers",
    "Shelf-stable snack"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool, dry place.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/triscuit-original-crackers-8-5oz/main.webp",
      "alt": "Triscuit Original Crackers, 8.5 oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/triscuit-original-crackers-8-5oz/angle.webp",
      "alt": "Triscuit Original Crackers, 8.5 oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Triscuit Original Crackers, 8.5 oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.6,
  "shippingWeight": 0.8,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-017",
    "wbg-018",
    "wbg-019"
  ],
  "active": true,
  "seoTitle": "Triscuit Original Crackers, 8.5 oz | WB Groceries",
  "seoDescription": "Original woven wheat crackers for cheese boards and snacks.",
  "foodProduct": true,
  "synonyms": [
    "triscuit",
    "wheat crackers",
    "crackers",
    "snack"
  ]
},
{
  "id": "wbg-058",
  "sku": "WBG-BEV-058",
  "upc": null,
  "slug": "pepsi-cola-12-pack-12oz-cans",
  "brand": "Pepsi",
  "manufacturer": "PepsiCo",
  "title": "Pepsi Cola, 12 fl oz Cans, 12-Pack",
  "subtitle": "Classic cola multipack cans",
  "category": "beverages",
  "secondaryCategories": [],
  "price": 9.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "12 fl oz cans",
  "packCount": 12,
  "unitPrice": "$0.79 / can",
  "shortDescription": "Twelve cans of classic Pepsi for home beverage restocking.",
  "fullDescription": "Pepsi Cola 12-pack of 12 fl oz cans. Multipack count and can size are listed clearly before checkout.",
  "keyFeatures": [
    "12 cans",
    "12 fl oz each",
    "Classic cola soft drink"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool place. Refrigerate before serving.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/pepsi-cola-12-pack-12oz-cans/main.webp",
      "alt": "Pepsi Cola, 12 fl oz Cans, 12-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/pepsi-cola-12-pack-12oz-cans/angle.webp",
      "alt": "Pepsi Cola, 12 fl oz Cans, 12-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Pepsi Cola, 12 fl oz Cans, 12-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 10,
  "shippingWeight": 11,
  "featured": true,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-021",
    "wbg-022",
    "wbg-059"
  ],
  "active": true,
  "seoTitle": "Pepsi Cola, 12 fl oz Cans, 12-Pack | WB Groceries",
  "seoDescription": "Twelve cans of classic Pepsi for home beverage restocking.",
  "foodProduct": true,
  "synonyms": [
    "pepsi",
    "cola",
    "soda",
    "soft drink"
  ]
},
{
  "id": "wbg-059",
  "sku": "WBG-BEV-059",
  "upc": null,
  "slug": "sprite-lemon-lime-12-pack-12oz-cans",
  "brand": "Sprite",
  "manufacturer": "The Coca-Cola Company",
  "title": "Sprite Lemon-Lime, 12 fl oz Cans, 12-Pack",
  "subtitle": "Lemon-lime soda multipack",
  "category": "beverages",
  "secondaryCategories": [],
  "price": 9.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "12 fl oz cans",
  "packCount": 12,
  "unitPrice": "$0.79 / can",
  "shortDescription": "Twelve cans of lemon-lime Sprite for everyday soft drinks.",
  "fullDescription": "Sprite lemon-lime 12-pack of 12 fl oz cans. Multipack details are listed clearly before checkout.",
  "keyFeatures": [
    "12 cans",
    "12 fl oz each",
    "Lemon-lime soft drink"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool place. Refrigerate before serving.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/sprite-lemon-lime-12-pack-12oz-cans/main.webp",
      "alt": "Sprite Lemon-Lime, 12 fl oz Cans, 12-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/sprite-lemon-lime-12-pack-12oz-cans/angle.webp",
      "alt": "Sprite Lemon-Lime, 12 fl oz Cans, 12-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Sprite Lemon-Lime, 12 fl oz Cans, 12-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 10,
  "shippingWeight": 11,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-021",
    "wbg-022",
    "wbg-058"
  ],
  "active": true,
  "seoTitle": "Sprite Lemon-Lime, 12 fl oz Cans, 12-Pack | WB Groceries",
  "seoDescription": "Twelve cans of lemon-lime Sprite for everyday soft drinks.",
  "foodProduct": true,
  "synonyms": [
    "sprite",
    "lemon lime",
    "soda",
    "soft drink"
  ]
},
{
  "id": "wbg-060",
  "sku": "WBG-BEV-060",
  "upc": null,
  "slug": "dasani-purified-water-16-9oz-24-pack",
  "brand": "Dasani",
  "manufacturer": "The Coca-Cola Company",
  "title": "Dasani Purified Water, 16.9 fl oz Bottles, 24-Pack",
  "subtitle": "Purified bottled water case",
  "category": "beverages",
  "secondaryCategories": [],
  "price": 8.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "16.9 fl oz bottles",
  "packCount": 24,
  "unitPrice": "$0.37 / bottle",
  "shortDescription": "Twenty-four bottles of purified water for home and on-the-go hydration.",
  "fullDescription": "Dasani Purified Water 24-pack of 16.9 fl oz bottles. Case count is listed clearly before checkout.",
  "keyFeatures": [
    "24 bottles",
    "16.9 fl oz each",
    "Purified bottled water"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool place away from direct sunlight.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/dasani-purified-water-16-9oz-24-pack/main.webp",
      "alt": "Dasani Purified Water, 16.9 fl oz Bottles, 24-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/dasani-purified-water-16-9oz-24-pack/angle.webp",
      "alt": "Dasani Purified Water, 16.9 fl oz Bottles, 24-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Dasani Purified Water, 16.9 fl oz Bottles, 24-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 28,
  "shippingWeight": 30,
  "featured": true,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-021",
    "wbg-022",
    "wbg-058"
  ],
  "active": true,
  "seoTitle": "Dasani Purified Water, 16.9 fl oz Bottles, 24-Pack | WB Groceries",
  "seoDescription": "Twenty-four bottles of purified water for home and on-the-go hydration.",
  "foodProduct": true,
  "synonyms": [
    "dasani",
    "water",
    "bottled water",
    "hydration"
  ]
},
{
  "id": "wbg-061",
  "sku": "WBG-BEV-061",
  "upc": null,
  "slug": "tropicana-pure-premium-orange-juice-59oz",
  "brand": "Tropicana",
  "manufacturer": "Tropicana Brands Group",
  "title": "Tropicana Pure Premium Orange Juice, 59 fl oz",
  "subtitle": "Not-from-concentrate orange juice",
  "category": "beverages",
  "secondaryCategories": [],
  "price": 6.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "59 fl oz",
  "packCount": 1,
  "unitPrice": "$0.12 / fl oz",
  "shortDescription": "Pure premium orange juice carton for breakfasts and everyday pours.",
  "fullDescription": "Tropicana Pure Premium orange juice in a 59 fl oz carton. Package size is listed clearly before checkout.",
  "keyFeatures": [
    "59 fl oz carton",
    "Orange juice",
    "Breakfast beverage staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Keep refrigerated.",
  "preparationInstructions": "Shake well before serving if directed on the carton.",
  "images": [
    {
      "src": "/products/tropicana-pure-premium-orange-juice-59oz/main.webp",
      "alt": "Tropicana Pure Premium Orange Juice, 59 fl oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/tropicana-pure-premium-orange-juice-59oz/angle.webp",
      "alt": "Tropicana Pure Premium Orange Juice, 59 fl oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Tropicana Pure Premium Orange Juice, 59 fl oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 4.2,
  "shippingWeight": 4.6,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-021",
    "wbg-022",
    "wbg-058"
  ],
  "active": true,
  "seoTitle": "Tropicana Pure Premium Orange Juice, 59 fl oz | WB Groceries",
  "seoDescription": "Pure premium orange juice carton for breakfasts and everyday pours.",
  "foodProduct": true,
  "synonyms": [
    "tropicana",
    "orange juice",
    "juice",
    "breakfast"
  ]
},
{
  "id": "wbg-062",
  "sku": "WBG-BEV-062",
  "upc": null,
  "slug": "arizona-iced-tea-with-lemon-23oz-four-pack",
  "brand": "AriZona",
  "manufacturer": "AriZona Beverages",
  "title": "AriZona Iced Tea with Lemon, 23 fl oz Cans, Four-Pack",
  "subtitle": "Lemon iced tea tall cans",
  "category": "beverages",
  "secondaryCategories": [],
  "price": 5.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "23 fl oz cans",
  "packCount": 4,
  "unitPrice": "$1.50 / can",
  "shortDescription": "Four tall cans of lemon iced tea for ready-to-drink refreshment.",
  "fullDescription": "AriZona Iced Tea with Lemon four-pack of 23 fl oz cans. Pack count is listed clearly before checkout.",
  "keyFeatures": [
    "Four 23 fl oz cans",
    "Lemon iced tea",
    "Ready-to-drink beverage"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a cool place. Refrigerate before serving.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/arizona-iced-tea-with-lemon-23oz-four-pack/main.webp",
      "alt": "AriZona Iced Tea with Lemon, 23 fl oz Cans, Four-Pack product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/arizona-iced-tea-with-lemon-23oz-four-pack/angle.webp",
      "alt": "AriZona Iced Tea with Lemon, 23 fl oz Cans, Four-Pack alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "AriZona Iced Tea with Lemon, 23 fl oz Cans, Four-Pack product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 6.5,
  "shippingWeight": 7,
  "featured": false,
  "weeklyEssential": false,
  "underTen": true,
  "relatedProductIds": [
    "wbg-021",
    "wbg-022",
    "wbg-058"
  ],
  "active": true,
  "seoTitle": "AriZona Iced Tea with Lemon, 23 fl oz Cans, Four-Pack | WB Groceries",
  "seoDescription": "Four tall cans of lemon iced tea for ready-to-drink refreshment.",
  "foodProduct": true,
  "synonyms": [
    "arizona",
    "iced tea",
    "lemon tea",
    "drink"
  ]
},
{
  "id": "wbg-063",
  "sku": "WBG-HSH-063",
  "upc": null,
  "slug": "charmin-essential-soft-toilet-paper-12-mega-rolls",
  "brand": "Charmin",
  "manufacturer": "Procter & Gamble",
  "title": "Charmin Essential Soft Toilet Paper, 12 Mega Rolls",
  "subtitle": "Soft bathroom tissue multipack",
  "category": "household",
  "secondaryCategories": [],
  "price": 14.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "12 Mega Rolls",
  "packCount": 12,
  "unitPrice": "$1.25 / roll",
  "shortDescription": "Twelve mega rolls of soft toilet paper for household restocking.",
  "fullDescription": "Charmin Essential Soft toilet paper 12 mega-roll pack. Roll count is listed clearly before checkout.",
  "keyFeatures": [
    "12 mega rolls",
    "Essential soft tissue",
    "Household paper staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a clean, dry place.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/charmin-essential-soft-toilet-paper-12-mega-rolls/main.webp",
      "alt": "Charmin Essential Soft Toilet Paper, 12 Mega Rolls product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/charmin-essential-soft-toilet-paper-12-mega-rolls/angle.webp",
      "alt": "Charmin Essential Soft Toilet Paper, 12 Mega Rolls alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Charmin Essential Soft Toilet Paper, 12 Mega Rolls product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 6.5,
  "shippingWeight": 7.2,
  "featured": true,
  "weeklyEssential": true,
  "underTen": false,
  "relatedProductIds": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "active": true,
  "seoTitle": "Charmin Essential Soft Toilet Paper, 12 Mega Rolls | WB Groceries",
  "seoDescription": "Twelve mega rolls of soft toilet paper for household restocking.",
  "foodProduct": false,
  "synonyms": [
    "charmin",
    "toilet paper",
    "bathroom tissue",
    "household"
  ]
},
{
  "id": "wbg-064",
  "sku": "WBG-HSH-064",
  "upc": null,
  "slug": "clorox-disinfecting-wipes-75-count-fresh-scent",
  "brand": "Clorox",
  "manufacturer": "The Clorox Company",
  "title": "Clorox Disinfecting Wipes, 75 Count, Fresh Scent",
  "subtitle": "Disinfecting cleaning wipes canister",
  "category": "household",
  "secondaryCategories": [],
  "price": 7.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "75 Count",
  "packCount": 75,
  "unitPrice": "$0.10 / wipe",
  "shortDescription": "Disinfecting wipes for everyday kitchen and household surface cleaning.",
  "fullDescription": "Clorox Disinfecting Wipes 75-count canister in fresh scent. Wipe count is listed clearly before checkout.",
  "keyFeatures": [
    "75 disinfecting wipes",
    "Fresh scent",
    "Ready-to-use cleaning canister"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store sealed in a cool place. Keep out of reach of children.",
  "preparationInstructions": "Use as directed on the label.",
  "images": [
    {
      "src": "/products/clorox-disinfecting-wipes-75-count-fresh-scent/main.webp",
      "alt": "Clorox Disinfecting Wipes, 75 Count, Fresh Scent product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/clorox-disinfecting-wipes-75-count-fresh-scent/angle.webp",
      "alt": "Clorox Disinfecting Wipes, 75 Count, Fresh Scent alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Clorox Disinfecting Wipes, 75 Count, Fresh Scent product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 2.2,
  "shippingWeight": 2.5,
  "featured": true,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "active": true,
  "seoTitle": "Clorox Disinfecting Wipes, 75 Count, Fresh Scent | WB Groceries",
  "seoDescription": "Disinfecting wipes for everyday kitchen and household surface cleaning.",
  "foodProduct": false,
  "synonyms": [
    "clorox",
    "wipes",
    "disinfecting",
    "cleaning"
  ]
},
{
  "id": "wbg-065",
  "sku": "WBG-HSH-065",
  "upc": null,
  "slug": "reynolds-wrap-aluminum-foil-75-sq-ft",
  "brand": "Reynolds Wrap",
  "manufacturer": "Reynolds Consumer Products",
  "title": "Reynolds Wrap Aluminum Foil, 75 sq ft",
  "subtitle": "Standard aluminum foil roll",
  "category": "household",
  "secondaryCategories": [],
  "price": 5.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "75 sq ft",
  "packCount": 1,
  "unitPrice": "$0.08 / sq ft",
  "shortDescription": "Aluminum foil roll for cooking, covering and food storage.",
  "fullDescription": "Reynolds Wrap aluminum foil 75 sq ft roll for cooking and leftovers. Roll size is listed clearly before checkout.",
  "keyFeatures": [
    "75 square feet",
    "Aluminum foil roll",
    "Kitchen household staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a dry place.",
  "preparationInstructions": "Use as directed for cooking and food covering.",
  "images": [
    {
      "src": "/products/reynolds-wrap-aluminum-foil-75-sq-ft/main.webp",
      "alt": "Reynolds Wrap Aluminum Foil, 75 sq ft product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/reynolds-wrap-aluminum-foil-75-sq-ft/angle.webp",
      "alt": "Reynolds Wrap Aluminum Foil, 75 sq ft alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Reynolds Wrap Aluminum Foil, 75 sq ft product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.8,
  "shippingWeight": 1,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "active": true,
  "seoTitle": "Reynolds Wrap Aluminum Foil, 75 sq ft | WB Groceries",
  "seoDescription": "Aluminum foil roll for cooking, covering and food storage.",
  "foodProduct": false,
  "synonyms": [
    "aluminum foil",
    "reynolds",
    "foil",
    "kitchen"
  ]
},
{
  "id": "wbg-066",
  "sku": "WBG-HSH-066",
  "upc": null,
  "slug": "ziploc-sandwich-bags-90-count",
  "brand": "Ziploc",
  "manufacturer": "S.C. Johnson",
  "title": "Ziploc Sandwich Bags, 90 Count",
  "subtitle": "Resealable sandwich storage bags",
  "category": "household",
  "secondaryCategories": [],
  "price": 5.49,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "90 Count",
  "packCount": 90,
  "unitPrice": "$0.06 / bag",
  "shortDescription": "Resealable sandwich bags for lunches and leftover storage.",
  "fullDescription": "Ziploc Sandwich Bags 90-count box for everyday lunch packing and food storage. Bag count is listed clearly before checkout.",
  "keyFeatures": [
    "90 sandwich bags",
    "Resealable storage",
    "Kitchen household staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store in a clean, dry place.",
  "preparationInstructions": null,
  "images": [
    {
      "src": "/products/ziploc-sandwich-bags-90-count/main.webp",
      "alt": "Ziploc Sandwich Bags, 90 Count product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/ziploc-sandwich-bags-90-count/angle.webp",
      "alt": "Ziploc Sandwich Bags, 90 Count alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Ziploc Sandwich Bags, 90 Count product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 0.7,
  "shippingWeight": 0.9,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "active": true,
  "seoTitle": "Ziploc Sandwich Bags, 90 Count | WB Groceries",
  "seoDescription": "Resealable sandwich bags for lunches and leftover storage.",
  "foodProduct": false,
  "synonyms": [
    "ziploc",
    "sandwich bags",
    "storage bags",
    "kitchen"
  ]
},
{
  "id": "wbg-067",
  "sku": "WBG-HSH-067",
  "upc": null,
  "slug": "softsoap-liquid-hand-soap-refill-50oz",
  "brand": "Softsoap",
  "manufacturer": "Colgate-Palmolive",
  "title": "Softsoap Liquid Hand Soap Refill, 50 fl oz",
  "subtitle": "Hand soap refill bottle",
  "category": "household",
  "secondaryCategories": [],
  "price": 6.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "50 fl oz",
  "packCount": 1,
  "unitPrice": "$0.14 / fl oz",
  "shortDescription": "Large liquid hand soap refill for bathroom and kitchen pumps.",
  "fullDescription": "Softsoap liquid hand soap refill in a 50 fl oz bottle. Refill size is listed clearly before checkout.",
  "keyFeatures": [
    "50 fl oz refill",
    "Liquid hand soap",
    "Bathroom and kitchen staple"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store upright. Keep out of reach of children.",
  "preparationInstructions": "Refill pump dispensers as directed on the label.",
  "images": [
    {
      "src": "/products/softsoap-liquid-hand-soap-refill-50oz/main.webp",
      "alt": "Softsoap Liquid Hand Soap Refill, 50 fl oz product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/softsoap-liquid-hand-soap-refill-50oz/angle.webp",
      "alt": "Softsoap Liquid Hand Soap Refill, 50 fl oz alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Softsoap Liquid Hand Soap Refill, 50 fl oz product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 3.5,
  "shippingWeight": 3.8,
  "featured": false,
  "weeklyEssential": true,
  "underTen": true,
  "relatedProductIds": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "active": true,
  "seoTitle": "Softsoap Liquid Hand Soap Refill, 50 fl oz | WB Groceries",
  "seoDescription": "Large liquid hand soap refill for bathroom and kitchen pumps.",
  "foodProduct": false,
  "synonyms": [
    "softsoap",
    "hand soap",
    "refill",
    "bathroom"
  ]
},
{
  "id": "wbg-068",
  "sku": "WBG-HSH-068",
  "upc": null,
  "slug": "cascade-platinum-dishwasher-pods-42-count",
  "brand": "Cascade",
  "manufacturer": "Procter & Gamble",
  "title": "Cascade Platinum Dishwasher Detergent Pods, 42 Count",
  "subtitle": "Automatic dishwasher detergent pacs",
  "category": "household",
  "secondaryCategories": [],
  "price": 15.99,
  "compareAtPrice": null,
  "currency": "USD",
  "packageSize": "42 Count",
  "packCount": 42,
  "unitPrice": "$0.38 / pod",
  "shortDescription": "Dishwasher detergent pods for everyday automatic dishwashing.",
  "fullDescription": "Cascade Platinum dishwasher detergent pods in a 42-count pack. Pod count is listed clearly before checkout.",
  "keyFeatures": [
    "42 dishwasher pods",
    "Platinum formula",
    "Automatic dishwasher use"
  ],
  "ingredients": null,
  "nutritionInformation": null,
  "allergenInformation": null,
  "storageInstructions": "Store sealed in a dry place. Keep out of reach of children.",
  "preparationInstructions": "Use one pod per load as directed on the package.",
  "images": [
    {
      "src": "/products/cascade-platinum-dishwasher-pods-42-count/main.webp",
      "alt": "Cascade Platinum Dishwasher Detergent Pods, 42 Count product package",
      "type": "main",
      "replacementRequired": true
    },
    {
      "src": "/products/cascade-platinum-dishwasher-pods-42-count/angle.webp",
      "alt": "Cascade Platinum Dishwasher Detergent Pods, 42 Count alternate package view",
      "type": "angle",
      "replacementRequired": true
    }
  ],
  "imageAltText": "Cascade Platinum Dishwasher Detergent Pods, 42 Count product package",
  "imageSource": "Studio packshot placeholder — exact authorized manufacturer or distributor packshot preferred before launch",
  "imageLicense": "Replacement recommended before production launch",
  "stockStatus": "in_stock",
  "maximumOrderQuantity": 10,
  "weight": 2.4,
  "shippingWeight": 2.7,
  "featured": true,
  "weeklyEssential": false,
  "underTen": false,
  "relatedProductIds": [
    "wbg-023",
    "wbg-024",
    "wbg-025"
  ],
  "active": true,
  "seoTitle": "Cascade Platinum Dishwasher Detergent Pods, 42 Count | WB Groceries",
  "seoDescription": "Dishwasher detergent pods for everyday automatic dishwashing.",
  "foodProduct": false,
  "synonyms": [
    "cascade",
    "dishwasher pods",
    "detergent",
    "kitchen"
  ]
}
] as Product[]);

export function getActiveProducts(): Product[] {
  return products.filter((product) => product.active);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getActiveProducts().find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return getActiveProducts().find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return getActiveProducts().filter(
    (product) =>
      product.category === category ||
      product.secondaryCategories.includes(category as Product["category"]),
  );
}

export function getWeeklyEssentials(): Product[] {
  return getActiveProducts().filter((product) => product.weeklyEssential);
}

export function getUnderTenProducts(): Product[] {
  return getActiveProducts().filter((product) => product.underTen || product.price < 10);
}

export function getPantryStaples(): Product[] {
  const pantryCategories = new Set([
    "pasta-pantry",
    "condiments-spreads",
    "canned-goods",
    "breakfast",
  ]);
  return getActiveProducts().filter((product) => pantryCategories.has(product.category));
}

export function getFeaturedProducts(): Product[] {
  return getActiveProducts().filter((product) => product.featured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const related = product.relatedProductIds
    .map((id) => getProductById(id))
    .filter((item): item is Product => Boolean(item));
  if (related.length >= limit) return related.slice(0, limit);
  const fillers = getActiveProducts().filter(
    (item) =>
      item.id !== product.id &&
      !related.some((r) => r.id === item.id) &&
      (item.category === product.category || item.brand === product.brand),
  );
  return [...related, ...fillers].slice(0, limit);
}

export function getBrands(): string[] {
  return [...new Set(getActiveProducts().map((product) => product.brand))].sort();
}

export function getCrossSells(productIds: string[]): Product[] {
  const suggestions: Product[] = [];
  const seen = new Set(productIds);
  for (const id of productIds) {
    const product = getProductById(id);
    if (!product) continue;
    for (const relatedId of product.relatedProductIds) {
      if (seen.has(relatedId)) continue;
      const related = getProductById(relatedId);
      if (!related) continue;
      seen.add(relatedId);
      suggestions.push(related);
    }
  }
  return suggestions.slice(0, 4);
}
