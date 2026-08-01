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

/** Desktop category bar: the rail plus the "All Categories" mega panel. */
export function CategoryNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
            open ? "bg-white text-grocery" : "text-white hover:bg-white/12",
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
          All Categories
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden />
        </button>

        <span className="mr-2 h-6 w-px shrink-0 bg-white/15" aria-hidden />

        <CategoryRail className="flex-1" />
      </div>

      {open && (
        <div id="category-mega-menu" className="wb-menu-in absolute inset-x-0 top-full z-50" onPointerEnter={clearTimer}>
          <div className="mx-auto max-w-7xl px-4 pb-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-white text-foreground shadow-[0_24px_48px_-12px_rgba(16,47,36,0.28)]">
              <div className="grid gap-px bg-border/70 lg:grid-cols-[repeat(4,minmax(0,1fr))_17rem]">
                {megaMenu.map((section) => (
                  <div key={section.title} className="bg-white p-5">
                    <Link href={section.href} className="group mb-3 flex items-center gap-3">
                      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-mint">
                        <Image
                          src={categoryImages.get(section.imageSlug) ?? "/brand/logo-icon.svg"}
                          alt=""
                          fill
                          sizes="40px"
                          className="object-contain p-1"
                        />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.08em] text-grocery group-hover:underline">
                        {section.title}
                      </span>
                    </Link>
                    <ul className="space-y-0.5">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="block rounded-lg px-2 py-1.5 text-sm text-muted transition hover:bg-mint hover:text-grocery"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="flex flex-col bg-mint/50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-fresh">This week</p>
                  <h3 className="mt-1.5 font-heading text-base font-bold leading-snug text-grocery">
                    Restock the basics in one order
                  </h3>
                  {/* Flexible so the panel height follows the link columns, not the image. */}
                  <div className="relative mt-3 min-h-24 flex-1 overflow-hidden rounded-xl bg-white">
                    <Image
                      src="/categories/pasta-pantry.webp"
                      alt=""
                      fill
                      sizes="272px"
                      className="object-contain p-2"
                    />
                  </div>
                  <Link
                    href="/collections/weekly-essentials"
                    className="mt-3 inline-flex h-10 items-center justify-center rounded-xl bg-grocery px-4 text-sm font-semibold text-white transition hover:bg-forest"
                  >
                    Shop Weekly Essentials
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border bg-cream/70 px-5 py-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold text-grocery transition hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
