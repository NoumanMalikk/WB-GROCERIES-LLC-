"use client";

import { cn } from "@/lib/utilities/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

const variants = {
  primary: "bg-gold text-forest hover:bg-[#e5b03d] shadow-sm",
  secondary: "bg-white text-grocery border border-border hover:bg-mint",
  ghost: "bg-transparent text-grocery hover:bg-mint",
  dark: "bg-grocery text-white hover:bg-forest",
  danger: "bg-error text-white hover:opacity-90",
} as const;

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10",
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 min-w-[44px] min-h-[44px]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";
