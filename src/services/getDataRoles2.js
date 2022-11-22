import axios from "axios";
import { BASE_URL } from "./connections";

export const getDataRoles2 = async () => {
  const endPoint = "roles2";
  const user = sessionStorage.getItem("VALOREM_APP");
  const rol = sessionStorage.getItem("ROL");
  const tenant = "VAL";
  const level = sessionStorage.getItem("LEVEL");

  const url = `${BASE_URL}${endPoint}?user=${user}&rol=${rol}&tenant=${tenant}&level=${level}`;
  console.log(url);

  const result = await axios.get(url);
  const response = result.data;

  return response;
};
