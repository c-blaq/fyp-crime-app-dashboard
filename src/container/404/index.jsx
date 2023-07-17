import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Flex align="center" justify="center" textAlign="center" minH="500px">
      <Box>
        <Heading as="h1" fontSize="9xl">
          404!
        </Heading>
        <Text fontSize="2xl" marginBottom="10px">
          Page not found!
        </Text>
        <Link to="/overview">
          <Text color="blue">Click here to go back to homepage</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default NotFound;
