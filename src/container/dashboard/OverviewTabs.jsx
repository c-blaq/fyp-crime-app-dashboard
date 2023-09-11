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
import TableWrapper from "../../component/Table";
import TabTitle from "./TabTitle";

const OverviewTabs = () => {
  return (
    <Tabs variant="unstyled">
      <TabList gap="20px" w="full" overflowX="auto" className="hide-scrollbar">
        <Tab
          flex="1"
          justifyContent="start"
          _selected={{ color: "#EB5757" }}
          gap={{
            base: "12px",
            md: "30px",
          }}
        >
          <Box
            w={{
              base: "30px",
              md: "40px",
            }}
            h={{
              base: "40px",
              md: "48px",
            }}
          >
            <OverviewIcon fill="#27AE60" width={"100%"} height={"100%"} />
          </Box>
          <Box textAlign="left">
            <Heading
              as="h3"
              color="black !important"
              fontSize={{
                base: "20px",
                md: "24px",
              }}
            >
              732
            </Heading>
            <Text w="max-content">Total reports</Text>
          </Box>
        </Tab>

        <Tab
          flex="1"
          justifyContent="start"
          _selected={{ color: "#EB5757" }}
          gap={{
            base: "12px",
            md: "30px",
          }}
        >
          <Box
            w={{
              base: "30px",
              md: "40px",
            }}
            h={{
              base: "40px",
              md: "48px",
            }}
          >
            <OverviewIcon fill="#27AE60" width={"100%"} height={"100%"} />
          </Box>
          <Box textAlign="left">
            <Heading
              as="h3"
              color="black !important"
              fontSize={{
                base: "20px",
                md: "24px",
              }}
            >
              500
            </Heading>
            <Text w="max-content">Completed reports</Text>
          </Box>
        </Tab>

        <Tab
          flex="1"
          justifyContent="start"
          _selected={{ color: "#EB5757" }}
          gap={{
            base: "12px",
            md: "30px",
          }}
        >
          <Box
            w={{
              base: "30px",
              md: "40px",
            }}
            h={{
              base: "40px",
              md: "48px",
            }}
          >
            <OverviewIcon fill="#27AE60" width={"100%"} height={"100%"} />
          </Box>
          <Box textAlign="left">
            <Heading
              as="h3"
              color="black !important"
              fontSize={{
                base: "20px",
                md: "24px",
              }}
            >
              100
            </Heading>
            <Text w="max-content">Pending reports</Text>
          </Box>
        </Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="3px" bg="#EB5757" />

      <TabPanels marginTop="40px">
        <TabPanel padding="0">
          <TabTitle>Recently Viewed Reports</TabTitle>
          <TableWrapper />
        </TabPanel>

        <TabPanel padding="0">
          <TabTitle>Completed Reports</TabTitle>
          <TableWrapper />
        </TabPanel>

        <TabPanel padding="0">
          <TabTitle>Pending Reports</TabTitle>
          <TableWrapper />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default OverviewTabs;
