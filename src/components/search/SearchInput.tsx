import { Flex, Box } from "@chakra-ui/react";
import { useContext } from "react";
import {
  SearchContext,
  SearchContextProvider,
} from "../../contexts/SearchContext";
import { SuggestionsContextProvider } from "../../contexts/SuggestionsContext";
import SearchBar from "../input/SearchBar";
import SuggestionList from "./SuggestionList";

const SearchInput = (props: any) => {
  return (
    <SearchContextProvider>
      <Flex flexDirection={"column"}>
        <SuggestionsContextProvider>
          <SearchBar />
          <Box
            overflow={"hidden"}
            margin={"10px 0"}
            borderRadius={"5px"}
            boxShadow={"0 0 3px 0 rgba(0,0,0,.5)"}
          >
            <SuggestionList />
          </Box>
        </SuggestionsContextProvider>
      </Flex>
    </SearchContextProvider>
  );
};

export default SearchInput;
