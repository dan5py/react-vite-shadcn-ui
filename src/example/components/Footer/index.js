import { Box, Container, Stack, Text, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Box
      bg='gray.50'
      color='gray.700'
      mt="15">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
       <Text>2023 Chakra Builder, built with <Link href='https://www.loopple.com' isExternal>Loopple</Link>.</Text>
      </Container>
    </Box>
  )
}

export default Footer