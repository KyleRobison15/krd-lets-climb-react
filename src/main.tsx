import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "./theme";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Splash from "./routes/Splash.tsx";
import SignInForm from "./components/forms/SignInForm.tsx";
import RegisterForm from "./components/forms/RegisterForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Splash />,
        children: [
          {
            path: "/",
            element: <SignInForm />,
          },
          {
            path: "/register",
            element: <RegisterForm />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
