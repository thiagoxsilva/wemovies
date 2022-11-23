import { styled } from "../../styles";

export const Movie = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "309.33px",

  backgroundColor: "$secondary",
  width: "100%",
  padding: "10px 11px",
  borderRadius: 4,

  fontWeight: 700,
  textAlign: "center",

  img: { marginBottom: 7 },

  p: {
    fontSize: "0.75rem",
    color: "$gray900",
    marginBottom: 2,
  },

  strong: {
    color: "$background",
    marginBottom: 8,
  },
});

export const PuchBtn = styled("div", {
  variants: {
    color: {
      active: {
        backgroundColor: "$accent",
      },
      inactive: {
        backgroundColor: "$primary",
        "&:hover": {
          backgroundColor: "$accent",
        },
      },
    },
  },

  width: "100%",
  padding: 11,
  borderRadius: 4,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.75rem",

  img: {
    marginBottom: 0,
  },

  p: {
    fontSize: "0.75rem",
    color: "$secondary",
    textTransform: "uppercase",

    marginBottom: 0,
  },

  div: {
    display: "flex",
    alignItems: "center",
    gap: 3.4,

    p: {
      fontWeight: 400,
    },
  },

  "&:hover": {
    cursor: "pointer",
  },
});
