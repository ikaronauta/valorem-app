// Importación Estilos
import { Link } from "react-router-dom";
import styles from "../css/components/MenuInterno.module.css";

export function MenuInterno({ datos }) {
  console.log(datos);
  return (
    <nav className={styles.menuInterno}>
      {datos.map((dato) => {
        return (
          <Link
            to={dato.ruta}
            className={styles.containerInterno}
            style={{ textDecoration: "none" }}
          >
            <ion-icon name={dato.icon}></ion-icon>
            <h3>{dato.title}</h3>
          </Link>
        );
      })}
    </nav>
  );
}
