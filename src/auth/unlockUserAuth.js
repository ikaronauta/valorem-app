import axios from "axios";

export const unlockUserAuth = async (user, email, tenant) => {
  const url = `https://valoremanalitica.bpmco.co/unlock?user=${user}&mail=${email}&tenant=${tenant}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
