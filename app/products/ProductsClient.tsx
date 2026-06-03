"use client";

import { useEffect, useMemo, useState } from "react";
import { getProducts } from "@/services/products";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import CategorySection from "../components/CategorySection";

export default function ProductsClient({
  categories,
}: any) {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // load once / search change
  useEffect(() => {
    const load = async () => {
      const data = await getProducts(1, 100, search, "all");
      setAllProducts(data.products);
    };

    load();
  }, [search]);
    const grouped = useMemo(() => {
    const map: Record<string, any[]> = {};

    allProducts.forEach((p) => {
      if (!map[p.category]) {
        map[p.category] = [];
      }
      map[p.category].push(p);
    });

    return map;
  }, [allProducts]);

  // filter view
  const filteredKeys =
    category === "all"
      ? Object.keys(grouped)
      : [category];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="container mx-auto px-6 pt-16 pb-10">
        <h1 className="text-5xl font-black">
          Explore{" "}
          <span className="text-cyan-400">Store</span>
        </h1>

        <p className="text-slate-400 mt-3 max-w-xl">
          Discover products organized into clean categories for better browsing experience.
        </p>
      </section>

      {/* SEARCH + FILTER */}
      <section className="container mx-auto px-6">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 space-y-5">

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <Filters
            categories={categories}
            selectedCategory={category}
            onCategoryChange={setCategory}
          />

        </div>
      </section>

      {/* SECTIONS */}
      <section className="container mx-auto px-6 py-12 space-y-20">

        {filteredKeys.map((key) => {
          const catObj = categories.find(
            (c: any) => c.slug === key
          );

          const products = grouped[key] || [];

          if (!products.length) return null;

          return (
            <CategorySection
              key={key}
              title={
                key === "all"
                  ? "All Products"
                  : catObj?.name || key
              }
              products={products}
            />
          );
        })}

      </section>
    </div>
  );
}