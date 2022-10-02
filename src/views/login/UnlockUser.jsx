import { Link } from "react-router-dom";
import styles from "../../css/general.module.css";

export function UnlockUser() {
  return (
    <div className={styles.contenedor}>
    <h1>PORTAL DE SERVICIO</h1>
    <input type="text" placeholder="Usuario" className={styles.input} />
    <input
      type="text"
      placeholder="Email"
      className={styles.input}
    />
    <div className={styles.grupoBotones}>
      <Link to="/">
        <button className={styles.boton}>Volver</button>
      </Link>
      <button className={styles.boton}>Cambiar Desbloquear Usuario</button>
    </div>
  </div>
  );
}
