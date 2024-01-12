import { Flex, useColorModeValue } from "@chakra-ui/react";
import SplashBgLight from "../assets/Splash_Bg_Light.jpg";
import SplashBgDark from "../assets/Splash_Bg_Dark.jpeg";

const Splash = () => {
  const splashBg = useColorModeValue(SplashBgLight, SplashBgDark);

  return (
    <Flex
      h="100vh"
      w="100%"
      bgImage={`url('${splashBg}')`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      bgColor="rgba(255, 255, 255, 0.6)"
    ></Flex>
  );
};

export default Splash;
