import { Grid } from "../components/Grid";

//Importación Estilos
import styles from "../css/general.module.css";

export function VistaGrid({ datos, title }) {
  if (title) document.getElementById("title").innerHTML = title;
  else document.getElementById("title").innerHTML = "";
  return (
    <div className={styles.outlet}>
      <Grid datos={datos} />
    </div>
  );
}
