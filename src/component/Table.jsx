import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Tooltip,
} from "@chakra-ui/react";

const TableWrapper = () => {
  return (
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
        <Tr alignItems="center" marginBottom="20px !important">
          <Td maxW="350px">
            <Tooltip
              label="Let someone know your destination, your route, and when you
                expect to arrive."
            >
              <Text noOfLines={1}>
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
        <Tr alignItems="center" marginBottom="20px !important">
          <Td maxW="350px">
            <Tooltip
              label="Let someone know your destination, your route, and when you
                expect to arrive."
            >
              <Text noOfLines={1}>
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
        <Tr alignItems="center" marginBottom="20px !important">
          <Td maxW="350px">
            <Tooltip
              label="Let someone know your destination, your route, and when you
                expect to arrive."
            >
              <Text noOfLines={1}>
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
        <Tr alignItems="center" marginBottom="20px !important">
          <Td maxW="350px">
            <Tooltip
              label="Let someone know your destination, your route, and when you
                expect to arrive."
            >
              <Text noOfLines={1}>
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
        <Tr alignItems="center" marginBottom="20px !important">
          <Td maxW="350px">
            <Tooltip
              label="Let someone know your destination, your route, and when you
                expect to arrive."
            >
              <Text noOfLines={1}>
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
        <Tr alignItems="center" marginBottom="20px !important">
          <Td maxW="350px">
            <Tooltip
              label="Let someone know your destination, your route, and when you
                expect to arrive."
            >
              <Text noOfLines={1}>
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
  );
};

export default TableWrapper;
