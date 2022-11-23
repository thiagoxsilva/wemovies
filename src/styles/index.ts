import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray900: "#333333",
      gray100: "#999999",
      gray50: "#d9d9d9",
      primary: "#009EDD",
      secondary: "#FFFFFF",
      accent: "#039B00",
      background: "#2F2E41",
    },
  },
  media: {
    bp1: "(min-width: 350px)",
    bp2: "(min-width: 376px)",
    bp3: "(min-width: 1024px)",
  },
});
