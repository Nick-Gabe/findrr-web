import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      100: "#FF5200",
      70: "#F47B41",
      20: "#FF520020",
    },
    black: {
      100: "#000",
      200: "#151A23",
      50: "#00000050",
      40: "#00000040",
    },
    white: {
      100: "#FFF",
      80: "#FFFFFF80",
      50: "#FFFFFF50",
      40: "#FFFFFF40",
    },
    gray: {
      100: "#E0E0E0",
    },
  },
});

export default theme;
