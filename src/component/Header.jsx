import {
  Box,
  Flex,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  return (
    <header style={{ padding: "40px 0 20px", position: "relative" }}>
      <Flex align="center" justify="end" gap="16px">
        <Link to="/notification">
          <MdOutlineNotificationsNone fontSize="24px" />
        </Link>

        <ProfileDropdown>
          <Flex gap="10px" align="center">
            <Flex
              justify="center"
              align="center"
              w="38px"
              h="38px"
              borderRadius="full"
              bg="gray.300"
            >
              FB
            </Flex>
            <Flex align="center" gap="10px">
              <Box>
                <Heading as="h3" fontSize="16px" textAlign="left">
                  Fathi Babayeju
                </Heading>
                <Text fontSize="10px" color="gray.600">
                  babayejuadesina@gmail.com
                </Text>
              </Box>
              <BsChevronDown fontSize="24px" />
            </Flex>
          </Flex>
        </ProfileDropdown>
      </Flex>
    </header>
  );
};

export default Header;
