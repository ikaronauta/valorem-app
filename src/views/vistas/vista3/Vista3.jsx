import { dataVista3 } from "../../../assets/data/dataVista3.js";
import { Grid } from "../../../components/Grid";

// Importación Estilos
import styles from "../../../css/general.module.css";

export function Vista3() {
  return (
    <div className={styles.outlet}>
      <Grid datos={dataVista3} />
    </div>
  );
}
