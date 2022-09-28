import styles from "../css/Login.module.css";
import analitica from "../assets/img/login/analitica_login.png";
import carrusel from "../assets/img/login/carrousel.png";

export function Login() {
  return (
    <div className={styles.contenedorGlobal}>
      <div className={styles.contenedorPrincipal}>
        <div className={styles.contenedorSuperior}>
          <img src={analitica} alt="Analitica" />
          <div className={styles.contenedorLogin}>
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
        </div>
        <img src={carrusel} alt="Analitica" className={styles.carrusel} />
      </div>
    </div>
  );
}
