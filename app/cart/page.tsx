"use client";

import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";
import { Trash } from "lucide-react";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-10">

      {/* HEADER */}
      <h1 className="text-3xl md:text-5xl font-black mb-8 md:mb-10">
        Shopping Cart
      </h1>

      {/* EMPTY */}
      {items.length === 0 && (
        <div className="text-center py-20 md:py-24 text-slate-400">
          Your cart is empty
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

        {/* ITEMS */}
        <div className="lg:col-span-2 space-y-4 md:space-y-5">

          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              className="
                flex flex-col sm:flex-row
                gap-4 md:gap-5
                items-start sm:items-center
                p-4 md:p-5
                rounded-2xl md:rounded-3xl
                bg-white/5 border border-white/10
                backdrop-blur-xl
                hover:bg-white/10
                transition
              "
            >

              {/* IMAGE */}
              <div className="
                w-full sm:w-24
                h-40 sm:h-24
                rounded-2xl overflow-hidden
                bg-white/5 border border-white/10
                flex-shrink-0
              ">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 w-full">

                <h2 className="font-semibold text-base md:text-lg line-clamp-1">
                  {item.title}
                </h2>

                <p className="text-slate-400 text-sm md:text-base">
                  ${item.price}
                </p>

                <p className="text-cyan-400 font-semibold mt-1 text-sm md:text-base">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>

              </div>

              {/* CONTROLS */}
              <div className="
                flex items-center justify-between sm:justify-end
                w-full sm:w-auto
                gap-3 mt-2 sm:mt-0
              ">

                <div className="flex items-center gap-2">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 hover:bg-white/20"
                  >
                    -
                  </button>

                  <span className="w-6 text-center font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 hover:bg-white/20"
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="
                    w-9 h-9 md:w-10 md:h-10
                    flex items-center justify-center
                    rounded-xl
                    bg-red-500/10 hover:bg-red-500/20
                    text-red-400
                  "
                >
                  <Trash size={16} />
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* SUMMARY */}
        <div className="
          h-fit
          p-5 md:p-6
          rounded-2xl md:rounded-3xl
          bg-white/5 border border-white/10
          backdrop-blur-xl
          lg:sticky lg:top-24
        ">

          <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">
            Order Summary
          </h2>

          <div className="space-y-2 md:space-y-3 text-slate-400 text-sm md:text-base">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-400">Free</span>
            </div>

          </div>

          <div className="border-t border-white/10 mt-5 md:mt-6 pt-4 flex justify-between font-bold text-lg md:text-xl">
            <span>Total</span>
            <span className="text-cyan-400">
              ${total.toFixed(2)}
            </span>
          </div>

          <button className="
            mt-5 md:mt-6
            w-full h-11 md:h-12
            rounded-2xl
            bg-gradient-to-r from-blue-600 to-cyan-500
            font-semibold
            hover:scale-[1.02]
            transition
          ">
            Checkout
          </button>

        </div>

      </div>

    </div>
  );
}