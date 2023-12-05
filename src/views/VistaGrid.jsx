import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { Grid } from "../components/Grid";

//Importación Estilos
import styles from "../css/general.module.css";
import { END_POINTS } from "../services/connections";
import { getDataService } from "../services/getDataService";

export function VistaGrid() {
  const [loading, setLoading] = useState();
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    let rutas = [
      {
        title: "",
        rol: "",
        level: 1,
      },
    ];
    setLoading(true); //Se carga con TRUE para que se muestre el sppiner
    sessionStorage.setItem("RUTAS", JSON.stringify(rutas));

    getDataService(END_POINTS.roles)
      .then((data) => {
        let index = data.findIndex((x) => x.content === "Otros KOBA");

        if (index >= 0) data[index].content = "Reportes D1";

        setDatos(filtrarArr(data));
        setLoading(false);
        document.getElementById("title").innerHTML = "";
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.outlet}>
      {loading ? (
        <PulseLoader className={styles.sppiner} color="#005dc9" size={50} />
      ) : (
        <Grid datos={datos} />
      )}
    </div>
  );
}

function filtrarArr(arr) {
  const idsUnicos = new Set();

  // Se filtra data para obtener solo los elementos con IDs únicos
  const dataFilt = arr.filter((elemento) => {
    // Si el ID ya está en el conjunto, significa que es un duplicado
    if (idsUnicos.has(elemento.id)) {
      return false; // No se agrega este elemento al nuevo arreglo
    }
    // Se agrega el ID al conjunto
    idsUnicos.add(elemento.id);

    // Se mantiene este elemento en el nuevo arreglo
    return true;
  });

  return dataFilt;
}
