import { cn } from "@/lib/utilities/cn";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-lg bg-mint px-2.5 py-1 text-xs font-semibold text-grocery", className)}>
      {children}
    </span>
  );
}
