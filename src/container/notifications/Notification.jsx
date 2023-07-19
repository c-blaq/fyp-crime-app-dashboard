import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BsExclamationOctagon } from "react-icons/bs";

const Notification = () => {
  return (
    <Flex
      marginBottom="20px"
      gap="10px"
      borderBottom="1px solid #ccc"
      paddingBottom="16px"
      maxW="575px"
    >
      <Box marginTop="3px">
        <BsExclamationOctagon color="#F00" />
      </Box>
      <Box>
        <Heading as="h2" fontSize="16px">
          New Report
        </Heading>
        <Text fontSize="14px" marginY="4px">
          Bleeding from the smallest blood vessels looks like a tricle
        </Text>
        <Text fontSize="12px" color="gray.600">
          Sun Feb 02 2023, 9:47
        </Text>
      </Box>
    </Flex>
  );
};

export default Notification;
