import {
  getCategories,
} from "@/services/products";
import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
  const categories = await getCategories();

  return (
    <ProductsClient
      categories={categories}
    />
  );
}