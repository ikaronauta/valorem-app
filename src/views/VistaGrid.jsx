import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { getDataService } from "../services/getDataService";
import { Grid } from "../components/Grid";

//Importación Estilos
import styles from "../css/general.module.css";
import { useChangeTitleContext } from "../context/TitleProvider";

export function VistaGrid({ title, endPoint }) {
  const [datos, setDatos] = useState([]);
  const [loading, setloaDing] = useState(false);
  const cambiarTitulo = useChangeTitleContext();

  cambiarTitulo(title);

  useEffect(() => {
    setloaDing(true);

    getDataService(endPoint).then((data) => {
      setDatos(data);
      setloaDing(false);
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
