import axios from "axios";

export const changePasswordAuth = async (user, pass, newPass, tenant) => {
  let passEncode = encodeURIComponent(pass);
  let newPassEncode = encodeURIComponent(newPass);
  console.log("NewPass: " + newPass + " NewPassEncode: " + newPassEncode);
  const url = `https://valoremanalitica.bpmco.co/changePass?user=${user}&pass=${passEncode}&newPass=${newPassEncode}&tenant=${tenant}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

  return response;
};
