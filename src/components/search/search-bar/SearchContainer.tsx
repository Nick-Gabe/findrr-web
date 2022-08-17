import { Flex, Box } from '@chakra-ui/react'
import { SearchContextProvider } from '../../../contexts/SearchContext'
import { SuggestionsContextProvider } from '../../../contexts/SuggestionsContext'
import SearchInput from './SearchInput'
import SuggestionList from '../suggestion-tab/SuggestionList'

const SearchContainer: React.FC<IGenericProps> = () => {
  return (
    <SearchContextProvider>
      <Flex flexDirection="column">
        <SuggestionsContextProvider>
          <SearchInput />
          <Box
            overflow="hidden"
            margin="10px 0"
            borderRadius="5px"
            boxShadow="0 0 3px 0 rgba(0,0,0,.5)"
          >
            <SuggestionList />
          </Box>
        </SuggestionsContextProvider>
      </Flex>
    </SearchContextProvider>
  )
}

export default SearchContainer
