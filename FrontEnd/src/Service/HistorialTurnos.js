import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function getHistorialTurnos() {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api historialTurnos");
  return axiosRequest(`${__APIURL}/api/historialTurnos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}
