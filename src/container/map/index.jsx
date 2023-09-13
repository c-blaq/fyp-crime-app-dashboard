import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import PageLayout from "../../component/Layout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map",
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });

  console.log(import.meta.env.VITE_API_KEY);

  return (
    <PageLayout>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            // left: "0",
            bottom: "0",
          }}
          center={{
            lat: 8.71,
            lng: 4.4666,
          }}
          zoom={10}
        >
          Tests
        </GoogleMap>
      ) : (
        <p>ssnnn</p>
      )}

      <Box zIndex="2" position="fixed" mx="16px" maxW="736px">
        <Box bg="white" padding="4px " w="fit-content" color="black">
          <Link to="/reports">
            <BsChevronLeft size="24px" />
          </Link>
        </Box>

        <Box bg="white" w="fit-content" mt="20px" borderRadius="4px">
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" mr="16px" textAlign="left">
                  View details
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel py={4}>
                <Heading
                  as="h2"
                  fontSize={{
                    base: "18px",
                    md: "24px",
                  }}
                  mb="10px"
                >
                  Snake bite
                </Heading>

                <Box fontSize="14px" color="gray.600" mb="1rem">
                  <Text mb="4px">Sun Feb 02, 2021</Text>
                  <Text mb="4px">Location: Safari, Malete</Text>
                  <Text mb="4px">Sent by: Dr. John Doe</Text>
                </Box>

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box
          bg="white"
          textAlign="center"
          mt="20px"
          p="1rem"
          w={{
            base: "100%",
            md: "300px",
          }}
          borderRadius="4px"
        >
          <Heading as="h3" fontSize="14px" mb="10px">
            Upload Status
          </Heading>
          <Select placeholder="Select option" outline="none" size="sm">
            <option value="pending">Pending</option>
            <option value="option2">In progress</option>
            <option value="option3">Completed</option>
          </Select>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Map;
