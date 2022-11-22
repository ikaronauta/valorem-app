// import { Link } from "react-router-dom";
import { Icon } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";

//Importación Estilos
import styles from "../css/components/Tarjeta.module.css";

export function Tarjeta({ dato }) {
  const navigate = useNavigate();

  const handleTarget = () => {
    let rutas = JSON.parse(sessionStorage.getItem("RUTAS"));
    let ruta = {
      title: dato.content,
      rol: dato.rol,
      level: rutas[rutas.length - 1].level + 1,
    };

    if (dato.rol !== rutas[rutas.length - 1].rol) rutas.push(ruta);

    sessionStorage.setItem("RUTAS", JSON.stringify(rutas));

    document.getElementById("title").innerHTML = dato.content;
    navigate(`/data/${dato.rol}`);
  };
  return (
    <div className={styles.tarjeta} onClick={handleTarget}>
      <p>{dato.content}</p>
      <Icon className={styles.icon} name={dato.icon} />
    </div>
  );
}
