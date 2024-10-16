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
  useEffect,
  useState,
} from "react";
import apiClient, { ApiError, apiEndpoints, getApiError } from "../api/apiClient";
import useLoading from "../hooks/useLoading";

// This Auth type matches the AuthenticationRequest object from the krd-lets-climb-rest API
export type AuthRequest = {
  username: string;
  password: string;
}

// This Auth type matches the AuthenticationResponse object we get back from the krd-lets-climb-rest API
export type AuthResponse = {
  accessToken: string;
};

type Authority = {
  authority: string
}

// This User type matches the User model from the krd-lets-climb-rest API
export type User = {
  id: number,
  email: string,
  username: string,
  firstName: string,
  lastName: string,
  creationTs: string,
  isActive: boolean,
  role: string,
  imageFilePath: string,
  imageFileName: string,
  enabled: boolean,
  authorities: Authority[]
  accountNonExpired: boolean,
  accoundNonLocked: boolean,
  credentialsNonExpired: boolean
}

export interface AuthContextInterface {
  auth: AuthResponse;
  setAuth: Dispatch<SetStateAction<AuthResponse>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
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
  user: null,
  setUser: (user: User | null) => {}
} as AuthContextInterface;

const AuthContext = createContext(defaultAuthState);

export const AuthProvider = ({ children }: Props) => {
  const {setLoading} = useLoading();
  const [auth, setAuth] = useState<AuthResponse>({
    accessToken: "",
  });
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    // If we have an accessToken we can get the current user
    if (auth.accessToken){
          setLoading(true);
          apiClient
            .get<typeof user>(apiEndpoints.user, {headers: {Authorization : `Bearer ${auth.accessToken}`}})
            .then((res) => {
              setUser(res.data);
              setLoading(false);
            })
            .catch((err) => {
              const apiError: ApiError = getApiError(err);
              console.log(apiError);
              setLoading(false);
            });
    } else {
      setUser(null);
      setLoading(false);
    }

  }, [auth.accessToken]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
