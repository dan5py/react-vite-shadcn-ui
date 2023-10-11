import { Box, IconButton, Text, Flex, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface Props {
  onShowSidebar: Function,
  showSidebarButton: boolean
}

const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  return (
    <Flex bg="#151515" p={4} color="white" justifyContent="center" w="100%">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={5} h={5} />}
            colorScheme="white"
            variant="outline"
            size="sm"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      {!showSidebarButton && (
      <Box display="flex" ml="auto" alignItems="center" justifyContent="center" h="30px">
        <Text fontSize="md" mr="5">About Us</Text>
        <Text fontSize="md" mr="5">Contact</Text>
        <Text fontSize="md" mr="5">Terms</Text>
      </Box>
      )}
      <Box display="flex" ml="auto" alignItems="center" justifyContent="center" h="30px">
        <Button colorScheme='white' variant="outline" size="sm">Sign Up</Button>
      </Box>
    </Flex>
  )
}

export default Header