import axios from "axios";

export const changePasswordAuth = async (user, pass, newPass, tenant) => {
  const url = `https://valoremanalitica.bpmco.co/changePass?user=${user}&pass=${pass}&newPass=${newPass}&tenant=${tenant}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
