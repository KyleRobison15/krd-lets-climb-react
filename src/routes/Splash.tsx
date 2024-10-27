import { Box, Flex } from "@chakra-ui/react";
import useCustomColorValues from "../hooks/useCustomColorValues";
import { Outlet } from "react-router-dom";

const Splash = () => {
  const { formContainerBg, splashBgImage } = useCustomColorValues();
  const mx = ["0px", "0px", "-50px", "-100px"];

  return (
    <Flex
      id="splash"
      flexGrow="1"
      bgImage={`url('${splashBgImage}')`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      bgColor="rgba(255, 255, 255, 0.6)"
      justifyContent="center"
      alignItems="center"
      mx={mx}
    >
      <Box
        p={10}
        borderRadius="10px"
        bgColor={formContainerBg}
        w={[320, 420]}
        shadow="md"
        my="30px"
      >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Splash;
