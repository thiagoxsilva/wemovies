//Libs
import Image from "next/image";

// Components
import { MovieCard } from "../components/MovieCard";

// Hooks
import { useProducts } from "../hooks/useProducts";

// Styles
import {
  HomeContainer,
  LoadingContainer,
  ProductsContainer,
} from "../styles/pages/home";

// Assets
import loader from "../assets/loader.svg";

export default function Home() {
  const { products, loading } = useProducts();

  return (
    <HomeContainer>
      {loading ? (
        <LoadingContainer>
          <Image fill src={loader} alt="Loader" />
        </LoadingContainer>
      ) : (
        <ProductsContainer>
          {products.map((product) => (
            <MovieCard key={product.id} product={product} />
          ))}
        </ProductsContainer>
      )}
    </HomeContainer>
  );
}
