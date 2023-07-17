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
          <Td>
            Let someone know your destination, your route, and when you expect
            to arrive.
          </Td>
          <Td>Lynn Abshire</Td>
          <Td>Wed Sep 14 2022 02:49:24</Td>
          <Td>Malete</Td>
          <Td
            color="#FF9446"
            textAlign="center"
            bg="#FFEADA"
            borderRadius="full"
          >
            Pending
          </Td>
        </Tr>
        <Tr alignItems="center">
          <Td>
            Let someone know your destination, your route, and when you expect
            to arrive.
          </Td>
          <Td>Lynn Abshire</Td>
          <Td>Wed Sep 14 2022 02:49:24</Td>
          <Td>Malete</Td>
          <Td
            color="#FF9446"
            textAlign="center"
            bg="#FFEADA"
            borderRadius="full"
          >
            Pending
          </Td>
        </Tr>
        <Tr alignItems="center">
          <Td>
            Let someone know your destination, your route, and when you expect
            to arrive.
          </Td>
          <Td>Lynn Abshire</Td>
          <Td>Wed Sep 14 2022 02:49:24</Td>
          <Td>Malete</Td>
          <Td
            color="#FF9446"
            textAlign="center"
            bg="#FFEADA"
            borderRadius="full"
          >
            Pending
          </Td>
        </Tr>
        <Tr alignItems="center">
          <Td>
            Let someone know your destination, your route, and when you expect
            to arrive.
          </Td>
          <Td>Lynn Abshire</Td>
          <Td>Wed Sep 14 2022 02:49:24</Td>
          <Td>Malete</Td>
          <Td
            color="#FF9446"
            textAlign="center"
            bg="#FFEADA"
            borderRadius="full"
          >
            Pending
          </Td>
        </Tr>
        <Tr alignItems="center">
          <Td>
            Let someone know your destination, your route, and when you expect
            to arrive.
          </Td>
          <Td>Lynn Abshire</Td>
          <Td>Wed Sep 14 2022 02:49:24</Td>
          <Td>Malete</Td>
          <Td
            color="#FF9446"
            textAlign="center"
            bg="#FFEADA"
            borderRadius="full"
          >
            Pending
          </Td>
        </Tr>
        <Tr alignItems="center">
          <Td>
            Let someone know your destination, your route, and when you expect
            to arrive.
          </Td>
          <Td>Lynn Abshire</Td>
          <Td>Wed Sep 14 2022 02:49:24</Td>
          <Td>Malete</Td>
          <Td
            color="#FF9446"
            textAlign="center"
            bg="#FFEADA"
            borderRadius="full"
          >
            Pending
          </Td>
        </Tr>
        <Tr alignItems="center">
          <Td>
            Let someone know your destination, your route, and when you expect
            to arrive.
          </Td>
          <Td>Lynn Abshire</Td>
          <Td>Wed Sep 14 2022 02:49:24</Td>
          <Td>Malete</Td>
          <Td
            color="#FF9446"
            textAlign="center"
            bg="#FFEADA"
            borderRadius="full"
          >
            Pending
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default TableWrapper;
