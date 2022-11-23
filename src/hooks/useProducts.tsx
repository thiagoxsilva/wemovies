import { useContext } from "react";
import {
  ProductsContext,
  ProductsContextType,
} from "../contexts/ProductsContext";

export function useProducts(): ProductsContextType {
  const context = useContext(ProductsContext);

  return context;
}
