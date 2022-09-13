import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

const ProtectedRoutes = () => {
  const auth = useAuth();

  if (!auth.id) {
    return <h1>You don't have access!</h1>;
  }

  return <Outlet />;
};

export { ProtectedRoutes };
