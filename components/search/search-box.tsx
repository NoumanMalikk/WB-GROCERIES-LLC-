"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Search, X } from "lucide-react";
import { searchCatalog } from "@/data/catalog";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utilities/cn";

const RECENT_KEY = "wb-groceries-recent-searches";

function subscribeRecent(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("wb:recent-searches", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("wb:recent-searches", onStoreChange);
  };
}

function readRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
  } catch {
    return [];
  }
}

export function SearchBox({ onNavigate }: { onNavigate?: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const recent = useSyncExternalStore(subscribeRecent, readRecent, () => []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return searchCatalog(query).slice(0, 6);
  }, [query]);

  const announce = !open
    ? ""
    : query.trim()
      ? `${suggestions.length} suggestions available`
      : `${recent.length} recent searches`;

  function saveRecent(value: string) {
    const next = [value, ...recent.filter((item) => item !== value)].slice(0, 6);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("wb:recent-searches"));
  }

  function go(value: string) {
    const q = value.trim();
    if (!q) return;
    saveRecent(q);
    setOpen(false);
    onNavigate?.();
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <div ref={rootRef} className="relative w-full">
      <label htmlFor="site-search" className="sr-only">
        Search products
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          id="site-search"
          role="combobox"
          aria-expanded={open}
          aria-controls="search-suggestions"
          aria-autocomplete="list"
          aria-activedescendant={open ? `search-option-${active}` : undefined}
          className="h-11 w-full rounded-xl border border-transparent bg-white pl-10 pr-10 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          placeholder="Search oats, coffee, pasta, snacks..."
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setOpen(true);
          }}
          onKeyDown={(e) => {
            const options = query.trim() ? suggestions : recent.map((r) => ({ id: r, title: r }));
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((v) => Math.min(v + 1, Math.max(options.length - 1, 0)));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((v) => Math.max(v - 1, 0));
            } else if (e.key === "Enter") {
              e.preventDefault();
              if (query.trim() && suggestions[active]) {
                onNavigate?.();
                saveRecent(query.trim());
                router.push(`/product/${suggestions[active].slug}`);
                setOpen(false);
              } else if (!query.trim() && recent[active]) {
                go(recent[active]);
              } else {
                go(query);
              }
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
        />
        {query && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted hover:bg-mint"
            aria-label="Clear search"
            onClick={() => setQuery("")}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="sr-only" aria-live="polite">
        {announce}
      </div>
      {open && (
        <div
          id="search-suggestions"
          role="listbox"
          className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]"
        >
          {!query.trim() && recent.length > 0 && (
            <div className="p-2">
              <p className="px-2 py-1 text-xs font-semibold uppercase text-muted">Recent</p>
              {recent.map((item, index) => (
                <button
                  key={item}
                  id={`search-option-${index}`}
                  role="option"
                  aria-selected={active === index}
                  className={cn("flex w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-mint", active === index && "bg-mint")}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => go(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
          {query.trim() && suggestions.length === 0 && (
            <div className="p-4 text-sm text-muted">
              No products found. Try oats, coffee, pasta, chips or cleaning.
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  ["/category/breakfast", "Breakfast"],
                  ["/category/snacks", "Snacks"],
                  ["/category/household", "Household"],
                ].map(([href, label]) => (
                  <Link key={href} href={href} className="rounded-lg bg-mint px-3 py-1.5 text-grocery" onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {suggestions.map((product, index) => (
            <Link
              key={product.id}
              id={`search-option-${index}`}
              role="option"
              aria-selected={active === index}
              href={`/product/${product.slug}`}
              className={cn("flex items-center gap-3 px-3 py-2 hover:bg-mint", active === index && "bg-mint")}
              onMouseEnter={() => setActive(index)}
              onClick={() => {
                saveRecent(query.trim());
                setOpen(false);
                onNavigate?.();
              }}
            >
              <Image src={product.image} alt="" width={44} height={44} className="rounded-lg bg-white object-contain" />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{product.title}</span>
                <span className="block text-xs text-muted">{product.brand}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
