import { PulseLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataRoles2 } from "../services/getDataRoles2";

//Importación Estilos
import styles from "../css/general.module.css";
import { Grid } from "../components/Grid";
import { VistaInt } from "./VistaInt";

export function VistaGridRoles() {
  const [loading, setLoading] = useState();
  const [datos, setDatos] = useState([]);
  const [test, setTest] = useState();
  const { rol } = useParams();

  useEffect(() => {
    setLoading(true); //Se carga con TRUE para que se muestre el sppiner

    getDataRoles2()
      .then((data) => {
        setDatos(data);
        setLoading(false);

        if (data[0].hasOwnProperty("id")) setTest(true);
        else setTest(false);
      })
      .catch((error) => console.log(error));
  }, [rol]);

  return (
    <div className={styles.outlet}>
      {loading ? (
        <PulseLoader className={styles.sppiner} color="#005dc9" size={50} />
      ) : test ? (
        <Grid datos={datos} />
      ) : datos.length > 0 ? (
        <VistaInt datos={datos} />
      ) : (
        ""
      )}
    </div>
  );
}
