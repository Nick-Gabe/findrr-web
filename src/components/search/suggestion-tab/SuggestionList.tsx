import { Flex, List } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../contexts/SearchContext'
import { SuggestionsContext } from '../../../contexts/SuggestionsContext'
import SuggestionItem from './SuggestionItem'

const SuggestionList: React.FC<IGenericProps> = ({ style }) => {
  const { search } = useContext(SearchContext)
  const { findSuggestions } = useContext(SuggestionsContext)
  const [suggestionList, setSuggestionList] = useState<ISuggestionDto[]>([])

  useEffect(() => {
    findSuggestions(search).then((res) => setSuggestionList(res))
  }, [search])

  return (
    <Flex
      flexDirection="column"
      maxHeight={search.length > 3 ? '216.75px' : 0}
      transition="max-height .3s ease-out"
      {...style}
    >
      <List
        display="grid"
        backgroundColor="gray.100"
        borderRadius="5px"
        overflow="hidden"
      >
        {suggestionList.slice(0, 4).map((x, i, src) => {
          return (
            <SuggestionItem
              key={x + i.toString()}
              source={src}
              index={i}
              item={x}
            />
          )
        })}
      </List>
    </Flex>
  )
}

export default SuggestionList
