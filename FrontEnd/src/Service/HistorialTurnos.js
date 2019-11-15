import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function getHistorialTurnos(dni) {
  
  return axiosRequest(`${__APIURL}/api/historiales/turnos/${dni}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.data);
}
