import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import Login from "../../Views/Login/Login";

class App extends React.Component {
  routeChangeLogin =()=>{
    let path = `login`;
    this.props.history.push(path);
  }
  routeChangeEspecialidades =()=>{
    let path = `Especialidades`;
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Home</h1>
        <div>
          <button onClick={this.routeChangeLogin} type="button" class="btn btn-outline-primary btn-lg btn-block">Login</button>
        </div>
        <div>
          <button onClick={this.routeChangeEspecialidades} type="button" class="btn btn-outline-secondary btn-lg btn-block">Especialidades</button>
        </div>
        <Footer></Footer>
      </div>
      

    
    );
  }
}

export default App;
