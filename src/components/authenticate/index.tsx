import { Navigate, Outlet } from "react-router-dom";
import { getUserLocalStorage } from "../../context/AuthProvider/util";

const ProtectedRoutes = () => {
  const user = getUserLocalStorage();
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export { ProtectedRoutes };
