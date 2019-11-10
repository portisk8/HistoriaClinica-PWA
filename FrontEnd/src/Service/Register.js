import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function createUser(userData) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`http://localhost:3001/api/registerUser`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}


export function createPacient(userData) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`http://localhost:3001/api/registerPacient`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}
