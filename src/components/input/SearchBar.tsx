import { Input, Flex, useColorModeValue } from "@chakra-ui/react";
import SearchIcon from "../generic/SearchIcon";

const SearchBar = (props: any) => {
  return (
    <Flex
      position={"relative"}
      alignItems={"center"}
      backgroundColor={"gray.100"}
      width={"90vw"}
      maxWidth={"600px"}
      borderRadius={"5px"}
    >
      <Input
        width={"100%"}
        paddingRight={"8%"}
        placeholder={"What are you looking for?"}
        color={"black.100"}
        fontWeight={500}
        _placeholder={{
          color: "black.50",
        }}
      ></Input>

      <SearchIcon
        position="absolute"
        right={"2px"}
        height={"90%"}
        width={"40px"}
      />
    </Flex>
  );
};

export default SearchBar;
