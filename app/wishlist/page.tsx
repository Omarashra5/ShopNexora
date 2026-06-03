"use client";

import { useWishlistStore } from "@/store/wishlistStore";
import Link from "next/link";
import { Trash } from "lucide-react";
import { motion } from "framer-motion";

export default function WishlistPage() {
  const { items, removeFromWishlist } =
    useWishlistStore();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="container mx-auto px-6 py-10">

        {/* HEADER */}
        <h1 className="text-5xl font-black mb-10">
          Wishlist 
        </h1>

        {/* EMPTY STATE */}
        {items.length === 0 && (
          <div className="text-center py-24 text-slate-400">
            No saved items yet 
          </div>
        )}

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="
                group
                rounded-3xl
                overflow-hidden
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                hover:bg-white/10
                transition
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden h-44">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-500
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-4">

                <h2 className="font-semibold line-clamp-1">
                  {item.title}
                </h2>

                <p className="text-slate-400 mt-1">
                  ${item.price}
                </p>

                {/* ACTIONS */}
                <div className="flex justify-between items-center mt-4">

                  <Link
                    href={`/products/${item.id}`}
                    className="
                      text-sm
                      text-cyan-400
                      hover:text-cyan-300
                      transition
                    "
                  >
                    View product
                  </Link>

                  <button
                    onClick={() =>
                      removeFromWishlist(item.id)
                    }
                    className="
                      w-9 h-9
                      flex items-center justify-center
                      rounded-xl
                      bg-red-500/10
                      hover:bg-red-500/20
                      text-red-400
                      transition
                    "
                  >
                    <Trash size={16} />
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
}