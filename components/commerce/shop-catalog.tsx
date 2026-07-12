"use client";

import { useMemo, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ProductCardData } from "@/data/catalog";
import { catalogBrands } from "@/data/catalog";
import { filterProducts, sortProducts, type ProductSort } from "@/lib/search";
import { categories } from "@/data/categories";
import { ProductGrid } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function ShopCatalog({
  products,
  title,
  description,
  hideCategoryFilter = false,
}: {
  products: ProductCardData[];
  title: string;
  description?: string;
  hideCategoryFilter?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [, startTransition] = useTransition();

  const queryKey = searchParams.toString();
  const filters = useMemo(
    () => ({
      query: searchParams.get("q") ?? undefined,
      category: searchParams.get("category") ?? undefined,
      brand: searchParams.get("brand") ?? undefined,
      underTen: searchParams.get("underTen") === "1",
      weeklyEssential: searchParams.get("weekly") === "1",
      availability: searchParams.get("availability") ?? undefined,
      minPrice: searchParams.get("min") ? Number(searchParams.get("min")) : undefined,
      maxPrice: searchParams.get("max") ? Number(searchParams.get("max")) : undefined,
      packCount: searchParams.get("pack") ? Number(searchParams.get("pack")) : undefined,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [queryKey],
  );
  const sort = (searchParams.get("sort") as ProductSort) || "featured";

  const filtered = useMemo(() => sortProducts(filterProducts(products, filters), sort), [products, filters, sort]);

  function updateParams(entries: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(entries).forEach(([key, value]) => {
      if (!value) params.delete(key);
      else params.set(key, value);
    });
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  const chips = [
    filters.category && { key: "category", label: `Category: ${filters.category}` },
    filters.brand && { key: "brand", label: `Brand: ${filters.brand}` },
    filters.underTen && { key: "underTen", label: "Under $10" },
    filters.weeklyEssential && { key: "weekly", label: "Weekly essentials" },
    filters.availability && { key: "availability", label: filters.availability },
    filters.packCount && { key: "pack", label: `Pack: ${filters.packCount}` },
  ].filter(Boolean) as { key: string; label: string }[];

  const FilterPanel = (
    <div className="space-y-6">
      {!hideCategoryFilter && (
        <fieldset>
          <legend className="mb-2 text-sm font-bold text-grocery">Category</legend>
          <div className="space-y-1">
            {categories.map((category) => (
              <label key={category.slug} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category.slug}
                  onChange={() => updateParams({ category: category.slug })}
                />
                {category.name}
              </label>
            ))}
            <button type="button" className="text-xs font-semibold text-grocery" onClick={() => updateParams({ category: null })}>
              Clear category
            </button>
          </div>
        </fieldset>
      )}
      <fieldset>
        <legend className="mb-2 text-sm font-bold text-grocery">Brand</legend>
        <select
          className="h-11 w-full rounded-xl border border-border bg-white px-3 text-sm"
          value={filters.brand ?? ""}
          onChange={(e) => updateParams({ brand: e.target.value || null })}
        >
          <option value="">All brands</option>
          {catalogBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset className="space-y-2">
        <legend className="mb-2 text-sm font-bold text-grocery">Price & flags</legend>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!filters.underTen} onChange={(e) => updateParams({ underTen: e.target.checked ? "1" : null })} />
          Under $10
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!filters.weeklyEssential} onChange={(e) => updateParams({ weekly: e.target.checked ? "1" : null })} />
          Weekly essentials
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={filters.availability === "in_stock"}
            onChange={(e) => updateParams({ availability: e.target.checked ? "in_stock" : null })}
          />
          In stock only
        </label>
      </fieldset>
      <fieldset>
        <legend className="mb-2 text-sm font-bold text-grocery">Pack count</legend>
        <select
          className="h-11 w-full rounded-xl border border-border bg-white px-3 text-sm"
          value={filters.packCount ?? ""}
          onChange={(e) => updateParams({ pack: e.target.value || null })}
        >
          <option value="">Any</option>
          {[1, 2, 4, 5, 6, 12, 40, 100].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </fieldset>
      <Button
        variant="secondary"
        className="w-full"
        onClick={() => router.push(pathname)}
      >
        Clear all
      </Button>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-grocery">{title}</h1>
        {description && <p className="mt-3 text-muted">{description}</p>}
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted" aria-live="polite">
          Showing {filtered.length} product{filtered.length === 1 ? "" : "s"}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary" className="lg:hidden" onClick={() => setMobileFilters(true)}>
            Filters
          </Button>
          <label className="text-sm">
            Sort{" "}
            <select
              className="ml-2 h-11 rounded-xl border border-border bg-white px-3"
              value={sort}
              onChange={(e) => updateParams({ sort: e.target.value })}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="name-asc">Name: A–Z</option>
              <option value="name-desc">Name: Z–A</option>
            </select>
          </label>
        </div>
      </div>

      {chips.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              className="inline-flex items-center gap-1 rounded-full bg-mint px-3 py-1.5 text-xs font-semibold text-grocery"
              onClick={() => updateParams({ [chip.key]: null })}
            >
              {chip.label} <X className="h-3 w-3" />
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="hidden rounded-2xl border border-border bg-white p-4 lg:block">{FilterPanel}</aside>
        <div>
          <ProductGrid products={filtered} />
        </div>
      </div>

      {mobileFilters && (
        <div className="fixed inset-0 z-50 bg-forest/50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <div className="absolute inset-y-0 right-0 w-[90%] max-w-sm overflow-y-auto bg-cream p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-lg font-bold">Filters</h2>
              <Button variant="secondary" size="icon" aria-label="Close filters" onClick={() => setMobileFilters(false)}>
                <X className="h-3 w-3" />
              </Button>
            </div>
            {FilterPanel}
          </div>
        </div>
      )}
    </div>
  );
}
