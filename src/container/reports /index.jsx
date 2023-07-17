import React from "react";
import PageLayout from "../../component/Layout";
import { Heading } from "@chakra-ui/react";
import ReportTabs from "./ReportTabs";

const Reports = () => {
  return (
    <PageLayout>
      <Heading as="h1" fontSize="30px" marginBottom="24px" color="#050505">
        Reports
      </Heading>
      <ReportTabs />
    </PageLayout>
  );
};

export default Reports;
