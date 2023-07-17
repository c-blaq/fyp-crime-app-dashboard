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
      <Heading as="h2" marginBottom="40px">
        ALert
      </Heading>
      {NAV.map(({ title, pathname }) => (
        <Link
          to={pathname}
          key={pathname}
          style={{
            color: checkPath === pathname ? "#E3D6FF" : "black",
            background: checkPath === pathname ? "#4C20A9" : "",
            borderRadius: "4px",
            padding: "8px 16px",
          }}
        >
          {title}
        </Link>
      ))}
    </Flex>
  );
};

export default Sidebar;
