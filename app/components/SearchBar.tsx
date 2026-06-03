"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative w-full">

      <Search
        size={20}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full
          h-14
          pl-12
          pr-4
          rounded-2xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-500/20
        "
      />
    </div>
  );
}