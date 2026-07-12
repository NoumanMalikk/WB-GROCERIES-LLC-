import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const src = variant === "dark" ? "/brand/logo-horizontal-dark.svg" : "/brand/logo-horizontal.svg";
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="WB Groceries home">
      <Image src={src} alt="WB Groceries" width={200} height={46} priority className="h-10 w-auto md:h-11" />
    </Link>
  );
}
