import { useEffect, useState } from "react";
import { ContenidoInterno } from "../components/ContenidoInterno";
import styles from "../css/components/MenuInterno.module.css";

export function VistaInt({ datos }) {
  const [datosInternos, setDatosInternos] = useState([]);

  console.log(datos[0].datos);

  useEffect(() => {
    var datosSinRepetidos = arreglarDatosRepetidos(datos[0].datos);

    console.log(datosSinRepetidos);
    setDatosInternos(datosSinRepetidos);
  }, [datos]);

  function arreglarDatosRepetidos(data) {
    var datosSinRepetir = [];
    for (let i = 0; i < data.length; i++) {
      var datoExiste = datosSinRepetir.filter((x) => x.desc === data[i].desc);
      if (datoExiste.length === 0) datosSinRepetir.push(data[i]);
    }

    return datosSinRepetir;
  }

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
              <div
                key={Math.random()}
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
