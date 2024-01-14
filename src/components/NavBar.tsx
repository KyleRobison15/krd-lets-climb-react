import { Button, HStack } from "@chakra-ui/react";
import NavBarLogo from "./NavBarLogo";
import ColorModeButton from "./ColorModeButton";

const NavBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavBar;
