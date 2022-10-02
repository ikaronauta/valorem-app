import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

//Importación Estilos
import styles from "../css/components/Tarjeta.module.css";

export function Tarjeta({ dato }) {

  
  return (
    <Link to="/home/procesos-consolidacion/administracion">
      <div className={styles.tarjeta}>
        <p>{dato.content}</p>
        <FaPlayCircle className={styles.icon} />
      </div>
    </Link>
  );
}
