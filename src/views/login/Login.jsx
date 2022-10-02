import { Link } from "react-router-dom";
import styles from "../../css/general.module.css";

export function Login() {
  return (
    <div className={styles.contenedor}>
      <h1>PORTAL DE SERVICIO</h1>
      <input type="text" placeholder="Usuario" className={styles.input} />
      <input
        type="password"
        placeholder="Contraseña"
        className={styles.input}
      />
      <div className={styles.grupoBotones}>
        <Link to="/home">
          <button className={styles.boton}>Iniciar Sesión</button>
        </Link>
        <Link to="/change-password">
          <button className={styles.boton}>Cambiar Contraseña</button>
        </Link>
        <Link to="/unlock-user">
          <button className={styles.boton}>Desbloquear Usuario</button>
        </Link>
      </div>
    </div>
  );
}
