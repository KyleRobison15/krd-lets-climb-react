import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/LetsClimb_Logo2.jpeg";

const NavBar = () => {
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
    >
      <Image src={logo} boxSize="72px" cursor="pointer" borderRadius="5px" />
    </HStack>
  );
};

export default NavBar;
