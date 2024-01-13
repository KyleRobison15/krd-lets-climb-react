import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import SplashBgLight from "../assets/Splash_Bg_Light.jpg";
import SplashBgDark from "../assets/Splash_Bg_Dark.jpeg";
import { formContainerBgColors } from "../utility/bgColors";
import SignInForm from "../components/forms/SignInForm";

const Splash = () => {
  const splashBg = useColorModeValue(SplashBgLight, SplashBgDark);

  const formContainerBg = useColorModeValue(
    formContainerBgColors.light,
    formContainerBgColors.dark
  );

  return (
    <Flex
      h="100vh"
      w="100%"
      bgImage={`url('${splashBg}')`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      bgColor="rgba(255, 255, 255, 0.6)"
      justifyContent="center"
      alignItems="center"
      pos="relative"
    >
      <Box
        p={10}
        borderRadius="10px"
        bgColor={formContainerBg}
        w={[320, 420]}
        shadow="md"
        pos="absolute"
        top="25%"
      >
        <SignInForm />
      </Box>
    </Flex>
  );
};

export default Splash;
