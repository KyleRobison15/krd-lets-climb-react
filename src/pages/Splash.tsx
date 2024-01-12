import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import SplashBgLight from "../assets/Splash_Bg_Light.jpg";
import SplashBgDark from "../assets/Splash_Bg_Dark.jpeg";
import { focusBorderColors, formContainerBgColors } from "../utility/bgColors";

const Splash = () => {
  const splashBg = useColorModeValue(SplashBgLight, SplashBgDark);
  const formContainerBg = useColorModeValue(
    formContainerBgColors.light,
    formContainerBgColors.dark
  );

  const inputFocusColor = useColorModeValue(
    focusBorderColors.light,
    focusBorderColors.dark
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
    >
      <Box
        p={10}
        borderRadius="10px"
        bgColor={formContainerBg}
        w={[300, 420]}
        shadow="md"
      >
        <Heading textAlign="center" mb={4}>
          Climb on!
        </Heading>
        <VStack
          as="form"
          onSubmit={() => console.log("Submitted")}
          spacing={4}
          align="stretch"
        >
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input focusBorderColor={inputFocusColor} type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input focusBorderColor={inputFocusColor} type="password" />
          </FormControl>
          <Button type="submit" colorScheme="yellow" mt={4}>
            Sign in
          </Button>
          <Divider my={2} />
          <Flex gap={2} justifyContent="center">
            <Box>
              Dont have an account?
              <Button pl={2} colorScheme="yellow" variant="link">
                Sign up
              </Button>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Splash;
