import { useColorModeValue } from "@chakra-ui/react";
import SplashBgLight from "../assets/Splash_Bg_Light.jpg";
import SplashBgDark from "../assets/Splash_Bg_Dark.jpeg";

const splashBgImage = {
  light: SplashBgLight,
  dark: SplashBgDark,
};

const navBarBgColors = {
  light: "rgba(255,255,255,0.9)",
  dark: "rgba(0,0,0,1)",
};

const mainBackgroundColor = {
  light: "gray.100",
  dark: "gray.800",
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

  const mainBg = useColorModeValue(
    mainBackgroundColor.light,
    mainBackgroundColor.dark
  );

  const splashBgIamge = useColorModeValue(
    splashBgImage.light,
    splashBgImage.dark
  );

  const customColorValues = {
    inputFocusColor: inputFocusColor,
    errorInputFocusColor: errorInputFocusColor,
    formContainerBg: formContainerBg,
    navBarBg: navBarBg,
    splashBgImage: splashBgIamge,
    mainBgColor: mainBg
  };

  return customColorValues;
}
