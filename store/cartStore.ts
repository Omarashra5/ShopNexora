import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

type CartItem = Product & {
  quantity: number;
};

type CartState = {
  items: CartItem[];

  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addToCart: (product) =>
        set((state) => {
          const exists = state.items.find(
            (i) => i.id === product.id
          );

          if (exists) {
            return {
              items: state.items.map((i) =>
                i.id === product.id
                  ? {
                      ...i,
                      quantity: i.quantity + 1,
                    }
                  : i
              ),
            };
          }

          return {
            items: [
              ...state.items,
              { ...product, quantity: 1 },
            ],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter(
            (i) => i.id !== id
          ),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),
    }),

    {
      name: "cart-storage", // 👈 key in localStorage
    }
  )
);