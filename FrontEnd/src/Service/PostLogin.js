import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function postLogin(userData) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`${__APIURL}/api/usuarios/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}
