import { useContext } from "react";
import { AuthContext } from ".";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth };
