import axios from "axios";
import { BASE_URL, END_POINTS } from "./connections";

export const unlockUserService = async (user, email, tenant) => {
  const url = `${BASE_URL}${END_POINTS.unlock}?user=${user}&mail=${email}&tenant=${tenant}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
