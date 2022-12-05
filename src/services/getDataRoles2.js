import axios from "axios";
import { BASE_URL } from "./connections";

export const getDataRoles2 = async () => {
  let rutas = JSON.parse(sessionStorage.getItem("RUTAS"));

  const endPoint = "roles2";
  const user = sessionStorage.getItem("VALOREM_APP");
  const rol = rutas[rutas.length - 1].rol;
  const tenant = "VAL";
  const level = rutas[rutas.length - 1].level;

  const url = `${BASE_URL}${endPoint}?user=${user}&rol=${rol}&tenant=${tenant}&level=${level}`;

  const result = await axios.get(url);
  const response = result.data;

  return response;
};
