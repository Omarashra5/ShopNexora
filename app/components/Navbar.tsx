"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "./AuthContext";
import {
    Heart,
    ShoppingCart,
    User,
    LogOut,
    Grid3X3,
    Flame,
    Sparkles,
} from "lucide-react";

export default function Navbar() {
    const { user, login, logout } = useAuth();

    const [profileOpen, setProfileOpen] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);

    const profileRef = useRef<HTMLDivElement | null>(null);
    const exploreRef = useRef<HTMLDivElement | null>(null);

    const cartCount = 2;
    const wishlistCount = 3;
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(e.target as Node)
            ) {
                setProfileOpen(false);
            }

            if (
                exploreRef.current &&
                !exploreRef.current.contains(e.target as Node)
            ) {
                setExploreOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <nav className="flex items-center justify-between px-5 py-3 bg-[#0b1220] text-white relative">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <ShoppingCart size={18} />
                </div>

                <span className="text-xl font-bold">
                    NEX<span className="text-blue-500">ORA</span>
                </span>
            </Link>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
                {/* Wishlist */}
                <Link
                    href="/wishlist"
                    className="relative p-2 hover:bg-white/10 rounded-xl"
                >
                    <Heart size={20} />
                    {wishlistCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-pink-500 text-[10px] px-1.5 rounded-full">
                            {wishlistCount}
                        </span>
                    )}
                </Link>

                {/* Cart */}
                <Link href="/cart" className="relative p-2 hover:bg-white/10 rounded-xl">
                    <ShoppingCart size={20} />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-blue-500 text-[10px] px-1.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </Link>

                {/* AUTH */}
                {!user ? (
                    <button
                        onClick={login}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition"
                    >
                        {/* Google Icon */}
                        <svg width="18" height="18" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C33.1 6.1 28.8 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
                            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C33.1 6.1 28.8 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.1C29.2 35.6 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8.1l-6.6 5.1C8.9 39.7 15.9 44 24 44z" />
                            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.4-6.3 6.9l6.2 5.1C39.9 36.7 44 30.8 44 24c0-1.3-.1-2.7-.4-3.5z" />
                        </svg>

                        Sign in
                    </button>
                ) : (
                    <div className="relative">
                        <button
                            onClick={() => setProfileOpen(!profileOpen)}
                            className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <img
                                src={user.photoURL || "/default-avatar.png"}
                                alt="avatar"
                                className="w-8 h-8 rounded-full object-cover"
                            />

                            <span className="text-sm">
                                {user.displayName?.split(" ")[0]}
                            </span>
                        </button>

                        {profileOpen && (
                            <div className="absolute right-0 mt-2 w-44 bg-[#0f172a] border border-white/10 rounded-xl p-2 shadow-lg z-50">                                <button
                                type="button"
                                onClick={async () => {
                                    await logout();
                                    setProfileOpen(false);
                                }}
                                className="flex items-center gap-2 w-full px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}