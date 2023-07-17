import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <Flex minH="100vh" gap="4">
      <Box
        bg="#F7F7F7"
        paddingX="16px"
        paddingY="20px"
        width="20%"
        position="fixed"
        maxW="256px"
        top="0"
        left="0"
        bottom="0"
      >
        <Sidebar />
      </Box>
      <Box
        flex="1"
        padding="0 20px"
        marginX={"auto"}
        marginLeft="22%"
        maxWidth="1440px"
      >
        <Header />
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
