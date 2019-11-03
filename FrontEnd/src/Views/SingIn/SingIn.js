import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { Link } from 'react-router-dom';

class SingIn extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Registrar Nueva Cuenta</h1>
        <form>
          <div class="form-group">

          <label for="exampleFormControlInput1">Nombre</label>
          <input class="form-control" type="text" placeholder="Ingresar nombre"></input>

          </div>
          <div class="form-group">

          <label for="exampleFormControlInput1">Apellido</label>
          <input class="form-control" type="text" placeholder="Ingresar apellido"></input>

          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Tipo de Documento</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>LE/DNI</option>
              <option>Carnet de Extranjería</option>
              <option>Pasaporte</option>
            </select>
          </div>
          <div class="form-group">

          <label for="exampleFormControlInput1">Número de Documento</label>
          <input class="form-control" type="text" placeholder="Ingresar número de doc."></input>
          <small id="passwordHelpInline" class="text-muted">
            *Sin puntos
          </small>
          </div>

          <div class="form-group">

          <label for="exampleFormControlInput1">Domicilio</label>
          <input class="form-control" type="text" placeholder="Ingresar domicilio"></input>

          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Sexo</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Masulino</option>
              <option>Femenino</option>
              <option>Sin aclarar</option>
            </select>
          </div>

        </form> 
        
        <Link from="/" to="/MenuUsuario">
          <button type="button" class="btn btn-outline-primary btn-lg btn-block">
            Registrarse
          </button>
        </Link>
        
        <Footer></Footer>
      </div>
      

    
    );
  }
}

export default SingIn;