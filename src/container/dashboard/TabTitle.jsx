import { Flex, Heading } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const TabTitle = ({ children }) => {
  return (
    <Flex justify="space-between" align="center">
      <Heading as="h3" fontSize="20px" marginBottom="20px">
        {children}
      </Heading>
      <Link to="/reports">
        <Flex align="center" gap="2px" fontSize="14px">
          <span
            style={{
              textDecoration: "underline",
              color: "#4C20A9",
            }}
          >
            View all reports
          </span>
          <BsChevronRight />
        </Flex>
      </Link>
    </Flex>
  );
};

export default TabTitle;
