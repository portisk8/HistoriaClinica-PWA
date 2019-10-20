import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Home</h1>
        <div>
          <button type="button" class="btn btn-outline-primary">Login</button>
          <button type="button" class="btn btn-outline-primary">Especialidades</button>
        </div>
        <footer class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar rounded" >Contácto</footer>
      </div>
      

    
    );
  }
}

export default App;
