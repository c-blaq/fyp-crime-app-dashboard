import React from "react";
import PageLayout from "../../component/Layout";
import { Box, Heading } from "@chakra-ui/react";
import ReportTabs from "./ReportTabs";

const Reports = () => {
  return (
    <PageLayout>
      <Box maxW="7xl" margin="auto" paddingX="16px">
        <Heading
          as="h1"
          ffontSize={{
            base: "24px",
            md: "36px",
          }}
          marginBottom="24px"
          color="#050505"
        >
          Reports
        </Heading>
        <ReportTabs />
      </Box>
    </PageLayout>
  );
};

export default Reports;
