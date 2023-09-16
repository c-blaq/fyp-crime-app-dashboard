import { createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = "";

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};

export const useAuth = useContext(AuthContext);

export default AuthProvider;
