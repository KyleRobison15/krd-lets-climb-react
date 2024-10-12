import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export interface LoadingContextInterface {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultLoadingState = {
  isLoading: false,
  setLoading: (isLoading: boolean) => {}
} as LoadingContextInterface;

const LoadingContext = createContext(defaultLoadingState);

export const LoadingProvider = ({children}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{isLoading, setLoading: setIsLoading}}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingContext;