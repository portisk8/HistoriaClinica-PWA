import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { Link } from 'react-router-dom';
import { createUser } from "../../Service/Register";
import { postLogin } from "../../Service/PostLogin";



class SingIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        dni: '',
        nombre: '',
        apellido: '',
        password: '',
        sexo: 'Masculino',
        provincia: '',
        departamento: '',
        localidad: '',
        calle: '',
        numero: '',
        redirect: false
    }
    this.registerUser = this.registerUser.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //stop the reload action by pressing submit button
  handleSubmit(event){    
    event.preventDefault();
  };//END handleSubmit()------------------------------------------------------------------------------------------------------------


  /*registerPacient(){

  }  */

  registerUser(){
    console.log(this.state)
    let userData = {
      dni: this.state.dni,
      username: this.state.nombre,
      password: this.state.password
    }

    createUser(userData).then(result => {
      let userLogin ={
        dni: userData.dni,
        password: userData.password
      }
      postLogin(userLogin)
    });
  }

  onChange(e){
    //set the state username and password with the input value
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }//END onChange()------------------------------------------------------------------------------------------------------------


  render() {
    return (
      <div>
        <Header></Header>
        <h1>Registrar Nueva Cuenta</h1>
        <form onSubmit={this.handleSubmit}>

        <div class="form-group">
        <label for="exampleFormControlInput1">Numero DNI</label>
        <input onChange={this.onChange} name="dni" class="form-control" type="text" placeholder="Ingresa tu DNI"></input>
        </div>
          
          <div class="form-group">

          <label for="exampleFormControlInput1">Nombre</label>
          <input onChange={this.onChange} name="nombre" class="form-control" type="text" placeholder="Ingresar nombre"></input>

          </div>
          <div class="form-group">

          <label for="exampleFormControlInput1">Apellido</label>
          <input onChange={this.onChange} name="apellido" class="form-control" type="text" placeholder="Ingresar apellido"></input>

          </div>

          <div class="form-group">

          <label for="exampleFormControlInput1">Contraseña</label>
          <input onChange={this.onChange} name="password" class="form-control" type="password" placeholder="Ingresar contraseña"></input>

          </div>
         
          <div class="form-group">
            <label for="exampleFormControlSelect1">Sexo</label>
            <select name="sexo" onChange={this.onChange} class="form-control" id="exampleFormControlSelect1">
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>

          <div class="form-group">
          <label for="exampleFormControlInput1">Provincia</label>
          <input onChange={this.onChange} name="provincia" class="form-control" type="text" placeholder="Ingresar Provincia"></input>
          </div>

          <div class="form-group">
          <label for="exampleFormControlInput1">Departamento</label>
          <input onChange={this.onChange} name="departamento" class="form-control" type="text" placeholder="Ingresar Departamento"></input>
          </div>

          <div class="form-group">
          <label for="exampleFormControlInput1">Localidad</label>
          <input onChange={this.onChange} name="localidad" class="form-control" type="text" placeholder="Ingresar Localidad"></input>
          </div>

          <div class="form-group">
          <label for="exampleFormControlInput1">Calle</label>
          <input onChange={this.onChange} name="calle" class="form-control" type="text" placeholder="Ingresar Calle"></input>
          </div>

          <div class="form-group">
          <label for="exampleFormControlInput1">Numero</label>
          <input onChange={this.onChange} name="numero" class="form-control" type="text" placeholder="Ingresar Numero De Calle"></input>
          </div>

        </form> 
        
        <div class="form-group">
          <input type="submit" onClick={this.registerUser} class="btnSubmit" value="Registrarse" />
        </div>
        
        <Footer></Footer>
      </div>
      

    
    );
  }
}

export default SingIn;