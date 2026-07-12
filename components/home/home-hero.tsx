"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { storeConfig } from "@/data/store-config";

export function HomeHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,#FFF9EE_0%,#E8F2E9_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-fresh">Grocery shopping made simpler</p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-grocery md:text-5xl lg:text-6xl">
            {storeConfig.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
            Shop familiar breakfast products, pantry staples, snacks, beverages and household essentials through one
            clear and convenient online store.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/collections/weekly-essentials"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gold px-6 font-semibold text-forest transition hover:bg-[#e5b03d]"
            >
              Shop Weekly Essentials
            </Link>
            <Link
              href="/categories"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-white px-6 font-semibold text-grocery transition hover:bg-mint"
            >
              Browse All Categories
            </Link>
          </div>
          <p className="mt-6 text-sm font-medium text-grocery">{storeConfig.locationPhrase}</p>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-border bg-cream shadow-[var(--shadow-card)]"
        >
          <Image
            src="/lifestyle/hero-pantry.svg"
            alt="Assorted pantry groceries including cereal, oats, coffee, pasta, sauce, peanut butter, cookies, crackers, canned goods and paper towels"
            fill
            priority
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
