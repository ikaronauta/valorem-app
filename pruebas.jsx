<Route
path="/procesos-de-consolidacion-de-estados-financieros"

element={<LayoutHome />}
>
<Route index element={<VistaGrid datos={dataVista1} />} />
<Route
path="administracion"
element={<VistaInterna datos={administracion} />}
/>

<>
  {/* 

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
</>;
