import { Heading } from "@chakra-ui/react";
import PageLayout from "../../component/Layout";
import Notification from "./Notification";

const Notifications = () => {
  return (
    <PageLayout>
      <Heading
        as="h1"
        fontSize="30px"
        marginTop="50px"
        marginBottom="24px"
        color="#050505"
      >
        Notifications
      </Heading>
      <Notification />
      <Notification />
      <Notification />
    </PageLayout>
  );
};

export default Notifications;
