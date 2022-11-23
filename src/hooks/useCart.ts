import { useContext } from "react";
import { CartContext, CartContextType } from "../contexts/CartContext";

export function useCart(): CartContextType {
  const context = useContext(CartContext);

  return context;
}
