import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z
    .string()
    .min(1, { message: "Password is required." })
    .regex(RegExp("^(?=.*[0-9]).{8,}$"), {
      message:
        "Password must be at least 8 characters long and contain 1 number.",
    }),
});

// Define the shape of our form by creating a typescript type called "FormData"
// This is to provide type safety and intellisense
// In this example, z.infer returns a typescript type based on the shape of our schema
type FormData = z.infer<typeof schema>;

const Splash = () => {
  const [showPassword, setShowPassword] = useState(false);

  const splashBg = useColorModeValue(SplashBgLight, SplashBgDark);

  const formContainerBg = useColorModeValue(
    formContainerBgColors.light,
    formContainerBgColors.dark
  );

  const inputFocusColor = useColorModeValue(
    focusBorderColors.light,
    focusBorderColors.dark
  );

  // React hook form uses ref under the hood to track our input field state
  // There is no rendering involved here since we are not updating state with each keystroke anymore
  // Pass the FormData type to our useForm hook type parameter so we get type safety and auto-completion.
  // In this example we also need to pass in a resolver configuration so we can implement schema based validation with Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSignIn = (data: FieldValues) => console.log(data);

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
        <VStack
          as="form"
          onSubmit={handleSubmit(onSignIn)}
          spacing={4}
          align="stretch"
        >
          <FormControl
            colorScheme="yellow"
            isInvalid={errors.username ? true : false}
          >
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              focusBorderColor={inputFocusColor}
              type="text"
              {...register("username")} // This adds name, onBlur, onChange and ref to our input field (from the useForm hook)
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password ? true : false}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                focusBorderColor={inputFocusColor}
                type={showPassword ? "text" : "password"}
                {...register("password")} // This adds name, onBlur, onChange and ref to our input field (from the useForm hook)
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
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
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
