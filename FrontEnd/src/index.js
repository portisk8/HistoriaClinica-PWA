import React from "react";

import "./index.css";
import App from "./App";
import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";
import Especialidades from "./Views/Especialidades/Especialidades";
import Especialidad from "./Views/Especialidades/Especialidad";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

render(
  <BrowserRouter>
    <Route path="/Home" component={Home} />
    <Route path="/Especialidades" component={Especialidades} />
    <Route path="/Especialidad/:especialidadId" component={Especialidad} />
    <Route path="/login" component={Login} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
