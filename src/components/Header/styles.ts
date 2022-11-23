import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  padding: "21.5px 10px",
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto",
  color: "$secondary",

  display: "flex",
  justifyContent: "space-between",
  boxSizing: "border-box",
});

export const MyCart = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  "&:hover": {
    cursor: "pointer",
  },
});

export const CartItemsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",

  p: {
    display: "none",
    fontWeight: 600,
    fontSize: 14,
    color: "$secondary",

    "@bp2": {
      display: "inline-block",
    },
  },
});

export const LogoText = styled("p", {
  fontWeight: 700,
  fontSize: 20,
  color: "$secondary",
});

export const CartItems = styled("span", {
  fontWeight: 600,
  fontSize: "0.75rem",
  color: "$gray100",
});
