import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ children }) => {
  return (
    <Menu>
      <MenuButton>{children}</MenuButton>
      <MenuList>
        <MenuItem>View profile</MenuItem>
        <MenuItem>
          <Link to="/add-admin">Add admin</Link>
        </MenuItem>
        <MenuItem>Log out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
