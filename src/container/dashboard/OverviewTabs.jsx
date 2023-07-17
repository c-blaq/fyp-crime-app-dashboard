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

const OverviewTabs = () => {
  return (
    <Tabs variant="unstyled">
      <TabList gap="20px">
        <Tab
          flex="1"
          justifyContent="start"
          _selected={{ color: "#EB5757" }}
          gap="30px"
        >
          <OverviewIcon fill="#27AE60" />
          <Box>
            <Heading
              as="h3"
              color="black !important"
              fontSize="24px"
              textAlign="left"
              marginBottom="8px"
            >
              732
            </Heading>
            <Text>Total reports</Text>
          </Box>
        </Tab>

        <Tab
          flex="1"
          justifyContent="start"
          _selected={{ color: "#EB5757" }}
          gap="30px"
        >
          <OverviewIcon fill="#27AE60" />
          <Box>
            <Heading
              as="h3"
              color="black !important"
              fontSize="24px"
              textAlign="left"
              marginBottom="8px"
            >
              500
            </Heading>
            <Text>Completed reports</Text>
          </Box>
        </Tab>

        <Tab
          flex="1"
          justifyContent="start"
          _selected={{ color: "#EB5757" }}
          gap="30px"
        >
          <OverviewIcon fill="#27AE60" />
          <Box>
            <Heading
              as="h3"
              color="black !important"
              fontSize="24px"
              textAlign="left"
              marginBottom="8px"
            >
              100
            </Heading>
            <Text>Pending reports</Text>
          </Box>
        </Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="3px" bg="#EB5757" />

      <TabPanels marginTop="40px">
        <TabPanel>
          <Heading as="h3" fontSize="20px" marginBottom="20px">
            Recently Viewed Reports
          </Heading>
          <TableContainer />
        </TabPanel>
        <TabPanel>
          <Heading as="h3" fontSize="20px" marginBottom="20px">
            Completed Reports
          </Heading>
          <TableWrapper />
        </TabPanel>
        <TabPanel>
          <Heading as="h3" fontSize="20px" marginBottom="20px">
            Pending Reports
          </Heading>
          <TableWrapper />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default OverviewTabs;
