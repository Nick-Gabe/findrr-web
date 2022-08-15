import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

interface IAppProps {}

const Logo: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Heading as={"h1"} {...props}>
      <Text as={"span"} color={"primary.100"}>
        Find
      </Text>
      <Text as={"span"} color={useColorModeValue("black.100", "white.80")}>
        rr
      </Text>
    </Heading>
  );
};

export default Logo;
