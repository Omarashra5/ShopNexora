"use client";

interface Category {
  slug: string;
  name: string;
}

interface Props {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (
    category: string
  ) => void;
}

export default function Filters({
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">

      <button
        onClick={() =>
          onCategoryChange("all")
        }
        className={`
          px-5
          py-3
          rounded-2xl
          text-sm
          font-semibold
          transition-all
          duration-300
          ${
            selectedCategory === "all"
              ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
          }
        `}
      >
        All Products
      </button>

      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() =>
            onCategoryChange(
              category.slug
            )
          }
          className={`
            px-5
            py-3
            rounded-2xl
            text-sm
            font-semibold
            transition-all
            duration-300
            ${
              selectedCategory ===
              category.slug
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}