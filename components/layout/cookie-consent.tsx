"use client";

import { useConsentStore } from "@/lib/analytics/consent";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const decided = useConsentStore((s) => s.decided);
  const acceptAll = useConsentStore((s) => s.acceptAll);
  const rejectNonEssential = useConsentStore((s) => s.rejectNonEssential);

  if (decided) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-card)] md:inset-x-auto md:right-4"
    >
      <p className="text-sm text-foreground">
        We use necessary cookies to run the store. Analytics and marketing cookies load only after you choose to allow them.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button onClick={acceptAll}>Allow all</Button>
        <Button variant="secondary" onClick={rejectNonEssential}>
          Necessary only
        </Button>
      </div>
    </div>
  );
}
