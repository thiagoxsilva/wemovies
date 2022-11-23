import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  gap: "1rem",

  marginBottom: "1rem",

  "@bp2": {
    position: "relative",
    marginBottom: 21,
    h6: {
      fontWeight: 700,
      fontSize: 14,
      color: "$gray100",
    },
  },
});

export const ProductImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    width: 64,
    height: 82,
  },

  h6: { display: "none" },
  "@bp2": {
    flexDirection: "column",
    alignItems: "flex-start",

    h6: { display: "inline-block", marginBottom: 21 },

    img: {
      width: 89,
      height: 114,
    },
    marginRight: 52,
  },
});

export const Info = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",

  "@bp2": {
    justifyContent: "space-between",
    width: "60%",
  },
});

export const ProductTopContainer = styled("div", {
  display: "flex",
  flex: 1,
  justifyContent: "space-between",

  p: {
    fontWeight: 700,
    fontSize: 14,
    color: "$background",
    textAlign: "center",
  },

  "@bp2": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    gap: 8,
    marginTop: 54,
  },
});

export const HandleProduct = styled("div", {
  display: "flex",
  gap: "1rem",

  p: {
    fontWeight: 700,
    color: "$background",
  },
  img: {
    width: "1rem",
    height: 18,
    "&:hover": {
      cursor: "pointer",
    },
    "@bp2": {
      position: "absolute",
      right: 0,
      top: "56%",
    },
  },
});

export const ProductBottomContainer = styled("div", {
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
});

export const ActionsButtonsContainer = styled("div", {
  h6: {
    display: "none",
  },
  "@bp2": {
    display: "flex",
    flexDirection: "column",

    h6: { display: "inline-block", marginBottom: 65 },
  },
});

export const ActionButtons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 11,

  img: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  div: {
    borderRadius: 4,
    border: "1px solid $gray50",
    padding: "0 12px",

    width: 59,
    p: {
      fontsize: 14,
      color: "$background",
    },
  },
});

export const SubtotalContainer = styled("div", {
  textAlign: "left",
  fontWeight: 700,

  p: { fontSize: "0.75rem" },
  strong: { color: "$background" },

  "@bp2": {
    display: "flex",
    flexDirection: "column",
    h6: { display: "inline-block", marginBottom: 68 },
  },
});
