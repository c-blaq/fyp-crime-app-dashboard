import React from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  return (
    <FormControl>
      <Box mb="20px">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input type="email" id="email" placeholder="user@gmail.com" />
      </Box>
      <Box>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input type="password" id="password" placeholder="password" />
      </Box>
      <Button
        mt="48px"
        w="full"
        _hover={{ bg: "#6234c7" }}
        bg="#4C20A9"
        color="white"
        onClick={() => navigate("/dashboard")}
      >
        Log in
      </Button>
    </FormControl>
  );
};

export default Form;
