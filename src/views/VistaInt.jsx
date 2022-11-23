import { useEffect, useState } from "react";
import { ContenidoInterno } from "../components/ContenidoInterno";
import styles from "../css/components/MenuInterno.module.css";

export function VistaInt({ datos }) {
  const [datosInternos, setDatosInternos] = useState([]);

  useEffect(() => {
    setDatosInternos(datos[0].datos);
  }, [datos]);

  function ocultarMostrar() {
    if (document.getElementById("menu").style.left === "-100%")
      document.getElementById("menu").style.left = "0%";
    else document.getElementById("menu").style.left = "-100%";
  }

  return (
    <div className={styles.prueba}>
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
                  key={"a" + Math.random * Math.random}
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
      {datosInternos !== [] ? (
        <ContenidoInterno datosInternos={datosInternos} />
      ) : (
        ""
      )}
    </div>
  );
}
