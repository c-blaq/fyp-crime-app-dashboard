import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import QueryProvider from "./context/QueryProvider";
import AuthProvider from "./context/AuthProvider";

const theme = extendTheme({
  colors: {
    whiteShade: {
      1: "#FAFAFA",
      2: "#F7F7F7",
    },
    primary: {
      100: "#E3D6FF",
      800: "#4C20A9",
      1000: "#261055",
    },
    secondary: {
      100: "##FFEADA",
      600: "#FF9446",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>
);
