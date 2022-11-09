import { Grid } from "../components/Grid";

//Importación Estilos
import styles from "../css/general.module.css";
import { useChangeTitleContext } from "../context/TitleProvider";
import { useDataContext } from "../context/DataProvider";

export function VistaGrid({ title }) {
  const cambiarTitulo = useChangeTitleContext();
  const datos = useDataContext();

  cambiarTitulo(title);

  return (
    <div className={styles.outlet}>
      {" "}
      <Grid datos={datos} />{" "}
    </div>
  );
}
