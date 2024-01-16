import { useContext, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { z } from "zod";
import useZodForm from "../../hooks/useZodForm";
import FormInput from "../common/FormInput";
import FormPasswordInput from "../common/FormPasswordInput";
import AuthContext, { AuthResponse } from "../../context/AuthProvider";
import apiClient, { apiEndpoints } from "../../api/apiClient";

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
  // When sign in is successful, we will update the global authentication state by storing the access token from the server in our AuthContext
  const { setAuth, auth } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: signInFormSchema });

  const onSignIn = (data: FormData) => {
    apiClient
      .post<AuthResponse>(apiEndpoints.authenticate, data)
      .then((res) => setAuth(res.data))
      .catch((err) => {
        if (err?.response?.status === 403) {
          setErrorMessage("Invalid username or password.");
        } else {
          setErrorMessage(
            "Oops! There was an unexpected error. Please try again later."
          );
        }
      });
  };

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
        {errorMessage && (
          <Alert borderRadius="5px" status="error">
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}
        <FormInput
          label={"Username"}
          id={"username"}
          type={"text"}
          isInvalid={errors.username ? true : false}
          register={{ ...register("username") }}
          errorMessage={errors.username?.message}
        />
        <FormPasswordInput
          label={"Password"}
          id={"password"}
          isInvalid={errors.password ? true : false}
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />
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
