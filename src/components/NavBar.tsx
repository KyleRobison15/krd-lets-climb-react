import { Button, HStack, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import NavBarLogo from "./NavBarLogo";

const NavBar = () => {
  const navBarBg = useColorModeValue("", "gray.900");

  return (
    <HStack
      zIndex="1000"
      as="nav"
      position="fixed"
      w="100%"
      top="0"
      h="100px"
      p="10px 20px"
      justifyContent="space-between"
      shadow="sm"
      bg={navBarBg}
    >
      <NavBarLogo logoSize="72px" />
      <HStack gap={5}>
        <ColorModeSwitch />
        <Button colorScheme="yellow" variant="ghost">
          Sign in
        </Button>
        <Button colorScheme="yellow" variant="solid">
          Sign up
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
