import axios from "axios";
import { BASE_URL, END_POINTS } from "./connections";

export const loginService = async (user, pass) => {
  let passEncode = encodeURIComponent(pass);
  const url = `${BASE_URL}${END_POINTS.login}?user=${user}&pass=${passEncode}&tenant=`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
