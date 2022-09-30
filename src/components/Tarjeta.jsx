import { FaPlayCircle } from "react-icons/fa";
import styles from "../css/views/login/general.module.css";

export function Tarjeta({ dat }) {
  return (
    <div className={styles.tarjeta}>
      <p>{dat.content}</p>
      <FaPlayCircle className={styles.icon} />
    </div>
  );
}
