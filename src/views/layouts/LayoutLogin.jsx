import styles from "../../css/layouts/LayoutLogin.module.css";
import analitica from "../../assets/img/login/analitica_login.png";
import carrusel from "../../assets/img/login/carrousel.png";
import { Outlet, Navigate } from "react-router-dom";

export function LayoutLogin() {
  return (
    <>
      {sessionStorage.getItem("VALOREM_APP") ? (
        <Navigate to="/home" />
      ) : (
        <div className={styles.contenedorGlobal}>
          <div className={styles.contenedorPrincipal}>
            <div className={styles.contenedorSuperior}>
              <img src={analitica} alt="Analitica" className={styles.logo} />
              <Outlet />
            </div>
            <img src={carrusel} alt="Analitica" className={styles.carrusel} />
          </div>
        </div>
      )}
    </>
  );
}
