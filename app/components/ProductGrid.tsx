"use client";

import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { motion } from "framer-motion";

interface Props {
  products: Product[];
}

export default function ProductGrid({
  products,
}: Props) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 text-slate-400">
        No products found 
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      className="
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-6
  [perspective:1000px]
"
    >
      {products
        .filter((p) => p?.id)
        .map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                scale: 0.95,
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
    </motion.div>
  );
}