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
import {
  cargueInicial,
  generacionDeInformeDeJunta,
  comentariosPorArea,
  comentariosGenerales,
  redondeoDeCifras,
  parametrizacion,
} from "./assets/data/dataInternosVista4.js";
import { otrosInformesValorem } from "./assets/data/dataInternosVista5.js";
import {
  generalDetallePorConcepto,
  indicadoresFinancieros,
  generarVersionFinal,
} from "./assets/data/dataInternosVista8.js";
import { ContenidoInterno } from "./components/ContenidoInterno";

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
          <Route
            index
            element={<ContenidoInterno datos={administracion[0].datos} />}
          />
        </Route>
        <Route
          path="carga-datos"
          element={<VistaInterna datos={cargaDeDatos} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={cargaDeDatos[0].datos} />}
          />
          <Route
            path="tasa-de-cambio"
            element={<ContenidoInterno datos={cargaDeDatos[1].datos} />}
          />
          <Route
            path="cargue-de-informacion"
            element={<ContenidoInterno datos={cargaDeDatos[2].datos} />}
          />
          <Route
            path="reportes"
            element={<ContenidoInterno datos={cargaDeDatos[3].datos} />}
          />
        </Route>
        <Route
          path="conciliacion"
          element={<VistaInterna datos={conciliacion} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={conciliacion[0].datos} />}
          />
          <Route
            path="inputs"
            element={<ContenidoInterno datos={conciliacion[1].datos} />}
          />
          <Route
            path="reportes"
            element={<ContenidoInterno datos={conciliacion[2].datos} />}
          />
        </Route>
        <Route
          path="consolidacion"
          element={<VistaInterna datos={consolidacion} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={consolidacion[0].datos} />}
          />
          <Route
            path="inputs"
            element={<ContenidoInterno datos={consolidacion[1].datos} />}
          />
          <Route
            path="reportes"
            element={<ContenidoInterno datos={consolidacion[2].datos} />}
          />
        </Route>
        <Route path="reportes" element={<VistaInterna datos={reportes} />}>
          <Route
            index
            element={<ContenidoInterno datos={reportes[0].datos} />}
          />
        </Route>
      </Route>

      <Route path="/elaboracion-de-notas-consolidas" element={<LayoutHome />}>
        <Route
          path="/elaboracion-de-notas-consolidas"
          element={<VistaInterna datos={notasConsolidacion} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={notasConsolidacion[0].datos} />}
          />
          <Route
            path="preparacion"
            element={<ContenidoInterno datos={notasConsolidacion[1].datos} />}
          />
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
          <Route
            index
            element={<ContenidoInterno datos={estadosFinancieros[0].datos} />}
          />
          <Route
            path="consulta-estados-financieros"
            element={<ContenidoInterno datos={estadosFinancieros[1].datos} />}
          />
          <Route
            path="reporte-de-informacion-intercompañias"
            element={<ContenidoInterno datos={estadosFinancieros[2].datos} />}
          />
        </Route>
        <Route
          path="notas-a-los-estados-financieros"
          element={<VistaInterna datos={notasEstadosFinancieros} />}
        >
          <Route
            index
            element={
              <ContenidoInterno datos={notasEstadosFinancieros[0].datos} />
            }
          />
          <Route
            path="notas-cierre-anual"
            element={
              <ContenidoInterno datos={notasEstadosFinancieros[1].datos} />
            }
          />
        </Route>
      </Route>

      <Route path="/informe-de-junta" element={<LayoutHome />}>
        <Route index element={<VistaGrid datos={dataVista4} />} />
        <Route
          path="cargue-inicial"
          element={<VistaInterna datos={cargueInicial} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={cargueInicial[0].datos} />}
          />
          <Route
            path="real"
            element={<ContenidoInterno datos={cargueInicial[1].datos} />}
          />
        </Route>
        <Route
          path="generacion-de-informe-de-junta"
          element={<VistaInterna datos={generacionDeInformeDeJunta} />}
        >
          <Route
            index
            element={
              <ContenidoInterno datos={generacionDeInformeDeJunta[0].datos} />
            }
          />
          <Route
            path="asignacion-subconceptos"
            element={
              <ContenidoInterno datos={generacionDeInformeDeJunta[1].datos} />
            }
          />
          <Route
            path="detalle-variacion-variable"
            element={
              <ContenidoInterno datos={generacionDeInformeDeJunta[2].datos} />
            }
          />
          <Route
            path="validacion-cifras"
            element={
              <ContenidoInterno datos={generacionDeInformeDeJunta[3].datos} />
            }
          />
        </Route>
        <Route
          path="comentarios-por-area"
          element={<VistaInterna datos={comentariosPorArea} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={comentariosPorArea[0].datos} />}
          />
        </Route>
        <Route
          path="comentarios-generales"
          element={<VistaInterna datos={comentariosGenerales} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={comentariosGenerales[0].datos} />}
          />
        </Route>
        <Route
          path="redondeo-de-cifras"
          element={<VistaInterna datos={redondeoDeCifras} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={redondeoDeCifras[0].datos} />}
          />
        </Route>
        <Route
          path="parametrizacion"
          element={<VistaInterna datos={parametrizacion} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={parametrizacion[0].datos} />}
          />
        </Route>
      </Route>

      <Route path="/otros-informes-valorem" element={<LayoutHome />}>
        <Route
          path="/otros-informes-valorem"
          element={<VistaInterna datos={otrosInformesValorem} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={otrosInformesValorem[0].datos} />}
          />
        </Route>
      </Route>

      <Route path="/informe-de-junta-caracol-tv" element={<LayoutHome />}>
        <Route index element={<VistaGrid datos={dataVista8} />} />
        <Route
          path="generar-detalle-por-concepto"
          element={<VistaInterna datos={generalDetallePorConcepto} />}
        >
          <Route
            index
            element={
              <ContenidoInterno datos={generalDetallePorConcepto[0].datos} />
            }
          />
          <Route
            path="detalle-de-subconcepto-por-concepto"
            element={<ContenidoInterno datos={cargueInicial[1].datos} />}
          />
        </Route>
        <Route
          path="indicadores-financieros"
          element={<VistaInterna datos={indicadoresFinancieros} />}
        >
          <Route
            index
            element={
              <ContenidoInterno datos={indicadoresFinancieros[0].datos} />
            }
          />
        </Route>
        <Route
          path="generar-version-final"
          element={<VistaInterna datos={generarVersionFinal} />}
        >
          <Route
            index
            element={<ContenidoInterno datos={generarVersionFinal[0].datos} />}
          />
        </Route>
      </Route>

      {/* <Route path="*" element={<Navigate replace to="/home" />} /> */}
    </Routes>
  );
}
