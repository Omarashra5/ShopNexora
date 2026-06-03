"use client";

import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const handleAddToCart = () => {
    addToCart(product);

    toast.success(
      `${product.title} added to cart`
    );
  };

  return (
    <button
  onClick={handleAddToCart}
  className="
  mt-3
  mb-3
    group
    relative
    overflow-hidden
    w-full
    h-12
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    via-cyan-500
    to-blue-600
    text-white
    font-semibold
  "
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    <ShoppingCart size={18} />
    Add to Cart
  </span>

  <div
    className="
      absolute
      inset-0
      -translate-x-full
      bg-white/20
      skew-x-12
      transition-transform
      duration-700
      group-hover:translate-x-[250%]
    "
  />
</button>
  );
}