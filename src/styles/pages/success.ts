import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  flex: 1,
  padding: "0 16px",
});

export const SuccessBuy = styled("div", {
  backgroundColor: "$secondary",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: 64,
  borderRadius: 4,
  maxWidth: "960px",
  width: "100%",

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
