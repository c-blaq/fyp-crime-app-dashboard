import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <header style={{ padding: "20px 0" }}>
      <Flex align="center" justify="end" gap="16px">
        <MdOutlineNotificationsNone fontSize="24px" />
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
              <Heading as="h3" fontSize="16px">
                Fathi Babayeju
              </Heading>
              <Text fontSize="10px" color="gray.600">
                babayejuadesina@gmail.com
              </Text>
            </Box>
            <BsChevronDown fontSize="24px" />
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
