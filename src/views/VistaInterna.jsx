import { useState } from "react";
import { ContenidoInterno } from "../components/ContenidoInterno";
import styles from "../css/components/MenuInterno.module.css";

export function VistaInterna({ datos }) {
  const [datosInternos, setDatosInternos] = useState(datos[0].datos);

  return (
    <div>
      <nav className={styles.menuInterno}>
        {datos.map((dato) => {
          return (
            <>
              <div
                key={dato.id}
                className={styles.containerInterno}
                onClick={function () {
                  setDatosInternos(dato.datos);
                }}
              >
                <div className={styles.containerIcon}>
                  <ion-icon name={dato.icon}></ion-icon>
                </div>
                <h3>{dato.title}</h3>
              </div>
            </>
          );
        })}
      </nav>
      <ContenidoInterno datos={datosInternos} />
    </div>
  );
}
