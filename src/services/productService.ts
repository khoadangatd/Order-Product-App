import productsData from "../mocks/products.json";
import type { Product } from "../types";

const SIMULATOR_TIME_OUT = 800;

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, SIMULATOR_TIME_OUT);
    });
  },
  searchProducts: async ({
    searchTerm,
    categoryFilter,
  }: {
    searchTerm: string;
    categoryFilter: string;
  }): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = productsData.filter((product) => {
          const matchesName = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
          const matchesCategory =
            !categoryFilter || product.category === categoryFilter;

          return matchesName && matchesCategory;
        });

        resolve(filteredProducts);
      }, SIMULATOR_TIME_OUT);
    });
  },
};
