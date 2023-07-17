import { Box, Heading } from "@chakra-ui/react";
import PageLayout from "../../component/Layout";
import OverviewTabs from "./OverviewTabs";

const Dashboard = () => {
  return (
    <PageLayout>
      <Heading as="h1" fontSize="30px" marginBottom="24px" color="#050505">
        Overview
      </Heading>
      <OverviewTabs />
    </PageLayout>
  );
};

export default Dashboard;
