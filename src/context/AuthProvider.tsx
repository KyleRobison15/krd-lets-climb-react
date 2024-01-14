/* eslint-disable  @typescript-eslint/no-unused-vars */

/**
 * This is how we provide a global authentication context to our entire application.
 * The AuthProvider will track changes is authentication state and apply those changes to every component via the AuthContext
 * To get the authentication state of our app, all we need to do in the component is reference the state of the AuthContext
 * This is IMPORTANT in how we are implementing authentication because it allows us to store the JWT in MEMORY instead of in local storage or as a cookie
 * This is a much more secure way of handling JWTs
 */

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

// This Auth type matches the AuthenticationResponse object we get back from the krd-lets-climb-rest API
export type AuthResponse = {
  accessToken: string;
};

export interface AuthContextInterface {
  auth: AuthResponse;
  setAuth: Dispatch<SetStateAction<AuthResponse>>;
}

type Props = {
  children: ReactNode;
};

// The default Authentication State of our app will be an
const defaultAuthState = {
  auth: {
    accessToken: "",
  },
  setAuth: (authResponse: AuthResponse) => {},
} as AuthContextInterface;

const AuthContext = createContext(defaultAuthState);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthResponse>({
    accessToken: "",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
