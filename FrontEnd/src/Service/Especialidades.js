import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function getEspecialidades() {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api especialidades");
  return axiosRequest(`${__APIURL}/api/especialidades`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}
