import React from "react";

import "./index.css";
import App from "./App";
import Home from "./Views/Home/Home";
import SingIn from "./Views/SingIn/SingIn";
import Especialidades from "./Views/Especialidades/Especialidades";
import Especialidad from "./Views/Especialidades/Especialidad";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter, Router } from "react-router-dom";
import { render } from "react-dom";
import Login from "./Views/Login/Login";
import MenuUsuario from "./Views/MenuUsuario/MenuUsuario";
import ReservarTurnos from "./Views/ReservarTurnos/ReservarTurnos";
import TurnosDisponibles from "./Views/TurnosDisponibles/TurnosDisponibles";
import HistorialTurnos from "./Views/HistorialTurnos/HistorialTurnos";
import PedirMedicamentos from "./Views/PedirMedicamentos/PedirMedicamentos";
import HistorialMedicamentos from "./Views/HistorialMedicamentos/HistorialMedicamentos";
import HistorialClinico from "./Views/HistorialClinico/HistorialClinico";

render(
  <BrowserRouter>
  <Route path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/Especialidades" component={Especialidades} />
    <Route path="/Especialidad/:especialidadId" component={Especialidad} />
    <Route path="/SingIn" component={SingIn} />
    <Route path="/Login" component={Login} />
    <Route path="/MenuUsuario" component={MenuUsuario} />
    <Route path="/ReservarTurnos" component={ReservarTurnos} />
    <Route path="/TurnosDisponibles" component={TurnosDisponibles} />
    <Route path="/HistorialTurnos" component={HistorialTurnos} />
    <Route path="/PedirMedicamentos" component={PedirMedicamentos} />
    <Route path="/HistorialMedicamentos" component={HistorialMedicamentos}  />
    <Route path="/HistorialClinico" component={HistorialClinico} />

  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
