import { Grid } from "../components/Grid";
import { useChangeTitleContext } from "../context/TitleProvider";

//Importación Estilos
import styles from "../css/general.module.css";

export function VistaGrid({ title, datos }) {
  const cambiarTitulo = useChangeTitleContext();

  cambiarTitulo(title);

  return (
    <div className={styles.outlet}>
      <Grid datos={datos} />
    </div>
  );
}
