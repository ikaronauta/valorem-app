import axios from "axios";

export const loginAuth = async (user, pass) => {
  let passEncode = encodeURIComponent(pass);
  const url = `https://valoremanalitica.bpmco.co/login?user=${user}&pass=${passEncode}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
