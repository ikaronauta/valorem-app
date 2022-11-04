import axios from "axios";

export const resetPassAuth = async (user, tenant) => {
  const url = `https://valoremanalitica.bpmco.co/resetPass?user=${user}&pass=&tenant=${tenant}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
