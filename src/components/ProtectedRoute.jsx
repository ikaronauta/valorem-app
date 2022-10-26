import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/AuthProvider";

export function ProtectedRoute({ children }) {
  const usuarioAuth = useUserContext();
  const usuarioLocalStorage = localStorage.getItem("VALOREM_APP");

  if (usuarioAuth || usuarioLocalStorage) return children;
  else return <Navigate to="/" />;
}
