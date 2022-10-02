import { dataVista4 } from "../../../assets/data/dataVista4.js";
import { Grid } from "../../../components/Grid.jsx";

// Importación Estilos
import styles from "../../../css/general.module.css";

export function Vista4() {
  return (
    <div className={styles.outlet}>
      <Grid datos={dataVista4} />
    </div>
  )
}
