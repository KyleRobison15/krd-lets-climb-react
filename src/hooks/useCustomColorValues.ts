import { useColorModeValue } from "@chakra-ui/react";

const navBarBgColors = {
  light: "rgba(255,255,255,0.9)",
  dark: "rgba(0,0,0,0.8)",
};

const formContainerBgColors = {
  light: "rgba(255,255,255,0.9)",
  dark: "rgba(0,0,0,0.8)",
};

const focusBorderColors = {
  light: "yellow.400",
  dark: "yellow.200",
};

const errorBorderColors = {
  light: "red.500",
  dark: "red.300",
};

export default function useCustomColorValues() {
  const inputFocusColor = useColorModeValue(
    focusBorderColors.light,
    focusBorderColors.dark
  );

  const errorInputFocusColor = useColorModeValue(
    errorBorderColors.light,
    errorBorderColors.dark
  );

  const formContainerBg = useColorModeValue(
    formContainerBgColors.light,
    formContainerBgColors.dark
  );

  const navBarBg = useColorModeValue(navBarBgColors.light, navBarBgColors.dark);

  const customColorValues = {
    inputFocusColor: inputFocusColor,
    errorInputFocusColor: errorInputFocusColor,
    formContainerBg: formContainerBg,
    navBarBg: navBarBg,
  };

  return customColorValues;
}
