import { createContext, useContext, useState } from "react";

const userContext = createContext();
const userSetAuth = createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function useUserSetAuth() {
  return useContext(userSetAuth);
}

export function AuthProvider({ children }) {
  const [userAuth, setUserAuth] = useState(null);

  const cargarUsuarioAuth = (user) => {
    setUserAuth(user);
  };

  return (
    <userContext.Provider value={userAuth}>
      <userSetAuth.Provider value={cargarUsuarioAuth}>
        {children}
      </userSetAuth.Provider>
    </userContext.Provider>
  );
}
