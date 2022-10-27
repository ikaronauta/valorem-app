import { useState } from "react";
import { getData } from "../auth/getData";
import { Grid } from "../components/Grid";

//Importación Estilos
import styles from "../css/general.module.css";

export function VistaGrid({ endPoint }) {
  const [datos, setDatos] = useState([]);

  const promesa = getData(endPoint);
  promesa.then((data) => {
    setDatos(data);
  });

  return (
    <div className={styles.outlet}>
      <Grid datos={datos} />
    </div>
  );
}
