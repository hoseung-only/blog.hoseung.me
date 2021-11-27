import { createContext, ReactNode, useContext, useMemo } from "react";
import { v4 as createUUID } from "uuid";

const UserIdContext = createContext<string | null>(null);

interface ProviderProps {
  children: ReactNode;
}

const storageKey = "HSJANG_BLOG_USER_ID";

export function UserIdContextProvider({ children }: ProviderProps) {
  const userId = useMemo(() => {
    try {
      let userId = window.localStorage.getItem(storageKey) ?? null;
      if (!userId) {
        userId = createUUID();
        window.localStorage.setItem(storageKey, userId);
      }
      return userId;
    } catch (e) {}
    return null;
  }, []);
  return <UserIdContext.Provider value={userId}>{children}</UserIdContext.Provider>;
}

export function useUserId() {
  return useContext(UserIdContext);
}
