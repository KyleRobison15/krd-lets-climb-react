import { Button, HStack, SkeletonCircle } from "@chakra-ui/react";
import NavBarLogo from "./NavBarLogo";
import ColorModeButton from "./ColorModeButton";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AvatarMenu } from "./AvatarMenu";
import useLoading from "../hooks/useLoading";

const NavBar = () => {
  const { auth, user } = useAuth();
  const { isLoading } = useLoading();

  return (
    <>
      <NavBarLogo logoSize="72px" />
      {auth?.accessToken && isLoading ? (
        <SkeletonCircle size="64px" />
      ) : auth.accessToken && user ? (
        <AvatarMenu />
      ) : (
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
      )}
    </>
  );
};

export default NavBar;
