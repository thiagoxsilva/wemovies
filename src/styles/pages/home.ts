import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,

  width: "100%",
  padding: "0 16px 16px 16px",
});

export const LoadingContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  height: 83,
  width: 83,
  position: "absolute",
});

export const ProductsContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  flexGap: "1rem",
  gap: "1rem",
  flex: 1,
  justifyContent: "center",
  alignSelf: "flex-start",

  maxWidth: "960px",
});
