import { Flex, HStack, Hide, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";
import useCustomColorValues from "./hooks/useCustomColorValues";
import Splash from "./pages/Splash";

const App = () => {
  const { navBarBg } = useCustomColorValues();

  return (
    <Flex id="app-container" m="0" p="0" flexDir="column" h="100vh">
      <HStack
        as="nav"
        id="navbar"
        h="100px"
        w="100%"
        p="10px 30px"
        justifyContent="space-between"
        shadow="md"
        bgColor={navBarBg}
        pos="fixed"
        top="0"
        zIndex="2000"
      >
        <Show below="md">
          <NavBarMobile />
        </Show>
        <Hide below="md">
          <NavBar />
        </Hide>
      </HStack>
      <Flex as="main" id="main-container" flexGrow="1" mt="100px">
        <Splash />
      </Flex>
    </Flex>
  );
};

export default App;
