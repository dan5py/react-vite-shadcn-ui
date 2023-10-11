import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from '@chakra-ui/react';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: 'drawer' | 'sidebar';
}

const SidebarContent: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <VStack>
    <Box w="100%" display="flex" justifyContent="center">
      React Builder
    </Box>
    <Button w="100%">Home</Button>
    <Button w="100%">Dashboard</Button>
    <Button w="100%">Users</Button>
    <Button w="100%">Analytics</Button>
  </VStack>
);

const Sidebar: React.FC<Props> = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={3}
      w="240px"
      top={0}
      h="100%"
      bg="#fff"
      borderRight="1px solid #ddd"
    >
      <VStack>
        <Box w="100%" display="flex" justifyContent="center">
          React Builder
        </Box>
        <Button w="100%">Home</Button>
        <Button w="100%">Dashboard</Button>
        <Button w="100%">Users</Button>
        <Button w="100%">Analytics</Button>
      </VStack>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Loopple Chakra</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
