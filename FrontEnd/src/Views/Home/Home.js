import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import SingIn from "../../Views/SingIn/SingIn";
import { Link } from 'react-router-dom';
import Login from "../Login/Login";

class Home extends React.Component {
 /* routeChangeLogin =()=>{
    let path = `login`;
    this.props.history.push(path);
  }
  routeChangeEspecialidades =()=>{
    let path = `Especialidades`;
    this.props.history.push(path);
  }*/
 
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Home</h1>
        <div>
          <Link from="/" to="/SingIn">
            <button /*onClick={this.routeChangeLogin}*/type="button" class="btn btn-outline-primary btn-lg btn-block">
              Registrar nueva cuenta
            </button>
          </Link>
        </div>
        <div>
          <Link from="/" to="/Especialidades">
            <button /*onClick={this.routeChangeEspecialidades}*/ type="button" class="btn btn-outline-secondary btn-lg btn-block">
              Especialidades
            </button>
          </Link>
          <Link from="/" to="/Login">
            <button /*onClick={this.routeChangeEspecialidades}*/ type="button" class="btn btn-outline-secondary btn-lg btn-block">
              Ingresar
            </button>
          </Link>
        </div>
        <Footer></Footer>
      </div>
    
    );
  }
}

export default Home;
