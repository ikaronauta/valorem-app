import axios from "axios";

export const changePasswordAuth = async (user, pass, newPass) => {
  const url = `https://valoremanalitica.bpmco.co/changePass?user=${user}&pass=${pass}&newPass=${newPass}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
