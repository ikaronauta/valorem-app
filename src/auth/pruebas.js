import { useState } from "react";
import { getData } from "../auth/getData";


export function Pruebas({ endPoint }) {
  const [datos, setDatos] = useState([]);

  const promesa = getData(endPoint);
  promesa.then((data) => {
    setDatos(data);
  });

  return datos;
}
