"use client";

import { Heart } from "lucide-react";
import { Product } from "@/types/product";
import { useWishlistStore } from "@/store/wishlistStore";
import toast from "react-hot-toast";

export default function WishlistButton({
  product,
}: {
  product: Product;
}) {
  const { addToWishlist, items } =
    useWishlistStore();

  const isLiked = items.some(
    (item) => item.id === product.id
  );

  const handleWishlist = () => {
    if (isLiked) return;

    addToWishlist(product);

    toast.success(
      "Added to wishlist "
    );
  };

  return (
    <button
      onClick={handleWishlist}
      aria-label="wishlist"
      className={`
        h-11
        w-11
        rounded-full
        flex
        items-center
        justify-center
        backdrop-blur-xl
        border
        transition-all
        duration-300
        hover:scale-110
        active:scale-95
        ${
          isLiked
            ? "bg-red-500 border-red-500 text-white shadow-lg shadow-red-500/40"
            : "bg-white/10 border-white/10 text-white hover:bg-white/20"
        }
      `}
    >
      <Heart
        size={20}
        fill={
          isLiked
            ? "currentColor"
            : "none"
        }
      />
    </button>
  );
}