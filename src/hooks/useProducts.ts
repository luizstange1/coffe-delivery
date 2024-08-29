import { useEffect, useState } from "react";
import { Product } from "../contexts/CartContext/types";
import { getProducts } from "../services";

export function useProducts() {
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setProductsList(products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return { productsList };
}
