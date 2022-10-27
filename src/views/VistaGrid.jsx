import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { getData } from "../auth/getData";
import { Grid } from "../components/Grid";

//Importación Estilos
import styles from "../css/general.module.css";

export function VistaGrid({ endPoint }) {
  const [datos, setDatos] = useState([]);
  const [loading, setloaDing] = useState(false);

  useEffect(() => {
    setloaDing(true);

    getData(endPoint).then((data) => {
      setDatos(data);
      setloaDing(false);
      setTimeout(() => {}, 5000);
    });
  }, [endPoint]);

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
