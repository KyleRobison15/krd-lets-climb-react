import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    brand: {
      50: "#e9f4fb",
      100: "#cddae5",
      200: "#aec2d1",
      300: "#8ea8be",
      400: "#848c94",
      500: "#6b737b",
      600: "#525960",
      700: "#3a4045",
      800: "#22262c",
      900: "#050e15",
    },
  },
});

export default theme;
