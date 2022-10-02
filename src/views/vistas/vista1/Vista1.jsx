import { dataVista1 } from "../../../assets/data/dataVista1.js";
import { Grid } from "../../../components/Grid";

//Importación Estilos
import styles from "../../../css/general.module.css";

export function Vista1() {
  return (
    <div className={styles.outlet}>
      <Grid datos={dataVista1} />
    </div>
  );
}
