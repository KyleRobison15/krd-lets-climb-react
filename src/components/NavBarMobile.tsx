import { HStack } from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import NavBarLogo from "./NavBarLogo";
import useCustomColorValues from "../hooks/useCustomColorValues";

const NavBarMobile = () => {
  const { navBarBg } = useCustomColorValues();

  return (
    <HStack
      position="fixed"
      zIndex="1000"
      w="100%"
      top="0"
      h="100px"
      p="10px 20px"
      justifyContent="space-between"
      shadow="md"
      bgColor={navBarBg}
    >
      <NavBarLogo logoSize="72px" />
      <NavMenu />
    </HStack>
  );
};

export default NavBarMobile;
