import type { AppProps } from "next/app";
//Contexts
import { CartProvider } from "../contexts/CartContext";
import { ProductsProvider } from "../contexts/ProductsContext";

// Components
import { Header } from "../components/Header";

// Styles
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
    </Container>
  );
}
