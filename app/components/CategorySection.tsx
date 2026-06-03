"use client";

import ProductCard from "./ProductCard";

export default function CategorySection({
  title,
  products,
}: {
  title: string;
  products: any[];
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <span className="text-slate-400 text-sm">
          {products.length} items
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}