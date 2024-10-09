import { Button, HStack } from "@chakra-ui/react";
import NavBarLogo from "./NavBarLogo";
import ColorModeButton from "./ColorModeButton";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const { auth, setAuth } = useAuth();

  return auth.accessToken ? (
    <>
      <NavBarLogo logoSize="72px" />
      <HStack gap={5}>
        <ColorModeButton />
        <Button colorScheme="yellow" variant="solid" onClick={() => setAuth({accessToken: ""})}>
          Logout
        </Button>
      </HStack>
    </>
  ) : (
    <>
      <NavBarLogo logoSize="72px" />
      <HStack gap={5}>
        <ColorModeButton />
        <Link to="/auth/login">
          <Button colorScheme="yellow" variant="ghost">
            Sign in
          </Button>
        </Link>
        <Link to={"/auth/register"}>
          <Button colorScheme="yellow" variant="solid">
            Sign up
          </Button>
        </Link>
      </HStack>
    </>
  );
};

export default NavBar;
