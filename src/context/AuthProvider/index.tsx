import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Api } from "../../services/api";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";

const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  const authenticate = async (email: string, password: string) => {
    const response = await loginRequest(email, password);

    const id = await getUserId(email);
    const payload = { token: response.token, id };

    setUser(payload);
    setUserLocalStorage(payload);
    <Navigate to="/" replace />;
  };

  const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
    <Navigate to="/login" replace />;
  };

  const getUserId = async (email: string) => {
    const user = await Api.get("/clients/" + email);
    return user.data.client.id;
  };

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
