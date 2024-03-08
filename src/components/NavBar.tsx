import { Button, HStack } from "@chakra-ui/react";
import NavBarLogo from "./NavBarLogo";
import ColorModeButton from "./ColorModeButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavBarLogo logoSize="72px" />
      <HStack gap={5}>
        <ColorModeButton />
        <Link to="/">
          <Button colorScheme="yellow" variant="ghost">
            Sign in
          </Button>
        </Link>
        <Link to={"/register"}>
          <Button colorScheme="yellow" variant="solid">
            Sign up
          </Button>
        </Link>
      </HStack>
    </>
  );
};

export default NavBar;
