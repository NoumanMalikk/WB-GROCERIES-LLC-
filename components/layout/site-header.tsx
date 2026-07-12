"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Menu, ShoppingBasket, User, X, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { SearchBox } from "@/components/search/search-box";
import { primaryNav, megaMenu, mobileExtraLinks } from "@/data/navigation";
import { useCartStore } from "@/lib/cart/store";
import { useWishlistStore } from "@/lib/cart/wishlist-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utilities/cn";
import { isSupabaseConfigured } from "@/data/store-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
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

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-2 text-sm">
          <div className="relative hidden lg:block">
            <button
              type="button"
              className="inline-flex h-10 items-center gap-1 rounded-xl px-3 hover:bg-white/10"
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen((v) => !v)}
              onBlur={() => setTimeout(() => setMegaOpen(false), 150)}
            >
              Categories <ChevronDown className="h-4 w-4" />
            </button>
            {megaOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 grid w-[720px] grid-cols-4 gap-4 rounded-2xl border border-border bg-white p-4 text-foreground shadow-[var(--shadow-card)]">
                {megaMenu.map((section) => (
                  <div key={section.title}>
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">{section.title}</p>
                    <ul className="space-y-1">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className="block rounded-lg px-2 py-1.5 hover:bg-mint">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          {primaryNav.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="whitespace-nowrap rounded-xl px-3 py-2 hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-3 md:hidden">
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
            "h-full w-[88%] max-w-sm bg-cream p-4 text-foreground shadow-xl transition duration-300",
            open ? "translate-x-0" : "-translate-x-full",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="font-heading text-lg font-bold text-grocery">Menu</p>
            <Button type="button" variant="secondary" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="mb-4">
            <SearchBox onNavigate={() => setOpen(false)} />
          </div>
          <nav className="space-y-4 overflow-y-auto pb-10" aria-label="Mobile categories">
            {megaMenu.map((section) => (
              <details key={section.title} className="rounded-xl border border-border bg-white p-3">
                <summary className="cursor-pointer font-semibold text-grocery">{section.title}</summary>
                <ul className="mt-2 space-y-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="block rounded-lg px-2 py-2 hover:bg-mint" onClick={() => setOpen(false)}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <ul className="space-y-1">
              {[...primaryNav.filter((i) => i.label === "Under $10" || i.label === "Weekly Essentials"), ...mobileExtraLinks].map(
                (link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="block rounded-xl px-3 py-2 font-medium hover:bg-mint" onClick={() => setOpen(false)}>
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
  );
}
