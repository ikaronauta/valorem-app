import { Grid } from "../components/Grid";
import { useChangeTitleContext } from "../context/TitleProvider";

//Importación Estilos
import styles from "../css/general.module.css";
<<<<<<< HEAD
import { useChangeTitleContext } from "../context/TitleProvider";
=======
>>>>>>> 236babd0fac1db5a9232da25c53a6a847a32b0aa

export function VistaGrid({ title, datos }) {
  const cambiarTitulo = useChangeTitleContext();

  cambiarTitulo(title);

  return (
    <div className={styles.outlet}>
      <Grid datos={datos} />
    </div>
  );
}
