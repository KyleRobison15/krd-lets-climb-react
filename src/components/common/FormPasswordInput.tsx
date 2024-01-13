import { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BiHide, BiShow } from "react-icons/bi";
import { FormInputProps } from "./FormInput";
import useCustomColorValues from "../../hooks/useCustomColorValues";

const FormPasswordInput = ({
  label,
  isInvalid,
  errorMessage,
  id,
  register,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { inputFocusColor, errorInputFocusColor } = useCustomColorValues();

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup>
        <Input
          id={id}
          focusBorderColor={inputFocusColor}
          errorBorderColor={errorInputFocusColor}
          type={showPassword ? "text" : "password"}
          {...register} // This adds name, onBlur, onChange and ref to our input field (from the useForm hook)
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
            colorScheme={errorMessage ? "red" : "yellow"}
            variant="ghost"
            size="sm"
          />
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default FormPasswordInput;
