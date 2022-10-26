//CPEDRAZA
//BPMCO_PORTAL
//BPMCOInicio12345678.

//EndPints
//Login: https://valoremanalitica.bpmco.co/login?user=${user}&pass=${pass}
//DataHome: https://valoremanalitica.bpmco.co/roles?user=${user}

import { Navigate, Route, Routes } from "react-router-dom";

import { LayoutLogin } from "./views/layouts/LayoutLogin";
import { ChangePassword } from "./views/login/ChangePassword";
import { Login } from "./views/login/Login";
import { UnlockUser } from "./views/login/UnlockUser";

import { LayoutHome } from "./views/layouts/LayoutHome";
import { VistaGrid } from "./views/VistaGrid";
//import { VistaInterna } from "./views/VistaInterna";

import { Urls } from "./context/Urls";

import //dataHome,
// dataVista1,
// dataVista3,
// dataVista4,
// dataVista8,
"./assets/data/data.js";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";

<>
  {/* 

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
} from "./assets/data/dataInternosVista8.js"; */}
</>;

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LayoutLogin />}>
          <Route index element={<Login />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="unlock-user" element={<UnlockUser />} />
        </Route>

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <LayoutHome />
            </ProtectedRoute>
          }
        >
          <Route index element={<VistaGrid endPoint={Urls.DATA_HOME} />} />
        </Route>

        <>
          {/* <Route
        path="/procesos-de-consolidacion-de-estados-financieros"
        
        element={<LayoutHome />}
      >
        <Route index element={<VistaGrid datos={dataVista1} />} />
        <Route
          path="administracion"
          element={<VistaInterna datos={administracion} />}
        />

        <Route
          path="carga-datos"
          element={<VistaInterna datos={cargaDeDatos} />}
        />

        <Route
          path="conciliacion"
          element={<VistaInterna datos={conciliacion} />}
        />
        <Route
          path="consolidacion"
          element={<VistaInterna datos={consolidacion} />}
        />
        <Route path="reportes" element={<VistaInterna datos={reportes} />} />
      </Route>

      <Route path="/elaboracion-de-notas-consolidas" element={<LayoutHome />}>
        <Route
          path="/elaboracion-de-notas-consolidas"
          element={<VistaInterna datos={notasConsolidacion} />}
        />
      </Route>

      <Route
        path="/reportes-financieros-y-otros-reportes"
        element={<LayoutHome />}
      >
        <Route index element={<VistaGrid datos={dataVista3} />} />
        <Route
          path="estados-financieros"
          element={<VistaInterna datos={estadosFinancieros} />}
        />

        <Route
          path="notas-a-los-estados-financieros"
          element={<VistaInterna datos={notasEstadosFinancieros} />}
        ></Route>
      </Route>

      <Route path="/informe-de-junta" element={<LayoutHome />}>
        <Route index element={<VistaGrid datos={dataVista4} />} />
        <Route
          path="cargue-inicial"
          element={<VistaInterna datos={cargueInicial} />}
        />
        <Route
          path="generacion-de-informe-de-junta"
          element={<VistaInterna datos={generacionDeInformeDeJunta} />}
        ></Route>
        <Route
          path="comentarios-por-area"
          element={<VistaInterna datos={comentariosPorArea} />}
        />
        <Route
          path="comentarios-generales"
          element={<VistaInterna datos={comentariosGenerales} />}
        />
        <Route
          path="redondeo-de-cifras"
          element={<VistaInterna datos={redondeoDeCifras} />}
        />
        <Route
          path="parametrizacion"
          element={<VistaInterna datos={parametrizacion} />}
        />
      </Route>

      <Route path="/otros-informes-valorem" element={<LayoutHome />}>
        <Route
          path="/otros-informes-valorem"
          element={<VistaInterna datos={otrosInformesValorem} />}
        />
      </Route>

      <Route path="/informe-de-junta-caracol-tv" element={<LayoutHome />}>
        <Route index element={<VistaGrid datos={dataVista8} />} />
        <Route
          path="generar-detalle-por-concepto"
          element={<VistaInterna datos={generalDetallePorConcepto} />}
        />
        <Route
          path="indicadores-financieros"
          element={<VistaInterna datos={indicadoresFinancieros} />}
        />
        <Route
          path="generar-version-final"
          element={<VistaInterna datos={generarVersionFinal} />}
        />
      </Route>

       */}
        </>
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </AuthProvider>
  );
}
