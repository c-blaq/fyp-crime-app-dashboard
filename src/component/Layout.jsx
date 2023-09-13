import { useEffect, useRef, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const PageLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef(null);

  // const handleClickOutside = (e) => {
  //   if (sidebarRef.current && !sidebarRef.current.contains(e?.target)) {
  //     setOpenSidebar(false);
  //   }
  // };
  // useEffect(() => {
  // if (true) {
  //   document.addEventListener("click", handleClickOutside, true);
  // }
  // return () => {
  //   document.removeEventListener("click", handleClickOutside, true);
  // };
  // }, [openSidebar]);

  return (
    <Flex height="100vh" position="relative">
      <Box
        ref={sidebarRef}
        bg="#F7F7F7"
        paddingX="16px"
        paddingBottom="20px"
        width={{
          base: "50%",
          lg: "20%",
        }}
        zIndex="4"
        maxW={{ base: "auto", lg: "256px" }}
        h="full"
        position={{ base: "absolute", lg: "relative" }}
        transform={{
          base: openSidebar ? "translateX(0)" : "translateX(-100%)",
          lg: "translateX(0)",
        }}
        transition="transform 0.2s ease-in-out"
      >
        <Sidebar />
      </Box>
      <Box flex="1" h="full" minW={0} overflowY="auto" position="relative">
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        {children}
      </Box>

      {/* modal for sidebar open */}
      {openSidebar && (
        <Box
          position="fixed"
          bg="blackAlpha.500"
          top="0"
          bottom="0"
          left="0"
          right="0"
        ></Box>
      )}
    </Flex>
  );
};

export default PageLayout;
