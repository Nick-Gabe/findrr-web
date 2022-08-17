import { Heading, Text, Flex } from '@chakra-ui/react'

interface ISuggestionItemTextProps {
  item: ISuggestionDto
}

const SuggestionItemText: React.FC<ISuggestionItemTextProps> = ({ item }) => {
  return (
    <Flex flexDirection="column" ml="15px">
      <Heading as="h3" fontSize="1rem" margin={0} textTransform="capitalize">
        {item.title}
      </Heading>
      <Text
        as="small"
        fontSize=".8rem"
        opacity=".5"
        fontWeight="500"
        margin={0}
        textTransform="capitalize"
      >
        {item.type}
      </Text>
    </Flex>
  )
}

export default SuggestionItemText
