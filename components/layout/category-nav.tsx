"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { categories } from "@/data/categories";
import { megaMenu, primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utilities/cn";

const OPEN_DELAY_MS = 70;
const CLOSE_DELAY_MS = 160;

const categoryImages = new Map(categories.map((category) => [category.slug, category.image]));

const quickLinks = [
  { label: "Shop all products", href: "/shop" },
  { label: "All categories", href: "/categories" },
  { label: "Under $10", href: "/collections/under-10" },
  { label: "Weekly Essentials", href: "/collections/weekly-essentials" },
];

function useIsActive() {
  const pathname = usePathname();
  return (href: string) => pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Horizontal category rail. Rendered inside the sticky header on desktop and
 * as a scroll-away row under it on mobile, where sticky space is scarce.
 */
export function CategoryRail({ className }: { className?: string }) {
  const isActive = useIsActive();

  return (
    <nav
      className={cn("no-scrollbar flex min-w-0 items-center gap-0.5 overflow-x-auto py-2", className)}
      aria-label="Product categories"
    >
      {primaryNav.map((item) => (
        <Link
          key={item.href + item.label}
          href={item.href}
          aria-current={isActive(item.href) ? "page" : undefined}
          className={cn(
            "whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium transition",
            isActive(item.href) ? "bg-white/18 text-white" : "text-white/85 hover:bg-white/12 hover:text-white",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

/** Desktop category bar: the rail plus the Categories mega panel. */
export function CategoryNav() {
  const [open, setOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState(megaMenu[0]?.title ?? "");
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeSection = megaMenu.find((section) => section.title === activeTitle) ?? megaMenu[0];

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const scheduleOpen = useCallback(
    (next: boolean, delay: number) => {
      clearTimer();
      timerRef.current = setTimeout(() => setOpen(next), delay);
    },
    [clearTimer],
  );

  // The panel must never survive a navigation. Resetting during render (rather
  // than in an effect) avoids a frame where the old panel is still painted.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Cancel any hover-intent still pending when the route changes or we unmount.
  useEffect(() => clearTimer, [pathname, clearTimer]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      clearTimer();
      setOpen(false);
      triggerRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (containerRef.current?.contains(event.target as Node)) return;
      clearTimer();
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, clearTimer]);

  return (
    <div
      ref={containerRef}
      className="relative hidden border-t border-white/10 lg:block"
      onPointerLeave={() => scheduleOpen(false, CLOSE_DELAY_MS)}
      onBlur={(event) => {
        if (event.currentTarget.contains(event.relatedTarget as Node)) return;
        clearTimer();
        setOpen(false);
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center px-4">
        <button
          ref={triggerRef}
          type="button"
          className={cn(
            "mr-2 inline-flex h-10 shrink-0 items-center gap-2 rounded-xl px-3 text-sm font-semibold transition",
            open ? "bg-gold text-forest" : "text-white hover:bg-white/12",
          )}
          aria-expanded={open}
          aria-controls="category-mega-menu"
          aria-haspopup="true"
          onClick={() => {
            clearTimer();
            setOpen((value) => !value);
          }}
          onPointerEnter={() => scheduleOpen(true, OPEN_DELAY_MS)}
        >
          <LayoutGrid className="h-4 w-4" aria-hidden />
          Categories
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden />
        </button>

        <span className="mr-2 h-6 w-px shrink-0 bg-white/15" aria-hidden />

        <CategoryRail className="flex-1" />
      </div>

      {open && activeSection && (
        <div
          id="category-mega-menu"
          className="wb-menu-in absolute inset-x-0 top-full z-50 border-b border-border/80 bg-white text-foreground shadow-[0_28px_40px_-20px_rgba(16,47,36,0.35)]"
          onPointerEnter={clearTimer}
        >
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[15.5rem_minmax(0,1fr)_14.5rem]">
            <nav className="border-b border-border bg-[#f7faf7] lg:border-b-0 lg:border-r" aria-label="Category groups">
              <ul className="p-2">
                {megaMenu.map((section) => {
                  const selected = section.title === activeSection.title;
                  return (
                    <li key={section.title}>
                      <button
                        type="button"
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left transition",
                          selected
                            ? "bg-white text-grocery shadow-sm ring-1 ring-border"
                            : "text-muted hover:bg-white/80 hover:text-grocery",
                        )}
                        onFocus={() => setActiveTitle(section.title)}
                        onPointerEnter={() => setActiveTitle(section.title)}
                      >
                        <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-border/80">
                          <Image
                            src={categoryImages.get(section.imageSlug) ?? "/brand/logo-icon.svg"}
                            alt=""
                            fill
                            sizes="36px"
                            className="object-contain p-1"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold tracking-tight">{section.title}</span>
                          <span className="block truncate text-xs text-muted">{section.links.length} aisles</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="px-5 py-5 sm:px-6">
              <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
                <div>
                  <p className="text-xs font-medium text-fresh">Shop by aisle</p>
                  <h3 className="mt-0.5 font-heading text-xl font-bold tracking-tight text-grocery">
                    {activeSection.title}
                  </h3>
                </div>
                <Link
                  href={activeSection.href}
                  className="shrink-0 text-sm font-semibold text-grocery underline-offset-4 hover:underline"
                >
                  View all
                </Link>
              </div>

              <ul className="mt-4 grid gap-1 sm:grid-cols-2">
                {activeSection.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground transition hover:bg-mint hover:text-grocery"
                    >
                      <span>{link.label}</span>
                      <span className="text-muted" aria-hidden>
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted transition hover:text-grocery"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <aside className="hidden border-t border-border bg-mint/40 p-5 lg:block lg:border-l lg:border-t-0">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <Image
                  src={categoryImages.get(activeSection.imageSlug) ?? "/categories/pasta-pantry.webp"}
                  alt=""
                  fill
                  sizes="232px"
                  className="object-contain p-3 transition duration-300"
                />
              </div>
              <p className="font-heading text-base font-bold leading-snug text-grocery">
                {activeSection.title} essentials
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Browse this aisle or jump to weekly restock picks.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href={activeSection.href}
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-grocery px-4 text-sm font-semibold text-white transition hover:bg-forest"
                >
                  Shop {activeSection.title.split("&")[0].trim()}
                </Link>
                <Link
                  href="/collections/weekly-essentials"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-white px-4 text-sm font-semibold text-grocery transition hover:bg-mint"
                >
                  Weekly Essentials
                </Link>
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}
