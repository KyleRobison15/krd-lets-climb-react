import { Box, Button, Divider, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { z } from "zod";
import useZodForm from "../../hooks/useZodForm";
import FormInput from "../common/FormInput";
import FormPasswordInput from "../common/FormPasswordInput";
import { Link } from "react-router-dom";

const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First Name is required." })
      .max(35, { message: "First Name must be less than 35 characters." })
      .regex(RegExp("/^([^0-9]*)$/"), {
        message: "First Name cannot contain numbers.",
      }),
    lastName: z
      .string()
      .min(1, { message: "Last Name is required." })
      .max(50, { message: "Last Name must be less than 50 characters." })
      .regex(RegExp("/^([^0-9]*)$/"), {
        message: "Last Name cannot contain numbers.",
      }),
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
      .min(1, { message: "Password confirmation is required." }),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: registerFormSchema });

  const onRegister = (data: FormData) => console.log(data);

  return (
    <>
      <Heading textAlign="center">
        On Belay?
      </Heading>
      <Text textAlign="center" mb={4}>
        Create a new account.
      </Text>
      <VStack
        as="form"
        onSubmit={handleSubmit(onRegister)}
        spacing={4}
        align="stretch"
      >
        <FormInput
          label={"First Name"}
          id={"firstName"}
          type={"text"}
          isInvalid={errors.firstName ? true : false}
          register={{ ...register("firstName") }}
          errorMessage={errors.firstName?.message}
        />
        <FormInput
          label={"Last Name"}
          id={"lastName"}
          type={"text"}
          isInvalid={errors.lastName ? true : false}
          register={{ ...register("lastName") }}
          errorMessage={errors.lastName?.message}
        />
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
