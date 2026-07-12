"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  setPreferences: (prefs: { analytics: boolean; marketing: boolean }) => void;
}

export const useConsentStore = create<ConsentState>()(
  persist(
    (set) => ({
      necessary: true,
      analytics: false,
      marketing: false,
      decided: false,
      acceptAll: () => set({ analytics: true, marketing: true, decided: true }),
      rejectNonEssential: () => set({ analytics: false, marketing: false, decided: true }),
      setPreferences: ({ analytics, marketing }) =>
        set({ analytics, marketing, decided: true }),
    }),
    { name: "wb-groceries-consent" },
  ),
);

export function canTrackMarketing(decided: boolean, marketing: boolean) {
  return decided && marketing;
}
