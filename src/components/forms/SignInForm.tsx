import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { z } from "zod";
import useZodForm from "../../hooks/useZodForm";
import FormInput from "../common/FormInput";
import FormPasswordInput from "../common/FormPasswordInput";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useLoading from "../../hooks/useLoading";
import apiClient, {
  ApiError,
  apiEndpoints,
  getApiError,
} from "../../services/apiClient";
import { Auth, AuthResponse, User } from "../../context/AuthProvider";
import { useState } from "react";

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
  const [errorMessage, setErrorMessage] = useState("");
  const { setAuth, auth } = useAuth();
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: signInFormSchema });

  const onSignIn = (authRequest: FormData) => {

    const authObj = {...auth};

    setLoading(true);
    apiClient
      .post<AuthResponse>(apiEndpoints.authenticate, authRequest)
      .then((res1) => {
        const accessToken = res1.data.accessToken
        authObj.accessToken = accessToken;
        return apiClient.get<User>(apiEndpoints.user, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
      })
      .then((res2) => {
        authObj.user = res2.data;
        setAuth(authObj);
      })
      .catch((err) => {
        const apiError: ApiError = getApiError(err.response);
        if (apiError.apiErrorCode === "AUTHENTICATION_FAILURE") {
          setErrorMessage("Invalid username or password.");
        } else {
          setErrorMessage(apiError.message);
        }
      })
      .finally(() => {
        setLoading(false);
        if (!errorMessage) {
          navigate("/climbs");
        }
      });
  };

  return (
    <>
      <Heading textAlign="center">Climb On!</Heading>
      <Text textAlign="center" mb={4}>
        Sign in to your account.
      </Text>
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
            <Link to="/auth/register">
              <Button pl={2} colorScheme="yellow" variant="link">
                Sign up
              </Button>
            </Link>
          </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default SignInForm;
