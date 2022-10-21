import { Grid } from "../components/Grid";

//Importación Estilos
import styles from "../css/general.module.css";

export function VistaGrid({ datos }) {
  return (
    <div className={styles.outlet}>
      <Grid datos={datos} />
    </div>
  );
}
