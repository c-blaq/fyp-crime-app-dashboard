import { BsChevronLeft, BsPlus } from "react-icons/bs";
import PageLayout from "../../component/Layout";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NewAdmin = () => {
  return (
    <PageLayout>
      <Link to="/overview">
        <BsChevronLeft />
      </Link>

      <Flex marginY="24px" justify="space-between">
        <Box>
          <Heading as="h2" fontSize="24px">
            Fathi Babayeju
          </Heading>
          <Text color="gray.600" marginY="6px">
            babayejuadesina@gmail.com
          </Text>
          <Text>Administrator</Text>
        </Box>
        <Button variant="unstyled">Log out</Button>
      </Flex>

      <Flex align="center" justify="space-between">
        <Text>Sub-admins</Text>
        <Button>
          <BsPlus fontSize="24px" />
          <Text>Add Admin</Text>
        </Button>
      </Flex>
    </PageLayout>
  );
};

export default NewAdmin;
