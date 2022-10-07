import { Navigate, Route, Routes } from "react-router-dom";
import { URL_SAP } from "./assets/data/variables.js"

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
import {
  cargueInicial,
  generacionDeInformeDeJunta,
  comentariosPorArea,
  comentariosGenerales,
  redondeoDeCifras,
  parametrizacion
} from "./assets/data/dataInternosVista4.js";
import { otrosInformesValorem } from "./assets/data/dataInternosVista5.js"

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

      <Route path="/elaboracion-de-notas-consolidas" element={<LayoutHome />}>
        <Route
          path="/elaboracion-de-notas-consolidas"
          element={<VistaInterna datos={notasConsolidacion} />}
        >
          <Route index element={<h1>Notas Consolidación</h1>} />
          <Route path="preparacion" element={<h1>Preparación</h1>} />
        </Route>
      </Route>

      <Route
        path="/reportes-financieros-y-otros-reportes"
        element={<LayoutHome />}
      >
        <Route index element={<VistaGrid datos={dataVista3} />} />
        <Route
          path="estados-financieros"
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
          path="notas-a-los-estados-financieros"
          element={<VistaInterna datos={notasEstadosFinancieros} />}
        >
          <Route index element={<h1>Notas Trimestrales</h1>} />
          <Route
            path="notas-cierre-anual"
            element={<h1>Consulta Estados Financieros</h1>}
          />
        </Route>
      </Route>

      <Route path="/informe-de-junta" element={<LayoutHome />}>
        <Route index element={<VistaGrid datos={dataVista4} />} />
        <Route
          path="cargue-inicial"
          element={<VistaInterna datos={cargueInicial} />}
        >
          <Route index element={<h1>Presupuesto</h1>} />
          <Route path="real" element={<h1>Real</h1>} />
        </Route>
        <Route
          path="generacion-de-informe-de-junta"
          element={<VistaInterna datos={generacionDeInformeDeJunta} />}
        >
          <Route index element={<h1>Método de Participación</h1>} />
          <Route
            path="asignacion-subconceptos"
            element={<h1>Asignación Subconpcetos</h1>}
          />
          <Route
            path="detalle-variacion-variable"
            element={<h1>Detalle Variación Balance</h1>}
          />
          <Route
            path="validacion-cifras"
            element={<h1>Validación Cifras</h1>}
          />
        </Route>
        <Route
          path="comentarios-por-area"
          element={<VistaInterna datos={comentariosPorArea} />}
        >
          <Route index element={<h1>Comentarios</h1>} />
        </Route>
        <Route
          path="comentarios-generales"
          element={<VistaInterna datos={comentariosGenerales} />}
        >
          <Route index element={<h1>Comentarios</h1>} />
        </Route>
        <Route
          path="redondeo-de-cifras"
          element={<VistaInterna datos={redondeoDeCifras} />}
        >
          <Route index element={<h1>Redondeo</h1>} />
        </Route>
        <Route
          path="redondeo-de-cifras"
          element={<VistaInterna datos={redondeoDeCifras} />}
        >
          <Route index element={<h1>Redondeo</h1>} />
        </Route>
        <Route
          path="parametrizacion"
          element={<VistaInterna datos={parametrizacion} />}
        >
          <Route index element={<h1>Mantenimiento</h1>} />
        </Route>
      </Route>
      
      <Route path="/otros-informes-valorem" element={<LayoutHome />}>
        <Route
          path="/otros-informes-valorem"
          element={<VistaInterna datos={otrosInformesValorem} />}
        >
          <Route index element={<h1>Datos Maestros</h1>} />
        </Route>
      </Route>

      <Route path="/informe-de-junta-caracol-tv" element={<LayoutHome />}>
        <Route index element={<VistaGrid datos={dataVista8} />} />
      </Route>

      {/* <Route path="*" element={<Navigate replace to="/home" />} /> */}

    </Routes>
  );
}
