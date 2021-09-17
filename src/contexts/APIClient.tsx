import { createContext, useMemo, ReactNode, useContext } from "react";

import { Client } from "@hoseung-only/blog-api-client";

const APIClientContext = createContext<Client | null>(null);

export function APIClientContextProvider({ children }: { children: ReactNode }) {
  const value = useMemo(() => {
    const defaultClientOptions = {
      baseURL: process.env.REACT_APP_API_BASE_URL!,
    };

    return new Client(defaultClientOptions);
  }, []);

  return <APIClientContext.Provider value={value}>{children}</APIClientContext.Provider>;
}

export function useAPIClient() {
  const context = useContext(APIClientContext);
  if (!context) {
    throw new Error("context must be provided before using");
  }
  return context;
}
