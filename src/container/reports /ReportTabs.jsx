import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

import OverviewIcon from "../../component/OverviewIcon";
import TableContainer from "../../component/Table";
import TableWrapper from "../../component/Table";

const ReportTabs = () => {
  return (
    <Tabs variant="unstyled">
      <TabList gap="20px">
        <Tab _selected={{ color: "#4C20A9" }}>
          <Text>All</Text>
        </Tab>

        <Tab _selected={{ color: "#4C20A9" }}>
          <Text>Pending</Text>
        </Tab>

        <Tab _selected={{ color: "#4C20A9" }}>
          <Text>Attended to</Text>
        </Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="3px" bg="#4C20A9" />

      <TabPanels marginTop="40px">
        <TabPanel>
          <Heading as="h3" fontSize="20px" marginBottom="20px">
            All
          </Heading>
          <TableContainer />
        </TabPanel>
        <TabPanel>
          <Heading as="h3" fontSize="20px" marginBottom="20px">
            Pending
          </Heading>
          <TableWrapper />
        </TabPanel>
        <TabPanel>
          <Heading as="h3" fontSize="20px" marginBottom="20px">
            Completed
          </Heading>
          <TableWrapper />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ReportTabs;
