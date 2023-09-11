import { Box, Heading } from "@chakra-ui/react";
import PageLayout from "../../component/Layout";
import OverviewTabs from "./OverviewTabs";

const Dashboard = () => {
  return (
    <PageLayout>
      <Box w="full" maxW="7xl" margin="auto" paddingX="16px">
        <Heading
          as="h1"
          fontSize={{
            base: "24px",
            md: "36px",
          }}
          marginBottom="24px"
          color="#050505"
        >
          Overview
        </Heading>
        <OverviewTabs />
      </Box>
    </PageLayout>
  );
};

export default Dashboard;
