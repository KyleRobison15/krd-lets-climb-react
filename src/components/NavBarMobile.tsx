import NavBarLogo from "./NavBarLogo";
import useAuth from "../hooks/useAuth";
import { AvatarMenu } from "./AvatarMenu";
import LoggedOutNavMenu from "./LoggedOutNavMenu";
import useLoading from "../hooks/useLoading";
import { SkeletonCircle } from "@chakra-ui/react";

const NavBarMobile = () => {
  const { auth, user } = useAuth();
  const {isLoading} = useLoading();

  const renderMenu = () => {
    if(auth.accessToken && isLoading){
      return <SkeletonCircle size="64px" />
    }

    return auth.accessToken && user ? <AvatarMenu /> : <LoggedOutNavMenu />
  }

  return (
    <>
      <NavBarLogo logoSize="72px" />
      {renderMenu()}
    </>
  );
};

export default NavBarMobile;
