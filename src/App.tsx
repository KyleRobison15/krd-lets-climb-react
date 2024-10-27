import { Box, Flex, HStack, Hide, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";
import useCustomColorValues from "./hooks/useCustomColorValues";
import { Outlet } from "react-router-dom";

const App = () => {
  const { navBarBg, mainBgColor } = useCustomColorValues();
  const mainMx = ["0px", "0px", "50px", "100px"];

  return (
    <Flex
      id="app-container"
      m="0"
      p="0"
      flexDir="column"
      h="100vh"
      bg={mainBgColor}
    >
      <Box
        h="100px"
        w="100%"
        shadow="md"
        bgColor={navBarBg}
        pos="fixed"
        top="0"
        zIndex="2000"
      >
        <HStack
          as="nav"
          id="navbar"
          h="100px"
          w={["100%", "100%", "calc(100% - 100px)", "calc(100% - 200px)"]}
          p="10px 30px"
          mx={mainMx}
          justifyContent="space-between"
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
      </Box>
      <Flex as="main" id="main-container" flexGrow="1" mt="100px" mx={mainMx}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default App;
