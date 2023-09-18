import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLoginMutation } from "../api/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { loginAdmin, isLoading } = useLoginMutation();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    errorMessage: {},
  });
  const [tokens, setTokens] = useState(() =>
    localStorage.getItem("__tokens")
      ? JSON.parse(localStorage.getItem("__tokens"))
      : null
  );

  const adminUserLogin = async (body) => {
    const { tokens } = await loginAdmin(body);

    setTokens(localStorage.setItem("__tokens", JSON.stringify(tokens)));
  };

  return (
    <AuthContext.Provider
      value={{
        tokens,
        adminUserLogin,
        userCredentials,
        setUserCredentials,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { tokens } = useAuth();

  useEffect(() => {
    if (!tokens) {
      navigate("/");
    }
  }, [tokens]);

  return children;
};

export default AuthProvider;
