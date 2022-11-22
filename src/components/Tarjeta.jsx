// import { Link } from "react-router-dom";
import { Icon } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import { useChangeTitleContext } from "../context/TitleProvider";

//Importación Estilos
import styles from "../css/components/Tarjeta.module.css";

export function Tarjeta({ dato }) {
  const navigate = useNavigate();
  const changeTitle = useChangeTitleContext();

  const handleTarget = () => {
    sessionStorage.setItem("ROL", dato.rol);
    changeTitle(dato.content);
    navigate(`/prueba/${dato.rol}`);
  };
  return (
    <div className={styles.tarjeta} onClick={handleTarget}>
      <p>{dato.content}</p>
      <Icon className={styles.icon} name={dato.icon} />
    </div>
  );
}
