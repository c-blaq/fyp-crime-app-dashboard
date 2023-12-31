import { Box, Flex, Heading, Text, Button, Avatar } from "@chakra-ui/react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import { useGetAdminProfileQuery } from "../api/admin";

const Header = ({ setOpenSidebar, openSidebar }) => {
  const { adminProfile } = useGetAdminProfileQuery();
  return (
    <Box
      as="header"
      paddingTop={{
        base: "20px",
        lg: "40px",
      }}
      paddingBottom="20px"
      paddingX="16px"
      position="relative"
      maxW="7xl"
      margin="auto"
    >
      <Flex align="center" justify={{ base: "space-between", lg: "end" }}>
        <Button
          display={{
            base: "block",
            lg: "none",
          }}
          position="relative"
          zIndex="10"
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
        >
          <AiOutlineMenu />
        </Button>

        <Heading
          as="h2"
          fontSize={{ base: "20px", md: "28px", lg: "32px" }}
          display={{
            base: "block",
            lg: "none",
          }}
        >
          <Link to="/">ResQue</Link>
        </Heading>

        <Flex
          align="center"
          justify="end"
          gap={{
            base: "10px",
            lg: "16px",
          }}
        >
          <Link to="/notification">
            <MdOutlineNotificationsNone fontSize="24px" />
          </Link>

          <ProfileDropdown>
            <Flex gap="10px" align="center">
              <Avatar
                name={`${adminProfile?.profile.firstName} ${adminProfile?.profile.lastName}`}
                src={adminProfile?.profile.imageUrl}
                size={{
                  base: "sm",
                  lg: "md",
                }}
                bg="gray.300"
              />

              <Flex
                align="center"
                gap="10px"
                display={{
                  base: "none",
                  lg: "flex",
                }}
              >
                <Box>
                  <Heading as="h3" fontSize="16px" textAlign="left">
                    {adminProfile?.profile.firstName}{" "}
                    {adminProfile?.profile.lastName}
                  </Heading>
                  <Text fontSize="10px" color="gray.600">
                    {adminProfile?.email}
                  </Text>
                </Box>
                <BsChevronDown fontSize="24px" />
              </Flex>
            </Flex>
          </ProfileDropdown>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
