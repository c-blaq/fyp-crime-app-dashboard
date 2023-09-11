import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
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
      </Flex>
    </Box>
  );
};

export default Header;
