import axios from "axios";

export const getData = async (endPoint) => {
  console.log("OK");
  const user = localStorage.getItem("VALOREM_APP");
  const url = "https://valoremanalitica.bpmco.co/roles?user=" + user;
  const result = await axios.get(url);
  const response = result.data;

  return response;
};
