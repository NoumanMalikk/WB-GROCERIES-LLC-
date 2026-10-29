import Image from "next/image";
import { cn } from "@/lib/utilities/cn";

const tones = {
  butter: "bg-butter",
  sage: "bg-sage",
  blush: "bg-blush",
  sky: "bg-sky",
  peach: "bg-peach",
} as const;

export type BannerTone = keyof typeof tones;

/**
 * Tinted header for listing pages. The packshot collage is multiplied into the
 * tint so its white studio backdrop disappears instead of reading as a box.
 */
export function PageBanner({
  eyebrow,
  title,
  description,
  image,
  tone = "butter",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  tone?: BannerTone;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border/60", tones[tone])}>
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 py-9 md:grid-cols-[1fr_minmax(0,20rem)] md:py-8 lg:grid-cols-[1fr_minmax(0,24rem)]">
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fresh">{eyebrow}</p>
          )}
          <h1 className="mt-2 font-heading text-4xl font-bold leading-tight text-grocery md:text-5xl">{title}</h1>
          {description && <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{description}</p>}
        </div>
        {image && (
          <div className="relative hidden aspect-[5/3] md:block">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 22rem, 26rem"
              className="object-contain mix-blend-multiply"
            />
          </div>
        )}
      </div>
    </section>
  );
}
