import { Flex, Heading, Text } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const TabTitle = ({ children }) => {
  return (
    <Flex justify="space-between" gap="16px">
      <Heading
        as="h3"
        fontSize={{
          base: "16px",
          md: "20px",
        }}
        marginBottom="20px"
      >
        {children}
      </Heading>
      <Link to="/reports">
        <Flex align="center" gap="4px" fontSize="14px">
          <Text color="#4C20A9" w="max-content" textDecoration="underline">
            View all reports
          </Text>
          <BsChevronRight size="14px" />
        </Flex>
      </Link>
    </Flex>
  );
};

export default TabTitle;
