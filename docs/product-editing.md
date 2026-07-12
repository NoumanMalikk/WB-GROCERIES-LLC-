# Product editing

Products live in `data/products.ts`. There is no admin dashboard.

## Change a title

Edit the `title` field and matching `seoTitle` / image alt text.

## Change a price

Update `price`. Keep every product at **$5.00 or higher**. Update `underTen` if the price crosses $10. Recalculate `unitPrice` when useful.

## Change package size or pack count

Update `packageSize`, `packCount`, `unitPrice`, shipping weights and related copy. Replace images if packaging changed.

## Replace an image

1. Add authorized files under `public/products/[slug]/`.
2. Update `images` paths in `data/products.ts`.
3. Update `data/image-credits.ts`.
4. Update `docs/image-sourcing.md`.

## Ingredients, nutrition, allergens

Only set these fields when verified for the exact package. Otherwise leave them `null`.

## Stock status

Set `stockStatus` to `in_stock`, `low_stock`, `out_of_stock` or `discontinued`.

## Add a product

Copy an existing product object, assign a new `id`, `sku`, `slug`, and fill every required field. Keep the catalogue intentional.

## Remove a product

Set `active: false` or remove the object carefully after checking related IDs.

## Feature a product

Set `featured: true` and/or `weeklyEssential: true`.
