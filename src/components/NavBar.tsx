import { Button, HStack, useColorModeValue } from "@chakra-ui/react";
import NavBarLogo from "./NavBarLogo";
import ColorModeButton from "./ColorModeButton";

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
      p="10px 30px"
      justifyContent="space-between"
      shadow="sm"
      bg={navBarBg}
    >
      <NavBarLogo logoSize="72px" />
      <HStack gap={5}>
        <ColorModeButton />
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
