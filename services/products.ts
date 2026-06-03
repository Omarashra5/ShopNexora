import { Product } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

/**
 * GET PRODUCTS (pagination + search + category)
 */
export async function getProducts(
  page = 1,
  limit = 12,
  search = "",
  category = ""
): Promise<{
  products: Product[];
  total: number;
}> {
  let url = `${BASE_URL}/products?limit=${limit}&skip=${
    (page - 1) * limit
  }`;

  if (search) {
    url = `${BASE_URL}/products/search?q=${search}&limit=${limit}&skip=${
      (page - 1) * limit
    }`;
  }

  if (category && category !== "all") {
    url = `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${
      (page - 1) * limit
    }`;
  }

  const res = await fetch(url, {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("GET PRODUCTS ERROR:", data);
    throw new Error(data?.message || "Failed to fetch products");
  }

  return {
    products: data.products ?? [],
    total: data.total ?? 0,
  };
}

/**
 * GET CATEGORIES
 */
export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("GET CATEGORIES ERROR:", data);
    throw new Error("Failed to fetch categories");
  }

  return data ?? [];
}

/**
 * GET SINGLE PRODUCT
 */
export async function getProduct(id: string): Promise<Product> {
  if (!id) {
    throw new Error("Product ID is missing");
  }

  const res = await fetch(
    `${BASE_URL}/products/${id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("GET PRODUCT ERROR:", data);
    throw new Error(
      data?.message || "Failed to fetch product"
    );
  }

  return data;
}

/**
 * GET RELATED PRODUCTS
 */
export async function getRelatedProducts(category: string) {
  if (!category) return [];

  const res = await fetch(
    `${BASE_URL}/products/category/${category}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("RELATED PRODUCTS ERROR:", data);
    return [];
  }

  return data.products ?? [];
}