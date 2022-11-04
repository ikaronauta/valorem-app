import axios from "axios";
import { BASE_URL, END_POINTS } from "./connections";

export const changePasswordService = async (user, pass, newPass, tenant) => {
  let passEncode = encodeURIComponent(pass);
  let newPassEncode = encodeURIComponent(newPass);
  const url = `${BASE_URL}${END_POINTS.changePassword}?user=${user}&pass=${passEncode}&newPass=${newPassEncode}&tenant=${tenant}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
