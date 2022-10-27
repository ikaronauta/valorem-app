import axios from "axios";

export const unlockUserAuth = async (user) => {
  const url = `https://valoremanalitica.bpmco.co/resetPass?user=${user}&pass=&newPass=`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
