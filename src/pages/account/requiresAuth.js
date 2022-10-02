import { useAuth } from "../../context/auth-context";
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { authUser } = useAuth();
  return authUser.isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};