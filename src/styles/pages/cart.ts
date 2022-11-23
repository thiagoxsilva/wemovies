import { styled } from "..";

export const CartContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  flex: 1,
  padding: "0 16px",
});

export const NoItemCard = styled("div", {
  backgroundColor: "$secondary",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: 64,
  borderRadius: 4,
  width: "100%",
  maxWidth: "960px",
  overflow: "hidden",

  h1: {
    color: "$background",
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 32,
  },

  img: {
    marginBottom: 32,
  },

  div: {
    backgroundColor: "$primary",
    width: 180,
    height: 40,
    borderRadius: 4,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    p: {
      color: "$secondary",
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 14,
    },
  },
});

export const CartProductsContainer = styled("div", {
  backgroundColor: "$secondary",
  borderRadius: 4,
  padding: "1rem",
  marginBottom: "1rem",
  width: "100%",
  maxWidth: "950px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,

  "@bp2": {
    flex: 0,
    padding: "1.5rem",
  },
});

export const Footer = styled("footer", {
  display: "flex",
  flexDirection: "column",

  hr: {
    margin: "21px 0",
    backgroundColor: "$gray100",
    height: 1,
    border: 0,
  },

  "@bp2": {
    hr: {
      marginTop: 0,
    },
  },
});

export const OrderActions = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",

  "@bp2": {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const TotalContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 5,
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "1rem",

  p: { fontSize: 14, color: "$gray100" },

  strong: { fontSize: 24, color: "$background", width: 130 },

  "@bp2": {
    order: 2,
  },
});

export const FinishOrderBtn = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$primary",
  width: "100%",
  padding: "11px 0",
  borderRadius: 4,

  a: {
    width: "100%",
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  p: {
    fontWeight: 700,
    fontSize: 14,
    color: "$secondary",
  },

  "&:hover": {
    cursor: "pointer",
  },

  "@bp2": {
    order: 1,
    width: "235.42px",
  },
});
