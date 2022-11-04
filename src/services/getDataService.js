import axios from "axios";
import { BASE_URL } from "./connections";

export const getDataService = async (endPoint) => {
  const user = sessionStorage.getItem("VALOREM_APP");
  const url = `${BASE_URL}${endPoint}?user=${user}`;
  const result = await axios.get(url);
  const response = result.data;

  return response;
};
