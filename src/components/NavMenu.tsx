import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const NavMenu = () => {
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
        <MenuItem fontSize="lg">Sign in</MenuItem>
        <MenuDivider />
        <MenuItem fontSize="lg">Sign up</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
