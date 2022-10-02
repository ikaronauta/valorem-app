import { Link } from "react-router-dom";
import styles from "../../css/general.module.css";

export function ChangePassword() {
  return (
    <div className={styles.contenedor}>
      <h1>PORTAL DE SERVICIO</h1>
      <input type="text" placeholder="Usuario" className={styles.input} />
      <input
        type="password"
        placeholder="Contraseña Actual"
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Contraseña Nueva"
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Repetir Contraseña"
        className={styles.input}
      />
      <div className={styles.grupoBotones}>
        <Link to="/">
          <button className={styles.boton}>Volver</button>
        </Link>
        <button className={styles.boton}>Cambiar Contraseña</button>
      </div>
    </div>
  );
}
