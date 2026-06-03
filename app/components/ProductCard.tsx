import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  if (!product?.id) return null;

  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          bg-white/5
          border
          border-white/10
          hover:bg-white/10
          transition
          duration-300
          cursor-pointer
        "
      >

        {/* IMAGE */}
        <div className="h-44 overflow-hidden">
          <img
            src={product.thumbnail}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition
              duration-500
            "
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">

          <h2 className="font-semibold text-white line-clamp-1">
            {product.title}
          </h2>

          <p className="text-cyan-400 font-bold">
            ${product.price}
          </p>

        </div>

        {/* HOVER GLOW EFFECT */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            bg-gradient-to-tr
            from-cyan-500/10
            via-transparent
            to-blue-500/10
            pointer-events-none
          "
        />
      </div>
    </Link>
  );
}