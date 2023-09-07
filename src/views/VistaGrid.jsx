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
  const [tenant, setTenant] = useState("");

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
    setTenant(sessionStorage.getItem("TENANT"));

    getDataService(END_POINTS.roles, tenant)
      .then((data) => {
        setDatos(data);
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
