import axios from "axios";

export const getData = async (endPoint) => {
  const user = localStorage.getItem("VALOREM_APP");
  const url = endPoint + user;
  const result = await axios.get(url);
  const response = result.data;

  return response;
};
