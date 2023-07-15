import { Box, Flex, Heading } from "@chakra-ui/react";
import Form from "./Form";

const LoginPage = () => {
  return (
    <Flex justify="space-between" minH={"100vh"}>
      <Flex justify="center" direction="column" flex="1" px="5">
        <Box maxW="425px" mx="auto" w="full">
          <Heading as="h1" color="blackAlpha.800" size={"lg"} mb="32px">
            Login
          </Heading>
          <Form />
        </Box>
      </Flex>

      <Flex
        bgColor="purple.600"
        color="white"
        justify="center"
        align="center"
        w={["100%", "50%"]}
        display={{ base: "none", md: "flex" }}
      >
        <Heading as="h2" size="xl">
          Always be at Alert.
        </Heading>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
