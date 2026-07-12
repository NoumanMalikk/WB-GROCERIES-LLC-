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
        "src": "/products/quaker-old-fashioned-oats-42oz/main.png",
        "alt": "Quaker Old Fashioned Oats, 42 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/quaker-old-fashioned-oats-42oz/angle.png",
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
        "src": "/products/cheerios-original-cereal-18oz/main.png",
        "alt": "Cheerios Original Cereal, 18 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/cheerios-original-cereal-18oz/angle.png",
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
        "src": "/products/kelloggs-frosted-flakes-17-3oz/main.png",
        "alt": "Kellogg's Frosted Flakes Cereal, 17.3 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/kelloggs-frosted-flakes-17-3oz/angle.png",
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
        "src": "/products/nature-valley-oats-honey-12-bars/main.png",
        "alt": "Nature Valley Oats 'n Honey Crunchy Granola Bars, 12 Bars product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/nature-valley-oats-honey-12-bars/angle.png",
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
        "src": "/products/folgers-classic-roast-ground-coffee-25-9oz/main.png",
        "alt": "Folgers Classic Roast Ground Coffee, 25.9 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/folgers-classic-roast-ground-coffee-25-9oz/angle.png",
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
        "src": "/products/lipton-black-tea-bags-100-count/main.png",
        "alt": "Lipton Black Tea Bags, 100 Count product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/lipton-black-tea-bags-100-count/angle.png",
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
        "src": "/products/barilla-spaghetti-16oz-two-pack/main.png",
        "alt": "Barilla Spaghetti Pasta, 16 oz, Two-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/barilla-spaghetti-16oz-two-pack/angle.png",
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
        "src": "/products/prego-traditional-italian-sauce-24oz/main.png",
        "alt": "Prego Traditional Italian Sauce, 24 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/prego-traditional-italian-sauce-24oz/angle.png",
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
        "src": "/products/kraft-original-macaroni-cheese-five-pack/main.png",
        "alt": "Kraft Original Macaroni and Cheese Dinner, Five-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/kraft-original-macaroni-cheese-five-pack/angle.png",
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
        "src": "/products/jif-creamy-peanut-butter-16oz/main.png",
        "alt": "Jif Creamy Peanut Butter, 16 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/jif-creamy-peanut-butter-16oz/angle.png",
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
        "src": "/products/smuckers-strawberry-preserves-18oz/main.png",
        "alt": "Smucker's Strawberry Preserves, 18 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/smuckers-strawberry-preserves-18oz/angle.png",
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
        "src": "/products/heinz-tomato-ketchup-32oz/main.png",
        "alt": "Heinz Tomato Ketchup, 32 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/heinz-tomato-ketchup-32oz/angle.png",
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
        "src": "/products/hellmanns-real-mayonnaise-30oz/main.png",
        "alt": "Hellmann's Real Mayonnaise, 30 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/hellmanns-real-mayonnaise-30oz/angle.png",
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
        "src": "/products/bushs-original-baked-beans-28oz/main.png",
        "alt": "Bush's Original Baked Beans, 28 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/bushs-original-baked-beans-28oz/angle.png",
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
        "src": "/products/del-monte-whole-kernel-corn-four-pack/main.png",
        "alt": "Del Monte Whole Kernel Corn, 15.25 oz, Four-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/del-monte-whole-kernel-corn-four-pack/angle.png",
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
        "src": "/products/starkist-chunk-light-tuna-four-pack/main.png",
        "alt": "StarKist Chunk Light Tuna in Water, 5 oz, Four-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/starkist-chunk-light-tuna-four-pack/angle.png",
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
        "src": "/products/oreo-original-cookies-14-3oz/main.png",
        "alt": "Oreo Original Chocolate Sandwich Cookies, 14.3 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/oreo-original-cookies-14-3oz/angle.png",
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
        "src": "/products/ritz-original-crackers-13-7oz/main.png",
        "alt": "Ritz Original Crackers, 13.7 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/ritz-original-crackers-13-7oz/angle.png",
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
        "src": "/products/lays-classic-potato-chips-8oz/main.png",
        "alt": "Lay's Classic Potato Chips, 8 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/lays-classic-potato-chips-8oz/angle.png",
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
        "src": "/products/doritos-nacho-cheese-9-25oz/main.png",
        "alt": "Doritos Nacho Cheese Flavored Tortilla Chips, 9.25 oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/doritos-nacho-cheese-9-25oz/angle.png",
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
        "src": "/products/coca-cola-original-12-pack/main.png",
        "alt": "Coca-Cola Original Taste, 12 fl oz Cans, 12-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/coca-cola-original-12-pack/angle.png",
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
        "src": "/products/gatorade-variety-pack-12-count/main.png",
        "alt": "Gatorade Thirst Quencher Variety Pack, 12 fl oz Bottles, 12-Pack product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/gatorade-variety-pack-12-count/angle.png",
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
        "src": "/products/tide-simply-clean-fresh-84oz/main.png",
        "alt": "Tide Simply Clean and Fresh Liquid Laundry Detergent, 84 fl oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/tide-simply-clean-fresh-84oz/angle.png",
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
        "src": "/products/dawn-ultra-dishwashing-liquid-18oz/main.png",
        "alt": "Dawn Ultra Dishwashing Liquid, 18 fl oz product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/dawn-ultra-dishwashing-liquid-18oz/angle.png",
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
        "src": "/products/bounty-essentials-six-double-rolls/main.png",
        "alt": "Bounty Essentials Paper Towels, Six Double Rolls product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/bounty-essentials-six-double-rolls/angle.png",
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
        "src": "/products/glad-forceflexplus-13-gallon-40-count/main.png",
        "alt": "Glad ForceFlexPlus Tall Kitchen Trash Bags, 13 Gallon, 40 Count product package",
        "type": "main",
        "replacementRequired": true
      },
      {
        "src": "/products/glad-forceflexplus-13-gallon-40-count/angle.png",
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
