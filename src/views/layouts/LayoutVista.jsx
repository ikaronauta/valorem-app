import { Outlet } from "react-router-dom";

// Importación Estilos
import styles from "../../css/layouts/LayoutVista.module.css";

export function LayoutVista({ prueba }) {
  return (
    <div>
      <div className={styles.menuVistaInerna}>Menu Interno {prueba}</div>
      <Outlet />
    </div>
  )
}
