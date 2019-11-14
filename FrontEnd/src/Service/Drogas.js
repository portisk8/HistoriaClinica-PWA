import { axiosRequest } from "../utils/request";
import { API_URL } from "../Common/environment";

const __APIURL = API_URL;

export function drogasNoEntregadas(dni) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`${__APIURL}/api/drogas/${dni}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}


export function descontarStock(dataDrugs){
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`${__APIURL}/api/drogas/descontarstocks`, {
    method: "PUT",
    body: JSON.stringify(dataDrugs),
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}

export function estadoPrescripciones(dataPresc){
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`${__APIURL}/api/pacientes/prescripciones`, {
    method: "POST",
    body: JSON.stringify(dataPresc),
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}



export function historialDrogas(dni) {
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("call api login");
  return axiosRequest(`${__APIURL}/api/historiales/drogas/${dni}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
      // Authorization: "Bearer " + "currentUser.token"
    }
  }).then(response => response.data);
}




