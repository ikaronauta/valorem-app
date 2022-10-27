import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/AuthProvider";

export function ProtectedRoute({ children }) {
  const usuarioAuth = useUserContext();
  const usuariosessionStorage = sessionStorage.getItem("VALOREM_APP");

  if (usuarioAuth || usuariosessionStorage) return children;
  else return <Navigate to="/" />;
}
