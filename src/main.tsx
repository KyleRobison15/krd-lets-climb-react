import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { AuthProvider } from "./context/AuthProvider.tsx";
import applicationRoutes from "./routes.tsx";
import "./index.css";
import { LoadingProvider } from "./context/LoadingProvider.tsx";

const router = createBrowserRouter(applicationRoutes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <LoadingProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </LoadingProvider>
    </ChakraProvider>
  </React.StrictMode>
);
