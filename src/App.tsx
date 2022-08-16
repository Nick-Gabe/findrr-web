import { ChakraProvider, Flex } from "@chakra-ui/react";
import Waves from "./components/background/Waves";
import { ColorModeSwitcher } from "./components/generic/ColorModeSwitcher";
import Logo from "./components/generic/Logo";
import SearchInput from "./components/search/SearchInput";
import theme from "./theme";
import MakeMirageServer from "./api/mirage";

export const App = () => {
  MakeMirageServer();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"100vh"}
      >
        <Logo mb={"10px"} />
        <SearchInput />
        <Waves position={"fixed"} bottom={0} left={0} zIndex={-1} />
      </Flex>
    </ChakraProvider>
  );
};
