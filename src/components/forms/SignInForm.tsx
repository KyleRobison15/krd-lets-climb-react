import { Box, Button, Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import { z } from "zod";
import useZodForm from "../../hooks/useZodForm";
import FormInput from "../common/FormInput";
import FormPasswordInput from "../common/FormPasswordInput";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: signInFormSchema });

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
