import App from "./App";
import RequireAuth from "./components/RequireAuth";
import RegisterForm from "./components/forms/RegisterForm";
import SignInForm from "./components/forms/SignInForm";
import Home from "./routes/Home";
import Splash from "./routes/Splash";

const applicationRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      // Public Routes
      {
        path: "auth",
        element: <Splash />,
        children: [
          {
            path: "login",
            element: <SignInForm />,
          },
          {
            path: "register",
            element: <RegisterForm />,
          },
        ],
      },
      // Protected Routes
      {
        path: "/",
        element: <RequireAuth />,
        children: [
          {
            path: "climbs",
            element: <Home />,
          },
        ],
      },
    ],
  },
];

export default applicationRoutes;
