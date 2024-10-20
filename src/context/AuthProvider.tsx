/* eslint-disable  @typescript-eslint/no-unused-vars */

/**
 * This is how we provide a global authentication context to our entire application.
 * The AuthProvider will track changes in authentication state and apply those changes to every component via the AuthContext
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

// This Auth type matches the AuthenticationRequest object from the krd-lets-climb-rest API
export type AuthRequest = {
  username: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
}

export type Auth = {
  accessToken: string;
  user: User | null;
};

type Authority = {
  authority: string;
};

// This User type matches the User model from the krd-lets-climb-rest API
export type User = {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  creationTs: string;
  isActive: boolean;
  role: string;
  imageFilePath: string;
  imageFileName: string;
  enabled: boolean;
  authorities: Authority[];
  accountNonExpired: boolean;
  accoundNonLocked: boolean;
  credentialsNonExpired: boolean;
};

export interface AuthContextInterface {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
}

type Props = {
  children: ReactNode;
};

// The default Authentication State of our app will be an
const defaultAuthState = {
  auth: {
    accessToken: "",
    user: null
  },
  setAuth: (auth: Auth) => {},
} as AuthContextInterface;

const AuthContext = createContext(defaultAuthState);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<Auth>({
    accessToken: "",
    user: null
  });

  return (
    <AuthContext.Provider
      value={{ auth, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
