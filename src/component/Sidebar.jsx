import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const NAV = [
    {
      title: "Overview",
      pathname: "/overview",
    },
    {
      title: "Reports",
      pathname: "/reports",
    },
  ];

  const checkPath = window.location.pathname;

  return (
    <Flex gap="20px" direction="column">
      <Heading as="h2" fontSize={{ base: "24px", lg: "32px" }} marginTop="40px">
        ResQue
      </Heading>
      <Box pt="24px">
        {NAV.map(({ title, pathname }) => (
          <Link
            to={pathname}
            key={pathname}
            style={{
              color: checkPath.includes(pathname) ? "#E3D6FF" : "black",
              background: checkPath.includes(pathname) ? "#4C20A9" : "",
              borderRadius: "4px",
              padding: "8px 16px",
              display: "block",
              marginBottom: "20px",
            }}
          >
            {title}
          </Link>
        ))}
      </Box>
    </Flex>
  );
};

export default Sidebar;
