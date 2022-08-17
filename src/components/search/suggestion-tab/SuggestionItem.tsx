import { ListItem } from '@chakra-ui/react'
import {
  faMagnifyingGlass,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { SearchContext } from '../../../contexts/SearchContext'
import SuggestionItemText from './SuggestionItemText'

interface ISuggestionItemProps extends IGenericProps {
  source: ISuggestionDto[]
  index: number
  item: ISuggestionDto
}

const SuggestionItem: React.FC<ISuggestionItemProps> = ({
  source,
  index,
  item,
}) => {
  const { setSearch } = useContext(SearchContext)

  return (
    <ListItem
      display="flex"
      alignItems="center"
      color="black"
      borderBottomStyle={source[index + 1] ? 'solid' : 'none'}
      borderBottomColor="black.40"
      borderBottomWidth="1px"
      padding="5px 20px"
      _hover={{
        backgroundColor: 'primary.70',
        cursor: 'pointer',
      }}
      onClick={() => setSearch(item.title)}
    >
      {item.visited ? (
        <FontAwesomeIcon icon={faRotateRight} opacity="0.5" />
      ) : (
        <FontAwesomeIcon icon={faMagnifyingGlass} opacity="0.5" />
      )}
      <SuggestionItemText item={item} />
    </ListItem>
  )
}

export default SuggestionItem
