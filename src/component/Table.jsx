import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Text,
  Tooltip,
  TableContainer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TableWrapper = () => {
  const navigate = useNavigate();

  return (
    <TableContainer overflowX="auto" maxW="full" className="hide-scrollbar">
      <Table>
        <Thead bg="#F7F7F7">
          <Tr>
            <Td>Title</Td>
            <Td>Sent By</Td>
            <Td>Date and Time</Td>
            <Td>Location</Td>
            <Td>Status</Td>
          </Tr>
        </Thead>

        <Tbody gap="20px !important">
          <Tr
            alignItems="center"
            cursor="pointer"
            marginBottom="20px !important"
            _hover:bg="yellow.100"
            onClick={() => navigate("/reports/map")}
          >
            <Td>
              <Tooltip
                width="80%"
                mx="10px"
                placement="bottom"
                label="Let someone know your destination, your route, and when you
                expect to arrive."
              >
                <Text
                  noOfLines={1}
                  maxW={{
                    base: "180px",
                    md: "350px",
                  }}
                >
                  Let someone know your destination, your route, and when you
                  expect to arrive.
                </Text>
              </Tooltip>
            </Td>
            <Td>
              <Text>Lynn Abshire</Text>
            </Td>
            <Td>
              <Text>Wed Sep 14 2022 02:49:24</Text>
            </Td>
            <Td>
              <Text>Malete</Text>
            </Td>
            <Td>
              <Text
                color="#FF9446"
                bg="#FFEADA"
                borderRadius="full"
                padding="8px"
                textAlign="center"
              >
                Pending
              </Text>
            </Td>
          </Tr>
          <Tr
            alignItems="center"
            cursor="pointer"
            marginBottom="20px !important"
            onClick={() => navigate("/reports/map")}
          >
            <Td maxW="350px">
              <Tooltip
                width="80%"
                mx="10px"
                placement="bottom"
                label="Let someone know your destination, your route, and when you
                expect to arrive."
              >
                <Text
                  noOfLines={1}
                  maxW={{
                    base: "180px",
                    md: "350px",
                  }}
                >
                  Let someone know your destination, your route, and when you
                  expect to arrive.
                </Text>
              </Tooltip>
            </Td>
            <Td>
              <Text>Lynn Abshire</Text>
            </Td>
            <Td>
              <Text>Wed Sep 14 2022 02:49:24</Text>
            </Td>
            <Td>
              <Text>Malete</Text>
            </Td>
            <Td>
              <Text
                color="#FF9446"
                bg="#FFEADA"
                borderRadius="full"
                padding="8px"
                textAlign="center"
              >
                Pending
              </Text>
            </Td>
          </Tr>
          <Tr
            alignItems="center"
            cursor="pointer"
            marginBottom="20px !important"
            onClick={() => navigate("/reports/map")}
          >
            <Td maxW="350px">
              <Tooltip
                width="80%"
                mx="10px"
                placement="bottom"
                label="Let someone know your destination, your route, and when you
                expect to arrive."
              >
                <Text
                  noOfLines={1}
                  maxW={{
                    base: "180px",
                    md: "350px",
                  }}
                >
                  Let someone know your destination, your route, and when you
                  expect to arrive.
                </Text>
              </Tooltip>
            </Td>
            <Td>
              <Text>Lynn Abshire</Text>
            </Td>
            <Td>
              <Text>Wed Sep 14 2022 02:49:24</Text>
            </Td>
            <Td>
              <Text>Malete</Text>
            </Td>
            <Td>
              <Text
                color="#FF9446"
                bg="#FFEADA"
                borderRadius="full"
                padding="8px"
                textAlign="center"
              >
                Pending
              </Text>
            </Td>
          </Tr>
          <Tr
            alignItems="center"
            cursor="pointer"
            marginBottom="20px !important"
            onClick={() => navigate("/reports/map")}
          >
            <Td maxW="350px">
              <Tooltip
                width="80%"
                mx="10px"
                placement="bottom"
                label="Let someone know your destination, your route, and when you
                expect to arrive."
              >
                <Text
                  noOfLines={1}
                  maxW={{
                    base: "180px",
                    md: "350px",
                  }}
                >
                  Let someone know your destination, your route, and when you
                  expect to arrive.
                </Text>
              </Tooltip>
            </Td>
            <Td>
              <Text>Lynn Abshire</Text>
            </Td>
            <Td>
              <Text>Wed Sep 14 2022 02:49:24</Text>
            </Td>
            <Td>
              <Text>Malete</Text>
            </Td>
            <Td>
              <Text
                color="#FF9446"
                bg="#FFEADA"
                borderRadius="full"
                padding="8px"
                textAlign="center"
              >
                Pending
              </Text>
            </Td>
          </Tr>
          <Tr
            alignItems="center"
            cursor="pointer"
            marginBottom="20px !important"
            onClick={() => navigate("/reports/map")}
          >
            <Td maxW="350px">
              <Tooltip
                width="80%"
                mx="10px"
                placement="bottom"
                label="Let someone know your destination, your route, and when you
                expect to arrive."
              >
                <Text
                  noOfLines={1}
                  maxW={{
                    base: "180px",
                    md: "350px",
                  }}
                >
                  Let someone know your destination, your route, and when you
                  expect to arrive.
                </Text>
              </Tooltip>
            </Td>
            <Td>
              <Text>Lynn Abshire</Text>
            </Td>
            <Td>
              <Text>Wed Sep 14 2022 02:49:24</Text>
            </Td>
            <Td>
              <Text>Malete</Text>
            </Td>
            <Td>
              <Text
                color="#FF9446"
                bg="#FFEADA"
                borderRadius="full"
                padding="8px"
                textAlign="center"
              >
                Pending
              </Text>
            </Td>
          </Tr>
          <Tr
            alignItems="center"
            cursor="pointer"
            marginBottom="20px !important"
            onClick={() => navigate("/reports/map")}
          >
            <Td maxW="350px">
              <Tooltip
                width="80%"
                mx="10px"
                placement="bottom"
                label="Let someone know your destination, your route, and when you
                expect to arrive."
              >
                <Text
                  noOfLines={1}
                  maxW={{
                    base: "180px",
                    md: "350px",
                  }}
                >
                  Let someone know your destination, your route, and when you
                  expect to arrive.
                </Text>
              </Tooltip>
            </Td>
            <Td>
              <Text>Lynn Abshire</Text>
            </Td>
            <Td>
              <Text>Wed Sep 14 2022 02:49:24</Text>
            </Td>
            <Td>
              <Text>Malete</Text>
            </Td>
            <Td>
              <Text
                color="#FF9446"
                bg="#FFEADA"
                borderRadius="full"
                padding="8px"
                textAlign="center"
              >
                Pending
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableWrapper;
