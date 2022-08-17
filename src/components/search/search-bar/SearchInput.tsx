import { Input, Flex, Box } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../contexts/SearchContext'
import { SuggestionsContext } from '../../../contexts/SuggestionsContext'
import SearchIcon from '../../generic/SearchIcon'

const SearchInput: React.FC<IGenericProps> = ({ style }) => {
  const { search, setSearch } = useContext(SearchContext)
  const { findSuggestions } = useContext(SuggestionsContext)
  const [mainSuggestion, setMainSuggestion] = useState('')

  useEffect(() => {
    findSuggestions(search).then((res) => {
      const bestSuggestion = res?.[0]
      const title = bestSuggestion?.title
      const inputTitle = search + title?.slice(search.length)

      setMainSuggestion(title && bestSuggestion.isAtStart ? inputTitle : '')
    })
  }, [search])

  return (
    <Flex
      position="relative"
      alignItems="center"
      backgroundColor="gray.100"
      width="90vw"
      maxWidth="600px"
      borderRadius="5px"
      boxShadow="0 0 3px 0 rgba(0,0,0,.5)"
      {...style}
    >
      <Input
        width="100%"
        paddingRight="8%"
        placeholder="What are you looking for?"
        color="black.100"
        background="transparent"
        zIndex={2}
        fontWeight={500}
        value={search}
        _placeholder={{
          color: 'black.50',
        }}
        onChange={(e) => {
          setSearch(e.currentTarget.value)
        }}
      ></Input>
      <Box color="gray" position="absolute" fontWeight={500} padding="17px">
        {mainSuggestion}
      </Box>

      <SearchIcon
        style={{
          position: 'absolute',
          right: '2px',
          height: '90%',
          width: '40px',
        }}
      />
    </Flex>
  )
}

export default SearchInput
