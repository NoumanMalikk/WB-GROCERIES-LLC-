"use client";

import { Button } from "./button";
import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  value,
  min = 1,
  max = 10,
  onChange,
  id,
}: {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  id?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2" role="group" aria-label="Quantity">
      <Button
        type="button"
        variant="secondary"
        size="icon"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <input
        id={id}
        className="h-11 w-14 rounded-xl border border-border bg-white text-center tabular-nums"
        value={value}
        inputMode="numeric"
        aria-live="polite"
        onChange={(e) => {
          const next = Number(e.target.value.replace(/\D/g, ""));
          if (Number.isNaN(next)) return;
          onChange(Math.min(max, Math.max(min, next)));
        }}
      />
      <Button
        type="button"
        variant="secondary"
        size="icon"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
