import axios from "axios";
import { BASE_URL } from "./connections";

export const getDataService = async (endPoint, tenant) => {
  const user = sessionStorage.getItem("VALOREM_APP");
  let sendTenant = tenant === "VALOREM" ? "" : tenant;
  //let rutas = JSON.parse(sessionStorage.getItem("RUTAS"));
  const url = `${BASE_URL}${endPoint}?user=${user}&tenant=${sendTenant}`;
  // const tenant = "VAL";
  // const level = rutas[rutas.length - 1].level;
  // const url = `${BASE_URL}${endPoint}?user=${user}&rol=&tenant=${tenant}&level=${level}`;
  const result = await axios.get(url);
  const response = result.data;

  return response;
};
