import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthProvider";

const Form = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    adminUserLogin,
    userCredentials,
    setUserCredentials,
    isLoading,
    tokens,
  } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (userCredentials.email === "") {
        return setUserCredentials({
          ...userCredentials,
          errorMessage: { email: "Email is required!" },
        });
      }

      if (!userCredentials.email.includes("@")) {
        return setUserCredentials({
          ...userCredentials,
          errorMessage: { email: "Please inlude @ in the email address!" },
        });
      }

      if (userCredentials.password === "") {
        return setUserCredentials({
          ...userCredentials,
          errorMessage: { password: "Password is required!" },
        });
      }

      await adminUserLogin(userCredentials);

      if (tokens.accessToken) {
        navigate("/overview");
        toast({
          title: "Login successful!",
          status: "success",
          position: "top-right",
          duration: 3000,
        });
      }
    } catch (error) {
      if (error?.response) {
        toast({
          title: error.response?.data.error || "Something went wrong!",
          status: "error",
          position: "top-right",
          duration: 3000,
        });
      }
    }
  };

  return (
    <FormControl
      isInvalid={
        !userCredentials.password ||
        !userCredentials.email ||
        !userCredentials.email.includes("@")
      }
    >
      <Box mb="20px">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="user@gmail.com"
          onChange={handleChange}
        />
        <FormErrorMessage>
          {userCredentials.errorMessage.email}
        </FormErrorMessage>
      </Box>
      <Box>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <FormErrorMessage>
          {userCredentials.errorMessage.password}
        </FormErrorMessage>
      </Box>
      <Button
        mt="48px"
        w="full"
        _hover={{ bg: "#6234c7" }}
        bg="#4C20A9"
        color="white"
        onClick={handleLogin}
      >
        {!isLoading ? "Log in" : <Spinner size="sm" />}
      </Button>
    </FormControl>
  );
};

export default Form;
