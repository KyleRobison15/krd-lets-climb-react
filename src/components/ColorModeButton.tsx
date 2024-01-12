import { SunIcon } from "@chakra-ui/icons";
import { BsMoonStars } from "react-icons/bs";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      isRound={true}
      variant="solid"
      colorScheme="yellow"
      aria-label="Done"
      fontSize="20px"
      icon={colorMode === "light" ? <SunIcon /> : <BsMoonStars />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeButton;
