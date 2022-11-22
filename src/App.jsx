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
import { TitleProvider } from "./context/TitleProvider";

// ** Otros
// import { END_POINTS } from "./services/connections";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { VistaGridRoles } from "./views/VistaGridRoles";

export function App() {
  return (
    <TitleProvider>
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
          <Route index element={<VistaGrid />} />
        </Route>

        <Route
          path="/prueba/:rol"
          element={
            <ProtectedRoute>
              <LayoutHome />
            </ProtectedRoute>
          }
        >
          <Route index element={<VistaGridRoles />} />
        </Route>

        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </TitleProvider>
  );
}
