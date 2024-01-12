import { HStack, useColorModeValue } from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import ColorModeSwitch from "./ColorModeSwitch";
import NavBarLogo from "./NavBarLogo";

const NavBarMobile = () => {
  const navBarBg = useColorModeValue("", "gray.900");

  return (
    <HStack
      position="fixed"
      zIndex="1000"
      w="100%"
      top="0"
      h="100px"
      p="10px 20px"
      justifyContent="space-between"
      shadow="sm"
      bg={navBarBg}
    >
      <NavBarLogo logoSize="72px" />
      <ColorModeSwitch />
      <NavMenu />
    </HStack>
  );
};

export default NavBarMobile;
