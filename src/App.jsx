import { Route, Routes } from "react-router-dom";

import { LayoutLogin } from "./views/layouts/LayoutLogin";
import { ChangePassword } from "./views/login/ChangePassword";
import { Login } from "./views/login/Login";
import { UnlockUser } from "./views/login/UnlockUser";

import { LayoutHome} from "./views/layouts/LayoutHome";
import { Home } from "./views/Home";
import { VistaGrid } from "./views/VistaGrid";
import { VistaInterna } from "./views/VistaInterna";

import { dataVista1 } from "./assets/data/dataVista1.js";
import { dataVista3 } from "./assets/data/dataVista3.js"


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

        {/* Vistas Tarjeta 1 */}
        <Route path="/home/procesos-consolidacion" element={<VistaGrid datos={dataVista1} />} />
        <Route path="/home/procesos-consolidacion/administracion" element={<VistaInterna />} />
        <Route path="/home/procesos-consolidacion/carga-datos" element={<VistaInterna />} />
        <Route path="/home/procesos-consolidacion/conciliacion" element={<VistaInterna />} />
        <Route path="/home/procesos-consolidacion/consolidacion" element={<VistaInterna />} />
        <Route path="/home/procesos-consolidacion/reportes" element={<VistaInterna />} />

        {/* Vistas Tarjeta 2 */}
        <Route path="/home/elaboracion-notas-consolidacion" element={<VistaInterna />} />

        {/* Vistas Tarjeta 3 */}
        <Route path="/home/reportes-financieros-y-otros-reportes" element={<VistaGrid datos={dataVista3} />} />

      </Route>
    </Routes>
  );
}
