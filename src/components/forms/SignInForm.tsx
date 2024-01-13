import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
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
import { z } from "zod";
import useZodForm from "../../hooks/useZodForm";
import { focusBorderColors } from "../../utility/bgColors";

const signInFormSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z
    .string()
    .min(1, { message: "Password is required." })
    .regex(RegExp("^(?=.*[0-9]).{8,}$"), {
      message:
        "Password must be at least 8 characters long and contain at least 1 number.",
    }),
});

// Define the shape of our form by creating a typescript type called "FormData"
// This is to provide type safety and intellisense
// In this example, z.infer returns a typescript type based on the shape of our schema
type FormData = z.infer<typeof signInFormSchema>;

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const inputFocusColor = useColorModeValue(
    focusBorderColors.light,
    focusBorderColors.dark
  );

  const errorInputFocusColor = useColorModeValue("red.500", "red.300");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: signInFormSchema });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSignIn = (data: FormData) => console.log(data);

  return (
    <>
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
            focusBorderColor={
              errors.username ? errorInputFocusColor : inputFocusColor
            }
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
              focusBorderColor={
                errors.password ? errorInputFocusColor : inputFocusColor
              }
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
                colorScheme={errors.password ? "red" : "yellow"}
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
    </>
  );
};

export default SignInForm;
