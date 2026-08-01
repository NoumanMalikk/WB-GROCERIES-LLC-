"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Heart, Menu, ShoppingBasket, User, X } from "lucide-react";
import { Logo } from "./logo";
import { CategoryNav, CategoryRail } from "./category-nav";
import { SearchBox } from "@/components/search/search-box";
import { categories } from "@/data/categories";
import { primaryNav, megaMenu, mobileExtraLinks } from "@/data/navigation";
import { useCartStore } from "@/lib/cart/store";
import { useWishlistStore } from "@/lib/cart/wishlist-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utilities/cn";
import { isSupabaseConfigured } from "@/data/store-config";

const categoryImages = new Map(categories.map((category) => [category.slug, category.image]));

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const count = useCartStore((s) => s.items.reduce((sum, i) => sum + i.quantity, 0));
  const wishlistCount = useWishlistStore((s) => s.productIds.length);
  const openCart = () => window.dispatchEvent(new CustomEvent("wb:open-cart"));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-border/70 bg-grocery text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:gap-6">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>

        <Logo variant="dark" />

        <div className="hidden min-w-0 flex-1 md:block">
          <SearchBox />
        </div>

        <nav className="ml-auto flex items-center gap-1 sm:gap-2" aria-label="Account and cart">
          <Link
            href="/wishlist"
            className="relative inline-flex h-11 min-w-11 items-center justify-center rounded-xl hover:bg-white/10"
            aria-label={`Wishlist, ${wishlistCount} items`}
          >
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-forest">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link
            href={isSupabaseConfigured() ? "/account" : "/account"}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-xl hover:bg-white/10"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-11 min-w-11 items-center justify-center rounded-xl hover:bg-white/10"
            aria-label={`Cart, ${count} items`}
          >
            <ShoppingBasket className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-forest">
                {count}
              </span>
            )}
          </button>
        </nav>
      </div>

      <CategoryNav />

      <div className="border-t border-white/10 px-4 pb-3 md:hidden">
        <SearchBox />
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-forest/50 transition lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "flex h-full w-[88%] max-w-sm flex-col bg-cream p-4 text-foreground shadow-xl transition duration-300",
            open ? "translate-x-0" : "-translate-x-full",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex shrink-0 items-center justify-between">
            <p className="font-heading text-lg font-bold text-grocery">Menu</p>
            <Button type="button" variant="secondary" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="mb-4 shrink-0">
            <SearchBox onNavigate={() => setOpen(false)} />
          </div>
          <nav className="min-h-0 flex-1 space-y-3 overflow-y-auto pb-10" aria-label="Mobile categories">
            {megaMenu.map((section) => (
              <details key={section.title} className="overflow-hidden rounded-xl border border-border bg-white">
                <summary className="flex cursor-pointer list-none items-center gap-3 p-3 font-semibold text-grocery">
                  <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-mint">
                    <Image
                      src={categoryImages.get(section.imageSlug) ?? "/brand/logo-icon.svg"}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-contain p-1"
                    />
                  </span>
                  <span className="flex-1">{section.title}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted transition-transform" aria-hidden />
                </summary>
                <ul className="space-y-1 border-t border-border/70 p-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-2 py-2 text-sm text-muted hover:bg-mint hover:text-grocery"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <ul className="space-y-1 rounded-xl border border-border bg-white p-2">
              {[...primaryNav.filter((i) => i.label === "Under $10" || i.label === "Weekly Essentials"), ...mobileExtraLinks].map(
                (link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-mint"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>

    {/*
      Below lg the category rail sits outside the sticky header so it scrolls
      away: keeping it pinned cost ~23% of a phone viewport on every scroll.
      Full category navigation stays available through the drawer.
    */}
    <div className="border-b border-border/70 bg-grocery text-white lg:hidden">
      <div className="mx-auto max-w-7xl px-4">
        <CategoryRail />
      </div>
    </div>
    </>
  );
}
