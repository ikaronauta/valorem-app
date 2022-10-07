import { Link } from "react-router-dom";

// Importación Estilos
import styles from "../css/components/MenuInterno.module.css";

export function ItemMenuInterno({ dato }) {
  return (
    <Link
      key={dato.id}
      to={dato.ruta}
      className={styles.containerInterno}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.containerIcon}>
        <ion-icon name={dato.icon}></ion-icon>
      </div>
      <h3>{dato.title}</h3>
    </Link>
  );
}
