import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function createUser(userData) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`${__APIURL}/api/usuarios/registrar`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}

export function pacienteRegistrar(userData) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`${__APIURL}/api/pacientes/registrar`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}
