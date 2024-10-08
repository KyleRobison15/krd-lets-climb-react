import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import { BsMoonStars } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavMenu = () => {
  const { auth, setAuth } = useAuth();
  const { toggleColorMode, colorMode } = useColorMode();

  const renderLoggedInMenu = () => {
    return (
      <>
        <Link to="" onClick={() => setAuth({accessToken: ""})}>
          <MenuItem icon={<BiLogInCircle fontSize="20px" />} fontSize="lg">
            Logout
          </MenuItem>
        </Link>
      </>
    );
  };

  const renderLoggedOutMenu = () => {
    return (
      <>
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
      </>
    );
  };

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
        {auth?.accessToken ? renderLoggedInMenu() : renderLoggedOutMenu()}
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

export default NavMenu;
