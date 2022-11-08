import { Navigate, Route, Routes } from "react-router-dom";

// ** Layouts
import { LayoutLogin } from "./views/layouts/LayoutLogin";
import { LayoutHome } from "./views/layouts/LayoutHome";

// ** Vistas Login
import { Login } from "./views/login/Login";
import { ChangePassword } from "./views/login/ChangePassword";
import { UnlockUser } from "./views/login/UnlockUser";
import { ResetPass } from "./views/login/ResetPass";

// ** Vistas
import { VistaGrid } from "./views/VistaGrid";
//import { VistaInterna } from "./views/VistaInterna";

// ** Providers
import { AuthProvider } from "./context/AuthProvider";
import { TitleProvider } from "./context/TitleProvider";

// ** Otros
// import { END_POINTS } from "./services/connections";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { Prueba } from "./components/Prueba";
import { DataProvider } from "./context/DataProvider";

export function App() {
  return (
    <AuthProvider>
      <TitleProvider>
        <DataProvider>
          <Routes>
            <Route path="/" element={<LayoutLogin />}>
              <Route index element={<Login />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="unlock-user" element={<UnlockUser />} />
              <Route path="reset-pass" element={<ResetPass />} />
            </Route>

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <LayoutHome />
                </ProtectedRoute>
              }
            >
              <Route index element={<VistaGrid title={null} />} />
            </Route>

            <Route
              path="/informe-de-junta"
              element={
                <ProtectedRoute>
                  <LayoutHome />
                </ProtectedRoute>
              }
            >
              <Route index element={<VistaGrid title="Informe de Junta" />} />
            </Route>

            <Route
              path="/Otros Informes Refocosta"
              element={
                <ProtectedRoute>
                  <LayoutHome />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={<Prueba title="Otros Informes Refocosta" />}
              />
            </Route>

            <Route path="*" element={<Navigate replace to="/home" />} />
          </Routes>
        </DataProvider>
      </TitleProvider>
    </AuthProvider>
  );
}
