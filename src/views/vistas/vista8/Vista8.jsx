import { dataVista8 } from "../../../assets/data/dataVista8.js";
import { Grid } from "../../../components/Grid.jsx";

// Importación Estilos
import styles from "../../../css/general.module.css";

export function Vista8() {
  return (
    <div className={styles.outlet}>
      <Grid datos={dataVista8} />
    </div>
  )
}
