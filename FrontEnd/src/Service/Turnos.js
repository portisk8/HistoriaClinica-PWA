import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function disponibleObtener(formData) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api profesionales");
  return axiosRequest(`${__APIURL}/api/turno/disponible`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    },
    body: formData
  }).then(response => response.data);
}

export function guardarTurno(formData) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api profesionales");
  return axiosRequest(`${__APIURL}/api/turno`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    },
    body: formData
  }).then(response => response.data);
}
