import { SunIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsMoonStars } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

import useAuth from "../hooks/useAuth";

export const AvatarMenu = () => {

  const { setAuth, auth: {user}} = useAuth();
  const avatarBg = useColorModeValue("yellow.400", "yellow.200");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton aria-label="Options Menu">
        <Avatar
          name={
            user?.firstName && user?.lastName
              ? `${user?.firstName} ${user?.lastName}`
              : ""
          }
          src={user?.imageFileName}
          bg={avatarBg}
          textColor="black"
          size="lg"
        />
      </MenuButton>
      <MenuList>
        <MenuItem
          icon={<IoSettingsOutline fontSize="20px"/>}
          fontSize="lg"
        >
          Settings
        </MenuItem>
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
        <MenuDivider />
        <MenuItem
          icon={<BiLogInCircle fontSize="20px" />}
          fontSize="lg"
          onClick={() => setAuth({ accessToken: "", user: null })}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
