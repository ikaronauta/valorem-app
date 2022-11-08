import { Grid } from "../components/Grid";

//Importación Estilos
import styles from "../css/general.module.css";
import { useChangeTitleContext } from "../context/TitleProvider";

export function VistaGrid({ title, datos }) {
  const cambiarTitulo = useChangeTitleContext();

  cambiarTitulo(title);

  return (
    <div className={styles.outlet}>
      <Grid datos={datos} />
    </div>
  );
}
