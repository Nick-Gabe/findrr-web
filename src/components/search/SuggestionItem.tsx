import { Heading, ListItem, Text, Flex } from "@chakra-ui/react";
import {
  faMagnifyingGlass,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

interface ISuggestionItemTextProps {
  item: ISuggestionDto;
}

export const SuggestionItemText: React.FC<ISuggestionItemTextProps> = ({
  item,
}) => {
  return (
    <Flex flexDirection={"column"} ml={"15px"}>
      <Heading
        as={"h3"}
        fontSize={"1rem"}
        margin={0}
        textTransform={"capitalize"}
      >
        {item.title}
      </Heading>
      <Text
        as={"small"}
        fontSize={".8rem"}
        opacity={".5"}
        fontWeight={"500"}
        margin={0}
        textTransform={"capitalize"}
      >
        {item.type}
      </Text>
    </Flex>
  );
};

interface ISuggestionItemProps {
  source: any[];
  index: number;
  item: ISuggestionDto;
  reactKey: string;
}

const SuggestionItem: React.FC<ISuggestionItemProps> = ({
  source,
  index,
  item,
  reactKey,
}) => {
  const { setSearch } = useContext(SearchContext);

  return (
    <ListItem
      display={"flex"}
      alignItems={"center"}
      color={"black"}
      borderBottomStyle={source[index + 1] ? "solid" : "none"}
      borderBottomColor={"black.40"}
      borderBottomWidth={"1px"}
      padding={"5px 20px"}
      _hover={{
        backgroundColor: "primary.70",
        cursor: "pointer",
      }}
      key={reactKey}
      onClick={() => setSearch(item.title)}
    >
      {item.visited ? (
        <FontAwesomeIcon icon={faRotateRight} opacity={"0.5"} />
      ) : (
        <FontAwesomeIcon icon={faMagnifyingGlass} opacity={"0.5"} />
      )}
      <SuggestionItemText item={item} />
    </ListItem>
  );
};

export default SuggestionItem;
