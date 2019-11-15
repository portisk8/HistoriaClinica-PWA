import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function profesionalesObtener(especialidad) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("llamada a la api de profesionales");
  return axiosRequest(`${__APIURL}/api/profesionales/${especialidad}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}
