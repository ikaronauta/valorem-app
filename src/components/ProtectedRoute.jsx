import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const usuarioSessionStorage = sessionStorage.getItem("VALOREM_APP");

  if (usuarioSessionStorage) return children;
  else return <Navigate to="/" />;
}
