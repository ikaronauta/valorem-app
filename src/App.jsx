import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { LayoutHome } from "./views/layouts/LayoutHome";
import { LayoutLogin } from "./views/layouts/LayoutLogin";
import { LayoutVista } from "./views/layouts/LayoutVista";
import { ChangePassword } from "./views/login/ChangePassword";
import { Login } from "./views/login/Login";
import { UnlockUser } from "./views/login/UnlockUser";
import { Vista1 } from "./views/vistas/vista1/Vista1";
import { VistaInterna1 } from "./views/vistas/vista1/vistasInternas/VistaInterna1";
import { VistaInterna2 } from "./views/vistas/vista1/vistasInternas/VistaInterna2";
import { VistaInterna3 } from "./views/vistas/vista1/vistasInternas/VistaInterna3";
import { VistaInterna4 } from "./views/vistas/vista1/vistasInternas/VistaInterna4";
import { VistaInterna5 } from "./views/vistas/vista1/vistasInternas/VistaInterna5";
import { Vista2 } from "./views/vistas/vista2/Vista2";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutLogin />}>
        <Route index element={<Login />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="unlock-user" element={<UnlockUser />} />
      </Route>

      <Route path="/home" element={<LayoutHome />}>
        <Route index element={<Home />} />
        <Route path="/home/procesos-consolidacion">
          <Route index element={<Vista1 />} />
          <Route path="/home/procesos-consolidacion/" element={<LayoutVista />}>
            <Route
              path="/home/procesos-consolidacion/administracion"
              element={<VistaInterna1 prueba="prueba" />}
            />
            <Route
              path="/home/procesos-consolidacion/carga-datos"
              element={<VistaInterna2 prueba="prueba" />}
            />
            <Route
              path="/home/procesos-consolidacion/conciliacion"
              element={<VistaInterna3 prueba="prueba" />}
            />
            <Route
              path="/home/procesos-consolidacion/consolidacion"
              element={<VistaInterna4 prueba="prueba" />}
            />
            <Route
              path="/home/procesos-consolidacion/reportes"
              element={<VistaInterna5 prueba="prueba" />}
            />
          </Route>
        </Route>

        <Route
          path="/home/elaboracion-notas-consolidacion"
          element={<LayoutVista />}
        >
          <Route index element={<Vista2 />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Route>
    </Routes>
  );
}
