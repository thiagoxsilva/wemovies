import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$background",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
  },

  a: {
    textDecoration: "none",
    backgroundColor: "transparent",

    "&:hover": {
      textDecoration: "none",
    },
  },
});
