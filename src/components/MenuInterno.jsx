import { ItemMenuInterno } from "./ItemMenuInterno";

// Importación Estilos
import styles from "../css/components/MenuInterno.module.css";

export function MenuInterno({ datos }) {
  return (
    <nav className={styles.menuInterno}>
      {datos.map((dato) => {
        return <ItemMenuInterno key={dato.id} dato={dato} />;
      })}
    </nav>
  );
}
