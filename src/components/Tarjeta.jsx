import { Link } from "react-router-dom";
import { Icon } from "@ui5/webcomponents-react";

//Importación Estilos
import styles from "../css/components/Tarjeta.module.css";

export function Tarjeta({ dato }) {
  return (
    <Link to={dato.ruta} style={{ textDecoration: "none" }}>
      <div className={styles.tarjeta}>
        <p>{dato.content}</p>
        <Icon className={styles.icon} name={dato.icon} />
      </div>
    </Link>
  );
}
