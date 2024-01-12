import {
  Button,
  HStack,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import logoDark from "../assets/LetsClimb_Logo2_Dark.png";
import logoLight from "../assets/LetsClimb_Logo2_Light.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const navBarBg = useColorModeValue("", "gray.900");

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
      bg={navBarBg}
    >
      <Image
        src={colorMode === "light" ? logoLight : logoDark}
        boxSize="72px"
        cursor="pointer"
        borderRadius="5px"
      />
      <HStack gap={5}>
        <ColorModeSwitch />
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
