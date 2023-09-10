import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <Flex height="100vh" gap="16px" position="relative">
      <Box
        bg="#F7F7F7"
        paddingX="16px"
        paddingBottom="20px"
        width="20%"
        maxW="256px"
        h="full"
        display={{ base: "none", lg: "block" }}
      >
        <Sidebar />
      </Box>
      <Box
        flex="1"
        h="full"
        minW={0}
        paddingX="16px"
        overflowY="auto"
        position="relative"
      >
        <Box maxW="7xl" margin="auto">
          <Header />
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default PageLayout;
