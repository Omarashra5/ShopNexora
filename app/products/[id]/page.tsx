import { getProduct, getRelatedProducts } from "@/services/products";
import AddToCartButton from "@/app/components/AddToCartButton";
import WishlistButton from "@/app/components/WishlistButton";
import { use } from "react";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return <ProductPage id={id} />;
}

async function ProductPage({ id }: { id: string }) {
  const product = await getProduct(id);
  const related = await getRelatedProducts(product.category);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="container mx-auto px-6 py-10">

        {/* PRODUCT SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src={product.thumbnail}
              className="
                w-full
                h-[500px]
                object-cover
                hover:scale-110
                transition duration-500
              "
            />
          </div>

          {/* INFO */}
          <div className="sticky top-24 space-y-6">

            <h1 className="text-4xl font-black leading-tight">
              {product.title}
            </h1>

            <p className="text-slate-400 leading-relaxed">
              {product.description}
            </p>

            <p className="text-3xl font-bold text-cyan-400">
              ${product.price}
            </p>

            {/* ACTIONS */}
            <div className="space-y-3">
              <AddToCartButton product={product} />
              <WishlistButton product={product} />
            </div>

          </div>

        </div>

        {/* RELATED */}
        <div className="mt-20">

          <h2 className="text-2xl font-bold mb-6">
            Related Products
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            {related.map((p: any) => (
              <div
                key={p.id}
                className="
                  group
                  rounded-2xl
                  overflow-hidden
                  bg-white/5
                  border
                  border-white/10
                  hover:bg-white/10
                  transition
                "
              >

                {/* IMAGE */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={p.thumbnail}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-110
                      transition duration-500
                    "
                  />
                </div>

                {/* INFO */}
                <div className="p-4">

                  <h3 className="font-semibold line-clamp-1">
                    {p.title}
                  </h3>

                  <p className="text-slate-400 mt-1">
                    ${p.price}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}