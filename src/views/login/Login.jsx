import styles from "../../css/views/login/general.module.css";

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
        <button className={styles.boton}>Iniciar Sesión</button>
        <button className={styles.boton}>Cambiar Contraseña</button>
        <button className={styles.boton}>Desbloquear Usuario</button>
      </div>
    </div>
  );
}
