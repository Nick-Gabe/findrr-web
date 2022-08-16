import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Logo = (props: any) => {
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
