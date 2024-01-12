import { HStack, useColorModeValue } from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import NavBarLogo from "./NavBarLogo";

const NavBarMobile = () => {
  const navBarBg = useColorModeValue(
    "rgba(255,255,255,0.8)",
    "rgba(0,0,0,0.3)"
  );

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
