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
  className="
    px-5 py-2.5
    rounded-xl
    bg-white/5
    border border-red-500/30
    text-red-400
    backdrop-blur-xl
    hover:bg-red-500/10
    hover:border-red-500/50
    hover:scale-[1.03]
    transition
    shadow-lg
    shadow-red-500/10
  "
>
  Logout
</button>
            </div>
          ) : (
                      <button
              onClick={() => signIn("google")}
              className="
    flex items-center gap-3
    px-5 py-2.5
    rounded-xl
    bg-white/5
    border border-white/10
    text-white
    backdrop-blur-xl
    hover:bg-white/10
    hover:scale-[1.03]
    transition
    shadow-lg
    shadow-black/30
  "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.9-6.9C36.64 2.46 30.74 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.02 6.22C12.36 13.13 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.64-.15-3.21-.43-4.73H24v9h12.8c-.56 3-2.26 5.54-4.81 7.25l7.46 5.8c4.35-4.01 6.83-9.92 6.83-17.32z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.58 28.44c-1.01-3-1.01-6.23 0-9.23l-8.02-6.22C.92 16.36 0 20.09 0 24s.92 7.64 2.56 11.01l8.02-6.57z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.74 0 12.64-2.22 16.85-6.05l-7.46-5.8c-2.1 1.4-4.78 2.23-9.39 2.23-6.26 0-11.64-3.63-13.42-8.95l-8.02 6.57C6.51 42.62 14.62 48 24 48z"
                />
              </svg>

              <span className="font-medium">
                Login
              </span>
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
  className="
    px-5 py-2.5
    rounded-xl
    bg-white/5
    border border-red-500/30
    text-red-400
    backdrop-blur-xl
    hover:bg-red-500/10
    hover:border-red-500/50
    hover:scale-[1.03]
    transition
    shadow-lg
    shadow-red-500/10
  "
>
  Logout
</button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="
    flex items-center gap-3
    px-5 py-2.5
    rounded-xl
    bg-white/5
    border border-white/10
    text-white
    backdrop-blur-xl
    hover:bg-white/10
    hover:scale-[1.03]
    transition
    shadow-lg
    shadow-black/30
  "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.9-6.9C36.64 2.46 30.74 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.02 6.22C12.36 13.13 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.64-.15-3.21-.43-4.73H24v9h12.8c-.56 3-2.26 5.54-4.81 7.25l7.46 5.8c4.35-4.01 6.83-9.92 6.83-17.32z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.58 28.44c-1.01-3-1.01-6.23 0-9.23l-8.02-6.22C.92 16.36 0 20.09 0 24s.92 7.64 2.56 11.01l8.02-6.57z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.74 0 12.64-2.22 16.85-6.05l-7.46-5.8c-2.1 1.4-4.78 2.23-9.39 2.23-6.26 0-11.64-3.63-13.42-8.95l-8.02 6.57C6.51 42.62 14.62 48 24 48z"
                />
              </svg>

              <span className="font-medium">
                Login
              </span>
            </button>
          )}

        </div>
      )}

    </nav>
  );
}