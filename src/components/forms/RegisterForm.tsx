import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  VStack,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { z } from "zod";
import useZodForm from "../../hooks/useZodForm";
import FormInput from "../common/FormInput";
import FormPasswordInput from "../common/FormPasswordInput";
import { Link, useNavigate } from "react-router-dom";
import useApiClient, { ApiError } from "../../hooks/useApiClient";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const registerFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Please enter a valid email address." }),
    username: z.string().min(1, { message: "Username is required." }),
    password: z
      .string()
      .min(1, { message: "Password is required." })
      .regex(RegExp("^(?=.*[0-9]).{8,}$"), {
        message:
          "Password must be at least 8 characters long and contain at least 1 number.",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Password confirmation is required." })
      .regex(RegExp("^(?=.*[0-9]).{8,}$"), {
        message:
          "Password must be at least 8 characters long and contain at least 1 number.",
      }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

// Define the shape of our form by creating a typescript type called "FormData"
// This is to provide type safety and intellisense
// In this example, z.infer returns a typescript type based on the shape of our schema
type FormData = z.infer<typeof registerFormSchema>;

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  
  const { setAuth, auth } = useAuth();
  const {apiClient, apiEndpoints} = useApiClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useZodForm({ schema: registerFormSchema });

  const onRegister = (data: FormData) => {
    const registerRequestDto = {
      email: data.email,
      username: data.username,
      password: data.password,
    };

    apiClient
      .post<typeof auth>(apiEndpoints.register, registerRequestDto)
      .then((response) => {
        setAuth(response.data);
        navigate("/climbs");
      })
      .catch((error) => {
        const {
          response: { data: apiError, status },
        }: { response: { data: ApiError; status: number } } = error;

        // If the error response is due to a bad request, set the error messages on the fields that failed the request
        if (status === 400) {
          
          apiError.errorDetails.forEach((detail) => {
            const errorField = detail.target.split("/").pop();
            setError(errorField as `root.${string}`, {
              type: "manual",
              message: detail.description,
            });
          })

        }
        // Use generic error response if the error was unexpected
        else {
          setErrorMessage(
            "Oops! There was an unexpected error. Please try again later."
          );
        }
      });
  };

  return (
    <>
      <Heading textAlign="center">On Belay?</Heading>
      <Text textAlign="center" mb={4}>
        Create a new account.
      </Text>
      <VStack
        as="form"
        onSubmit={handleSubmit(onRegister)}
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
          label={"Email"}
          id={"email"}
          type={"text"}
          isInvalid={errors.email ? true : false}
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />
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
        <FormPasswordInput
          label={"Confirm Password"}
          id={"confirmPassword"}
          isInvalid={errors.confirmPassword ? true : false}
          register={{ ...register("confirmPassword") }}
          errorMessage={errors.confirmPassword?.message}
        />
        <Button type="submit" colorScheme="yellow" mt={4}>
          Sign up
        </Button>
        <Divider my={2} />
        <Flex gap={2} justifyContent="center">
          <Box textAlign="center">
            Already have an account?
            <Link to="/auth/login">
              <Button pl={2} colorScheme="yellow" variant="link">
                Sign in
              </Button>
            </Link>
          </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default RegisterForm;
