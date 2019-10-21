import fetch from "dva/fetch";
// import { notification } from 'antd';
import { routerRedux } from "dva/router";
import axios from "axios";

const codeMessage = {
  200: "El servidor devolvió correctamente los datos solicitados.",
  201: "Los datos nuevos o modificados son exitosos.",
  202: "Una solicitud ha ingresado a la cola de fondo (tarea asíncrona).",
  204: "La información fue eliminada exitosamente",
  400: "La solicitud se realizó con un error y el servidor no realizó ninguna operación de datos nueva o modificada.",
  401: "El usuario no tiene permiso (el token, el nombre de usuario, la contraseña son incorrectos).",
  403: "El usuario está autorizado, pero el acceso está prohibido.",
  404: "La solicitud se realiza para un registro que no existe y el servidor no funciona.",
  406: "El formato de la solicitud no está disponible.",
  410: "El recurso solicitado se elimina permanentemente y no se recuperará.",
  422: "Se produjo un error de validación al crear un objeto.",
  500: "Se produjo un error en el servidor. Compruebe el servidor.",
  502: "Error de puerta de enlace",
  503: "El servicio no está disponible y el servidor está temporalmente sobrecargado o mantenido.",
  504: "La puerta de enlace agotó el tiempo de espera."
};
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const errortext = codeMessage[response.status] || response.statusText;
  //   notification.error({
  //     message: `Error de solicitud ${response.status}: ${response.url}`,
  //     description: errortext,
  //   });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: "include"
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === "POST" ||
    newOptions.method === "PUT" ||
    newOptions.method === "DELETE"
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        ...newOptions.headers
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: "application/json",
        ...newOptions.headers
      };
    }
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === "DELETE" || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch(e => {
      const status = e.name;
      if (status === 401) {
        console.log(status);
        return;
      }
      if (status === 403) {
        console.log(status);
        return;
      }
      if (status <= 504 && status >= 500) {
        console.log(status);
        return;
      }
      if (status >= 404 && status < 422) {
        console.log(status);
        //return;
        return {
          currentAuthority: "user",
          status: "ok",
          type: "basic"
        };
      }
    });
}

export function axiosRequest(url, option) {
  return axios({
    url: url,
    method: option.method,
    headers: option.headers,
    data: option.body
  })
    .then(checkStatus)
    .then(response => {
      return response; //.json();
    })
    .catch(function(e) {
      const status = e.response ? e.response.status : null;
      if (status === 401) {
        console.log(status);
        return;
      }
      let mensaje = "Ocurrió un error en la solicitud.";
      if (e.response && e.response.data) {
        if (e.response.data.mensaje) {
          mensaje = e.response.data.mensaje;
        }
      } else if (e.message) {
        e.response = { data: mensaje };
        mensaje = e.message;
        return e.response;
      }
      //let mensaje = e.response.data ? e.response.data.mensaje ? e.response.data.mensaje : e.message;

      //   notification.error({
      //     message: `Error de solicitud: ${e.config ? e.config.url : ''}`,
      //     description: mensaje,
      //   });
      return;
    });
}

export function axiosRequestBlob(url, option) {
  return axios({
    url: url,
    method: option.method,
    headers: option.headers,
    data: option.body,
    responseType: option.responseType
  })
    .then(checkStatus)
    .then(response => {
      return response; //.json();
    })
    .catch(function(e) {
      const status = e.response ? e.response.status : null;
      if (status === 401) {
        console.log(status);
        return;
      }

      //   notification.error({
      //     message: `Error de solicitud: ${e.config ? e.config.url : ''}`,
      //     description: e.message,
      //   });
      return;
    });
}
