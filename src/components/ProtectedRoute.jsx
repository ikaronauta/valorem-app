import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/AuthProvider";

export function ProtectedRoute({ children }) {
  const usuarioAuth = useUserContext();
  const usuarioSessionStorage = sessionStorage.getItem("VALOREM_APP");

  if (usuarioAuth || usuarioSessionStorage) return children;
  else return <Navigate to="/" />;
}
