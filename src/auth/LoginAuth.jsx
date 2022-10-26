import axios from "axios";

export const LoginAuth = async (user, pass) => {
  const url = `https://valoremanalitica.bpmco.co/login?user=${user}&pass=${pass}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
