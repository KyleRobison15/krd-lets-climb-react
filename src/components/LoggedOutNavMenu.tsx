import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuDivider,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";
import { BiLogInCircle } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const LoggedOutNavMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Menu colorScheme="yellow">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon h="32px" w="32px" />}
        variant="outline"
        boxSize="50px"
        colorScheme="yellow"
        borderWidth="3px"
      />
      <MenuList>
        <Link to="/auth/login">
          <MenuItem icon={<BiLogInCircle fontSize="20px" />} fontSize="lg">
            Sign in
          </MenuItem>
        </Link>
        <Link to="/auth/register">
          <MenuItem icon={<FiUserPlus fontSize="20px" />} fontSize="lg">
            Sign up
          </MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem
          icon={
            colorMode === "light" ? (
              <SunIcon fontSize="20px" />
            ) : (
              <BsMoonStars fontSize="20px" />
            )
          }
          fontSize="lg"
          onClick={toggleColorMode}
        >
          Color Mode
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LoggedOutNavMenu;
