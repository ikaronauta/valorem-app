import { Tarjeta } from "./Tarjeta";

//Importación Estilos
import styles from "../css/components/Grid.module.css";

export function Grid({ datos }) {
  return (
    <div className={styles.grid}>
      {datos.map((dato) => {
        return <Tarjeta key={dato.id} dato={dato} />;
      })}
    </div>
  );
}
