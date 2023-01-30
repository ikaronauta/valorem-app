import axios from "axios";
import { BASE_URL } from "./connections";

export const getDataService = async (endPoint) => {
  const user = sessionStorage.getItem("VALOREM_APP");
  //let rutas = JSON.parse(sessionStorage.getItem("RUTAS"));
  const url = `${BASE_URL}${endPoint}?user=${user}`;
  // const tenant = "VAL";
  // const level = rutas[rutas.length - 1].level;
  // const url = `${BASE_URL}${endPoint}?user=${user}&rol=&tenant=${tenant}&level=${level}`;
  const result = await axios.get(url);
  const response = result.data;

  return response;
};
