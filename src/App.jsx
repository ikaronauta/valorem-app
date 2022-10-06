import { Route, Routes } from "react-router-dom";

import { LayoutLogin } from "./views/layouts/LayoutLogin";
import { ChangePassword } from "./views/login/ChangePassword";
import { Login } from "./views/login/Login";
import { UnlockUser } from "./views/login/UnlockUser";

import { LayoutHome } from "./views/layouts/LayoutHome";
import { VistaGrid } from "./views/VistaGrid";
import { VistaInterna } from "./views/VistaInterna";

import {
  dataHome,
  dataVista1,
  dataVista3,
  dataVista4,
  dataVista8,
} from "./assets/data/data.js";

import {
  administracion,
  cargaDeDatos,
  conciliacion,
  consolidacion,
  reportes,
} from "./assets/data/dataInternosVista1";

import { notasConsolidacion } from "./assets/data/dataInternosVista2.js";
import {
  estadosFinancieros,
  notasEstadosFinancieros,
} from "./assets/data/dataInternosVista3.js";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutLogin />}>
        <Route index element={<Login />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="unlock-user" element={<UnlockUser />} />
      </Route>

      <Route path="/home" element={<LayoutHome />}>
        <Route index element={<VistaGrid datos={dataHome} />} />

        {/* Vistas Tarjeta 1 */}
        <Route
          path="procesos-consolidacion"
          element={<VistaGrid datos={dataVista1} />}
        />
        <Route
          path="procesos-consolidacion/administracion"
          element={<VistaInterna datos={administracion} />}
        >
          <Route index element={<h1>Administración</h1>} />
        </Route>

        <Route
          path="procesos-consolidacion/carga-datos"
          element={<VistaInterna datos={cargaDeDatos} />}
        >
          <Route index element={<h1>Matriz de Inversion</h1>} />
          <Route path="tasa-de-cambio" element={<h1>Tasa de cambio</h1>} />
          <Route
            path="cargue-de-informacion"
            element={<h1>Cargue de Información</h1>}
          />
          <Route path="reportes" element={<h1>Reportes</h1>} />
        </Route>

        <Route
          path="/home/procesos-consolidacion/conciliacion"
          element={<VistaInterna datos={conciliacion} />}
        >
          <Route index element={<h1>Ejecutar Conciliación</h1>} />
          <Route path="inputs" element={<h1>Inputs</h1>} />
          <Route path="reportes" element={<h1>Reportes</h1>} />
        </Route>

        <Route
          path="/home/procesos-consolidacion/consolidacion"
          element={<VistaInterna datos={consolidacion} />}
        >
          <Route index element={<h1>Ejecutar Consolidación</h1>} />
          <Route path="inputs" element={<h1>Inputs</h1>} />
          <Route index element={<h1>Ejecutar Consolidación</h1>} />
          <Route path="reportes" element={<h1>Reportes</h1>} />
        </Route>

        <Route
          path="/home/procesos-consolidacion/reportes"
          element={<VistaInterna datos={reportes} />}
        >
          <Route index element={<h1>Reportes</h1>} />
        </Route>

        {/* Vistas Tarjeta 2 */}
        <Route
          path="/home/elaboracion-notas-consolidacion"
          element={<VistaInterna datos={notasConsolidacion} />}
        >
          <Route index element={<h1>Notas Consolidación</h1>} />
          <Route path="preparacion" element={<h1>Preparación</h1>} />
        </Route>

        {/* Vistas Tarjeta 3 */}
        <Route
          path="/home/reportes-financieros-y-otros-reportes"
          element={<VistaGrid datos={dataVista3} />}
        />

        <Route
          path="/home/reportes-financieros-y-otros-reportes/estados-financieros"
          element={<VistaInterna datos={estadosFinancieros} />}
        >
          <Route index element={<h1>Cargue Estados Financieros</h1>} />
          <Route
            path="consulta-estados-financieros"
            element={<h1>Consulta Estados Financieros</h1>}
          />
          <Route
            path="reporte-de-informacion-intercompañias"
            element={<h1>Reporte de Información Intercompañias</h1>}
          />
        </Route>

        <Route
          path="/home/reportes-financieros-y-otros-reportes/notas-a-los-estados-financieros"
          element={<VistaInterna datos={notasEstadosFinancieros} />}
        >
          <Route index element={<h1>Notas Trimestrales</h1>} />
          <Route
            path="notas-cierre-anual"
            element={<h1>Notas Cierre Anual</h1>}
          />
        </Route>

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
