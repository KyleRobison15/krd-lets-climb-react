import { FormEvent, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiHide, BiShow } from "react-icons/bi";
import SplashBgLight from "../assets/Splash_Bg_Light.jpg";
import SplashBgDark from "../assets/Splash_Bg_Dark.jpeg";
import { focusBorderColors, formContainerBgColors } from "../utility/bgColors";

const Splash = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [authRequest, setAuthRequest] = useState({
    username: "",
    password: "",
  });

  const splashBg = useColorModeValue(SplashBgLight, SplashBgDark);

  const formContainerBg = useColorModeValue(
    formContainerBgColors.light,
    formContainerBgColors.dark
  );

  const inputFocusColor = useColorModeValue(
    focusBorderColors.light,
    focusBorderColors.dark
  );

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    console.log(authRequest);
  };

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
        <Heading textAlign="center" mb={4}>
          Climb on!
        </Heading>
        <VStack as="form" onSubmit={handleSignIn} spacing={4} align="stretch">
          <FormControl colorScheme="yellow">
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              focusBorderColor={inputFocusColor}
              type="text"
              value={authRequest.username}
              onChange={(e) =>
                setAuthRequest({
                  ...authRequest,
                  username: e.currentTarget.value,
                })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                focusBorderColor={inputFocusColor}
                type={showPassword ? "text" : "password"}
                value={authRequest.password}
                onChange={(e) =>
                  setAuthRequest({
                    ...authRequest,
                    password: e.currentTarget.value,
                  })
                }
              />
              <InputRightElement>
                <IconButton
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                  icon={
                    showPassword ? (
                      <BiShow fontSize="20px" />
                    ) : (
                      <BiHide fontSize="20px" />
                    )
                  }
                  onClick={handleShowPassword}
                  isRound={true}
                  colorScheme="yellow"
                  variant="ghost"
                  size="sm"
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button type="submit" colorScheme="yellow" mt={4}>
            Sign in
          </Button>
          <Divider my={2} />
          <Flex gap={2} justifyContent="center">
            <Box textAlign="center">
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
