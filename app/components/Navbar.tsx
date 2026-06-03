"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

import { ShoppingCart, Heart, Sparkles, Menu, X } from "lucide-react";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export default function Navbar() {
  const cart = useCartStore((s) => s.items);
  const wishlist = useWishlistStore((s) => s.items);

  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10">

      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* BRAND */}
        <Link href="/" className="flex items-center gap-2 font-black text-xl">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
            <Sparkles size={18} />
          </div>

          <span>
            Nexora <span className="text-cyan-400">Store</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6">

          <Link href="/wishlist" className="relative">
            <Heart size={20} />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingCart size={20} />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-cyan-500 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
                {cart.length}
              </span>
            )}
          </Link>

          {/* AUTH */}
          {session ? (
            <div className="flex items-center gap-3">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  className="w-9 h-9 rounded-full"
                />
              )}

              <button
                onClick={() => signOut()}
                className="bg-red-500 px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 rounded-lg bg-white text-black font-medium"
            >
              Login
            </button>
          )}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-slate-950/90">

          <Link href="/wishlist" className="flex items-center justify-between">
            Wishlist <Heart size={18} />
          </Link>

          <Link href="/cart" className="flex items-center justify-between">
            Cart <ShoppingCart size={18} />
          </Link>

          {session ? (
            <>
              <div className="flex items-center gap-3">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="text-sm">{session.user?.name}</span>
              </div>

              <button
                onClick={() => signOut()}
                className="bg-red-500 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 rounded-lg bg-white text-black"
            >
              Login with Google
            </button>
          )}

        </div>
      )}

    </nav>
  );
}