"use client";

import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

type Props = {
  session: Session | null;
};

export default function AuthButton({ session }: Props) {
  if (session) {
    return (
      <div className="flex items-center gap-3">
        <img
          src={session.user?.image || ""}
          alt=""
          className="w-8 h-8 rounded-full"
        />

        <button
          onClick={() => signOut()}
          className="
            px-4 py-2
            rounded-xl
            bg-red-500
            hover:bg-red-600
            text-white
            text-sm
          "
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="
        px-4 py-2
        rounded-xl
        bg-white
        text-black
        font-medium
        hover:opacity-90
      "
    >
      Sign in with Google
    </button>
  );
}