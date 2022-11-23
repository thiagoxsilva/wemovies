import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { Product } from "../types/product.types";

export interface ProductsContextType {
  products: Product[];
  loading: boolean;
  updateCurrentProducts: (currentProducts: Product[]) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
}
export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  async function fetchAllProducts() {
    try {
      setLoading(true);
      const { data } = await api.get("/products", {
        retry: 3,
        retryDelay: 3000,
      });

      const productsWithQuantity = data.map((product: Product) => ({
        ...product,
        quantity: 0,
      }));

      setProducts(productsWithQuantity);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  function updateCurrentProducts(currentProducts: Product[]) {
    setProducts([...currentProducts]);
  }

  return (
    <ProductsContext.Provider
      value={{ products, loading, updateCurrentProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
