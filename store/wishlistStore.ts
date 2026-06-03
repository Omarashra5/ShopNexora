"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

interface WishlistStore {
  items: Product[];

  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
}

export const useWishlistStore =
  create<WishlistStore>()(
    persist(
      (set) => ({
        items: [],

        addToWishlist: (product) =>
          set((state) => {
            const exists = state.items.find(
              (item) => item.id === product.id
            );

            if (exists) return state;

            return {
              items: [
                ...state.items,
                product,
              ],
            };
          }),

        removeFromWishlist: (id) =>
          set((state) => ({
            items: state.items.filter(
              (item) => item.id !== id
            ),
          })),

        clearWishlist: () => set({ items: [] }),
      }),
      {
        name: "wishlist-storage",
      }
    )
  );