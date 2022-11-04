import axios from "axios";
import { BASE_URL, END_POINTS } from "./connections";

export const resetPassService = async (user, tenant) => {
  const url = `${BASE_URL}${END_POINTS.resetPassword}?user=${user}&pass=&tenant=${tenant}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
