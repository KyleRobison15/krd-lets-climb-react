/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import useCustomColorValues from "../../hooks/useCustomColorValues";

export interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  isInvalid: boolean;
  errorMessage?: string;
  register: any;
}

const FormInput = ({
  label,
  type,
  isInvalid,
  errorMessage,
  id,
  register,
}: FormInputProps) => {
  const { inputFocusColor, errorInputFocusColor } = useCustomColorValues();

  return (
    <FormControl colorScheme="yellow" isInvalid={isInvalid}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        focusBorderColor={inputFocusColor}
        errorBorderColor={errorInputFocusColor}
        type={type}
        {...register}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
