import { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "../types/product.types";
import { useProducts } from "../hooks/useProducts";

export interface CartContextType {
  productsInCart: Product[];
  quantity: number;
  total: number;
  addProductToCart: (item: Product) => void;
  removeProductFromCart: (item: Product) => void;
  deleteProductFromCart: (item: Product) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const { products, updateCurrentProducts } = useProducts();

  useEffect(() => {
    const newQuantity = productsInCart.reduce(
      (acc, product) => acc + product.quantity,
      0
    );

    const newTotal = productsInCart.reduce(
      (acc, product) => acc + product.quantity * +product.price,
      0
    );

    setTotal(newTotal);

    setQuantity(newQuantity);
  }, [productsInCart]);

  function findProductAndUpdateQuantity(product: Product) {
    const newListOfProducts = products;

    const productToUpdate = products.find(
      (currentProduct) => currentProduct.id === product.id
    );
    if (productToUpdate) {
      newListOfProducts.splice(products.indexOf(productToUpdate), 1, product);
      updateCurrentProducts(newListOfProducts);
    }
  }

  function resetProductQuantity(product: Product) {
    const newListOfProducts = products;

    const productToUpdate = products.find(
      (currentProduct) => currentProduct.id === product.id
    );

    if (productToUpdate) {
      productToUpdate.quantity = 0;
      newListOfProducts.splice(products.indexOf(productToUpdate), 1, product);
      updateCurrentProducts(newListOfProducts);
    }
  }

  function resetAllProductsQuantity(products: Product[]) {
    products.forEach((product) => resetProductQuantity(product));
  }

  function clearCart() {
    setProductsInCart([]);
    resetAllProductsQuantity(products);
  }

  function addProductToCart(item: Product) {
    const productExistOnCart = productsInCart.find(
      (cartProduct) => cartProduct.id === item.id
    );

    if (!!productExistOnCart) {
      const newProduct = {
        ...productExistOnCart,
        quantity: productExistOnCart.quantity + 1,
      };

      findProductAndUpdateQuantity(newProduct);
      const newCart = productsInCart;
      newCart.splice(productsInCart.indexOf(productExistOnCart), 1, newProduct);

      setProductsInCart([...newCart]);
    } else {
      const newProduct = { ...item, quantity: 1 };
      findProductAndUpdateQuantity(newProduct);
      setProductsInCart((allProducts) => [...allProducts, newProduct]);
    }
  }

  function removeProductFromCart(item: Product) {
    const productOnCart = productsInCart.find(
      (cartProduct) => cartProduct.id === item.id
    );

    if (productOnCart)
      if (productOnCart.quantity > 1) {
        const newProduct = {
          ...productOnCart,
          quantity: productOnCart.quantity - 1,
        };
        findProductAndUpdateQuantity(newProduct);
        const newCart = productsInCart;
        newCart.splice(productsInCart.indexOf(productOnCart), 1, newProduct);
        setProductsInCart([...newCart]);
      } else {
        resetProductQuantity(item);
        const newCart = productsInCart;
        newCart.splice(productsInCart.indexOf(item), 1);

        setProductsInCart([...newCart]);
      }
  }

  function deleteProductFromCart(item: Product) {
    resetProductQuantity(item);
    const newCart = productsInCart;
    newCart.splice(productsInCart.indexOf(item), 1);

    setProductsInCart([...newCart]);
  }

  return (
    <CartContext.Provider
      value={{
        productsInCart: productsInCart,
        quantity: quantity,
        total: total,
        addProductToCart,
        removeProductFromCart,
        deleteProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
