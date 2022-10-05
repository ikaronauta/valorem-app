import { Route, Routes } from "react-router-dom";

import { LayoutLogin } from "./views/layouts/LayoutLogin";
import { ChangePassword } from "./views/login/ChangePassword";
import { Login } from "./views/login/Login";
import { UnlockUser } from "./views/login/UnlockUser";

import { LayoutHome } from "./views/layouts/LayoutHome";
import { Home } from "./views/Home";
import { VistaGrid } from "./views/VistaGrid";
import { VistaInterna } from "./views/VistaInterna";

import { dataVista1 } from "./assets/data/dataVista1.js";
import { dataVista3 } from "./assets/data/dataVista3.js";
import { dataVista4 } from "./assets/data/dataVista4.js";
import { dataVista8 } from "./assets/data/dataVista8.js";

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
        <Route
          path="/home/procesos-consolidacion"
          element={<VistaGrid datos={dataVista1} />}
        />
        <Route
          path="/home/procesos-consolidacion/administracion"
          element={<VistaInterna />}
        />
        <Route
          path="/home/procesos-consolidacion/carga-datos"
          element={<VistaInterna />}
        />
        <Route
          path="/home/procesos-consolidacion/conciliacion"
          element={<VistaInterna />}
        />
        <Route
          path="/home/procesos-consolidacion/consolidacion"
          element={<VistaInterna />}
        />
        <Route
          path="/home/procesos-consolidacion/reportes"
          element={<VistaInterna />}
        />

        {/* Vistas Tarjeta 2 */}
        <Route
          path="/home/elaboracion-notas-consolidacion"
          element={<VistaInterna />}
        />

        {/* Vistas Tarjeta 3 */}
        <Route
          path="/home/reportes-financieros-y-otros-reportes"
          element={<VistaGrid datos={dataVista3} />}
        />
        <Route
          path="/home/reportes-financieros-y-otros-reportes/estados-financieros"
          element={<VistaInterna />}
        />
        <Route
          path="/home/reportes-financieros-y-otros-reportes/nota-a-los-estos-financieros"
          element={<VistaInterna />}
        />

        {/* Vistas Tarjeta 4 */}
        <Route
          path="/home/informe-de-junta"
          element={<VistaGrid datos={dataVista4} />}
        />
        <Route
          path="/home/informe-de-junta/cargue-inicial"
          element={<VistaInterna />}
        />
        <Route
          path="/home/informe-de-junta/generacion-de-informe-de-junta"
          element={<VistaInterna />}
        />
        <Route
          path="/home/informe-de-junta/comentarios-por-area"
          element={<VistaInterna />}
        />
        <Route
          path="/home/informe-de-junta/comentarios-generales"
          element={<VistaInterna />}
        />
        <Route
          path="/home/informe-de-junta/redondeo-de-cifras"
          element={<VistaInterna />}
        />
        <Route
          path="/home/informe-de-junta/informe-de-junta"
          element={<VistaInterna />}
        />
        <Route
          path="/home/informe-de-junta/parametrizacion"
          element={<VistaInterna />}
        />

        {/* Vistas Tarjeta 5 */}
        <Route path="/home/otros-informes-valorem" element={<VistaInterna />} />

        {/* Vistas Tarjeta 8 */}
        <Route
          path="/home/informe-de-junta-caracol-tv"
          element={<VistaGrid datos={dataVista8} />}
        />
        <Route
          path="/home/informe-de-junta-caracol-tv/generar-detalle-por-concepto"
          element={<VistaInterna />}
        />
        <Route
          path="/home/informe-de-junta-caracol-tv/indicadores-financieros"
          element={<VistaInterna />}
        />
        <Route
          path="/home/informe-de-junta-caracol-tv/generar-version-final"
          element={<VistaInterna />}
        />
      </Route>
    </Routes>
  );
}
