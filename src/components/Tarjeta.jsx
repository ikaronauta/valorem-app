import { Link } from "react-router-dom";

//Importación Estilos
import styles from "../css/components/Tarjeta.module.css";

export function Tarjeta({ dato }) {

  
  return (
    <Link to={dato.ruta}>
      <div className={styles.tarjeta}>
        <p>{dato.content}</p>
      </div>
    </Link>
  );
}
