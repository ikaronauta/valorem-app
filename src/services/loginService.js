import axios from "axios";
import { BASE_URL, END_POINTS } from "./connections";

export const loginService = async (user, pass, tenant) => {
  let passEncode = encodeURIComponent(pass);
  let sendTenant = tenant === "VALOREM" ? "" : tenant;
  const url = `${BASE_URL}${END_POINTS.login}?user=${user}&pass=${passEncode}&tenant=${sendTenant}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  response["tenant"] = tenant;

  return response;
};
