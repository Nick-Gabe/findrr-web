import { Heading, Text, useColorModeValue } from '@chakra-ui/react'

const Logo: React.FC<IGenericProps> = ({ style }) => {
  return (
    <Heading as="h1" {...style}>
      <Text as="span" color="primary.100">
        Find
      </Text>
      <Text as="span" color={useColorModeValue('black.100', 'white.80')}>
        rr
      </Text>
    </Heading>
  )
}

export default Logo
