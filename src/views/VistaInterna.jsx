import { useState } from "react";
import { ContenidoInterno } from "../components/ContenidoInterno";
import styles from "../css/components/MenuInterno.module.css";

export function VistaInterna({ datos }) {
  const [datosInternos, setDatosInternos] = useState(datos[0].datos);

  function ocultarMostrar() {
    console.log(document.getElementById("menu").style.left);
    if (document.getElementById("menu").style.left === "-100%")
      document.getElementById("menu").style.left = "0%";
    else document.getElementById("menu").style.left = "-100%";
  }

  return (
    <>
      <header>
        <div>
          <label onClick={ocultarMostrar}>
            <ion-icon name="menu" />
          </label>
        </div>
        <nav id="menu" className={styles.menuInterno} style={{ left: "-100%" }}>
          {datos.map((dato) => {
            return (
              <>
                <div
                  key={dato.id}
                  className={styles.containerInterno}
                  onClick={function () {
                    setDatosInternos(dato.datos);
                    ocultarMostrar();
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
      </header>
      <ContenidoInterno datos={datosInternos} />
    </>
  );
}
