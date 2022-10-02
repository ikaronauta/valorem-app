import { Outlet } from "react-router-dom";

// Importación Estilos
import styles from "../../css/layouts/LayoutVista.module.css";

export function LayoutVista() {
  return (
    <div>
      <div className={styles.menuVistaInerna}>Vista Interna</div>
      <Outlet />
    </div>
  )
}
