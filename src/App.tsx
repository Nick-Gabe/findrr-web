import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Waves from "./components/background/Waves";
import { ColorModeSwitcher } from "./components/generic/ColorModeSwitcher";
import Logo from "./components/generic/Logo";
import SearchBar from "./components/input/SearchBar";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      <Logo />
      <SearchBar />
      <Waves position={"fixed"} bottom={0} left={0} zIndex={-1} />
    </Flex>
  </ChakraProvider>
);
