import Image from "next/image";
import Link from "next/link";
import type { ProductCardData } from "@/data/catalog";
import { formatPrice } from "@/lib/utilities/format";

/** Compact, link-only product tile for editorial bands (no cart controls). */
export function MiniProduct({ product, sizes = "(max-width: 768px) 40vw, 200px" }: { product: ProductCardData; sizes?: string }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white text-foreground shadow-[0_14px_30px_-18px_rgba(16,47,36,0.5)] transition duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] bg-[#faf7ef]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes={sizes}
          className="object-contain p-4 mix-blend-multiply transition duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="px-3.5 pb-3.5 pt-3">
        <p className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug">{product.title}</p>
        <p className="mt-1 font-bold tabular-nums text-grocery">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
