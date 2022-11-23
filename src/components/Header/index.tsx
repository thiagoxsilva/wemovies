//Libs
import Image from "next/image";
import Link from "next/link";

// Hooks
import { useCart } from "../../hooks/useCart";

// Styles
import {
  CartItems,
  CartItemsContainer,
  HeaderContainer,
  LogoText,
  MyCart,
} from "./styles";

// Assets
import basket from "../../assets/basket.svg";

export function Header() {
  const { quantity } = useCart();
  return (
    <HeaderContainer>
      <Link href="/">
        <LogoText>WeMovies</LogoText>
      </Link>
      <Link href="/cart">
        <MyCart>
          <CartItemsContainer>
            <p>Meu Carrinho</p>
            <CartItems>{quantity ? quantity : 0} itens</CartItems>
          </CartItemsContainer>
          <Image src={basket} alt="Cesta de Compras" />
        </MyCart>
      </Link>
    </HeaderContainer>
  );
}
