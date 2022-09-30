import styles from "../../css/views/login/general.module.css";

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
      <button className={styles.boton}>Volver</button>
      <button className={styles.boton}>Cambiar Desbloquear Usuario</button>
    </div>
  </div>
  );
}
