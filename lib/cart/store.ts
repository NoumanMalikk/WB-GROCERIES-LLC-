"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (productId: string, quantity?: number, max?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number, max?: number) => void;
  clearCart: () => void;
  getCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (productId, quantity = 1, max = 10) => {
        set((state) => {
          const existing = state.items.find((item) => item.productId === productId);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.productId === productId
                  ? { ...item, quantity: Math.min(max, item.quantity + quantity) }
                  : item,
              ),
            };
          }
          return {
            items: [...state.items, { productId, quantity: Math.min(max, quantity) }],
          };
        });
      },
      removeItem: (productId) =>
        set((state) => ({ items: state.items.filter((item) => item.productId !== productId) })),
      setQuantity: (productId, quantity, max = 10) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: Math.min(max, quantity) }
              : item,
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    { name: "wb-groceries-cart" },
  ),
);
