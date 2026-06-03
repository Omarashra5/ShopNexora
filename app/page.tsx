"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag, Star, Truck } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 md:top-20 left-5 md:left-20 w-60 md:w-96 h-60 md:h-96 bg-blue-600/20 blur-[120px] md:blur-[150px] rounded-full" />
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-20 w-60 md:w-96 h-60 md:h-96 bg-cyan-500/20 blur-[120px] md:blur-[150px] rounded-full" />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <Star size={16} />
              Premium Shopping Experience
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight">
              Shop
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Nexora
              </span>
            </h1>

            <p className="mt-6 text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Discover premium products with a modern shopping experience,
              lightning-fast performance and beautiful design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

              <Link
                href="/products"
                className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                Browse Products
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/wishlist"
                className="px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-center"
              >
                Wishlist
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-10 lg:mt-0">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-8 backdrop-blur-xl hover:scale-105 transition">
              <ShoppingBag size={40} className="text-blue-500 mb-4" />
              <h3 className="text-2xl md:text-4xl font-bold">10K+</h3>
              <p className="text-slate-400 text-sm md:text-base">Products Available</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-8 backdrop-blur-xl hover:scale-105 transition">
              <Truck size={40} className="text-cyan-400 mb-4" />
              <h3 className="text-2xl md:text-4xl font-bold">24H</h3>
              <p className="text-slate-400 text-sm md:text-base">Fast Delivery</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-8 backdrop-blur-xl hover:scale-105 transition">
              <Star size={40} className="text-yellow-400 mb-4" />
              <h3 className="text-2xl md:text-4xl font-bold">4.9</h3>
              <p className="text-slate-400 text-sm md:text-base">Customer Rating</p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-5 md:p-8 hover:scale-105 transition">
              <h3 className="text-2xl md:text-4xl font-black">Premium</h3>
              <p className="mt-2 text-white/80 text-sm md:text-base">
                Shopping Experience
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}