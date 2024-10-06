import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// This component is how we can protect resources that require authentication to be displayed.
// Any child components of RequireAuth will require an access token in order to be displayed!
// The child components will be rendered using the <Outlet /> component and specific protected routes.
const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    // If there is an access token in our AuthContext, then there is a logged in user
    // Render the Outlet if we have a logged in user
    // Navigate to the login page if we do not have a user
    auth?.accessToken ? (
      <Outlet />
    ) : (
      <Navigate to="/auth/login" state={{ from: location }} replace />
    )
  );
};

export default RequireAuth;
