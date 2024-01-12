import { Image, useColorMode } from "@chakra-ui/react";
import logoDark from "../assets/LetsClimb_Logo2_Dark.png";
import logoLight from "../assets/LetsClimb_Logo2_Light.png";

interface Props {
  logoSize: string;
}

const NavBarLogo = ({ logoSize }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === "light" ? logoLight : logoDark}
      boxSize={logoSize}
      cursor="pointer"
      borderRadius="5px"
    />
  );
};

export default NavBarLogo;
