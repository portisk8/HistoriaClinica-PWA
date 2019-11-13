import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function getHistorialTurnos(dni) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //console.log("call api historialTurnos");
  return axiosRequest(`http://localhost:3001/api/historialTurnos/${dni}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}
