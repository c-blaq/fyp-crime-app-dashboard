import { BsChevronLeft, BsPlus } from "react-icons/bs";
import PageLayout from "../../component/Layout";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NewAdmin = () => {
  return (
    <PageLayout>
      <Box maxW="7xl" margin="auto" paddingX="16px">
        <Link to="/overview">
          <BsChevronLeft />
        </Link>

        <Flex marginY="24px" gap="16px" justify="space-between">
          <Box>
            <Heading
              as="h2"
              fontSize={{
                base: "18",
                md: "24px",
              }}
            >
              Fathi Babayeju
            </Heading>
            <Text
              color="gray.600"
              marginY="6px"
              fontSize={{
                base: "14px",
                md: "16px",
              }}
            >
              babayejuadesina@gmail.com
            </Text>
            <Text>Administrator</Text>
          </Box>
          <Button variant="unstyled">Log out</Button>
        </Flex>

        <Flex align="center" justify="space-between">
          <Text>Sub-admins</Text>
          <Button
            display="flex"
            align="center"
            fontSize={{
              base: "14px",
              md: "16px",
            }}
          >
            <BsPlus fontSize="24px" />
            <Text>Add Admin</Text>
          </Button>
        </Flex>
      </Box>
    </PageLayout>
  );
};

export default NewAdmin;
