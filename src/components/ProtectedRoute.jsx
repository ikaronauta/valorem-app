import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/AuthProvider";

export function ProtectedRoute({ children }) {
  const usuarioAuth = useUserContext();

  if (!usuarioAuth) return <Navigate to="/" />;

  return children;
}
