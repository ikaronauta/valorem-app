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
      </Route>

      <Route
        path="/procesos-de-consolidacion-de-estados-financieros"
        element={<LayoutHome />}
      >
        <Route index element={<VistaGrid datos={dataVista1} />} />
        <Route
          path="administracion"
          element={<VistaInterna datos={administracion} />}
        >
          <Route index element={<h1>Administración</h1>} />
        </Route>
        <Route
          path="carga-datos"
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
          path="conciliacion"
          element={<VistaInterna datos={conciliacion} />}
        >
          <Route index element={<h1>Ejecutar Conciliación</h1>} />
          <Route path="inputs" element={<h1>Inputs</h1>} />
          <Route path="reportes" element={<h1>Reportes</h1>} />
        </Route>
        <Route
          path="consolidacion"
          element={<VistaInterna datos={consolidacion} />}
        >
          <Route index element={<h1>Ejecutar Conciliación</h1>} />
          <Route path="inputs" element={<h1>Inputs</h1>} />
          <Route path="reportes" element={<h1>Reportes</h1>} />
        </Route>
        <Route path="reportes" element={<VistaInterna datos={reportes} />}>
          <Route index element={<h1>Reportes</h1>} />
        </Route>
      </Route>

      {/* ****************** continuar con la ruta elaboracion de notas consolidacion ****************** */}
    </Routes>
  );
}
