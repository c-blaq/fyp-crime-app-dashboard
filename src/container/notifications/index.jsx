import { Box, Heading } from "@chakra-ui/react";
import PageLayout from "../../component/Layout";
import Notification from "./Notification";

const Notifications = () => {
  return (
    <PageLayout>
      <Box maxW="7xl" margin="auto" paddingX="16px">
        <Heading
          as="h1"
          fontSize={{
            base: "24px",
            md: "36px",
          }}
          marginTop="24px"
          marginBottom="24px"
          color="#050505"
        >
          Notifications
        </Heading>
        <Notification />
        <Notification />
        <Notification />
      </Box>
    </PageLayout>
  );
};

export default Notifications;
