import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
          isLogin: false,
          toLogin: false,
        };
        this.logout = this.logout.bind(this);
        this.historialClinico = this.historialClinico.bind(this);     
    }//END constructor()------------------------------------------------------------------------------------------------------------

    historialClinico(){
      if(sessionStorage.getItem("userData")){
        this.setState({isLogin: true})
      
    }else{
      this.setState({toLogin: true})
    }
  }


    
    logout() {
      //document.getElementById("btnProv").style.display = "none";
      //set session storage empty 
      sessionStorage.setItem("userData", "");
      //remove all data of session storage
      sessionStorage.clear();
    }//END logout()------------------------------------------------------------------------------------------------------------
    
    render(){
        if(this.state.isLogin){
          return <Redirect  to="/HistorialClinico"/>
        }else if(this.state.toLogin){
          return <Redirect  to="/Login"/>
        }else{
        return(
        <nav className="navbar navbar-dark navbar-2 bg-info mb-4">
         <p>HOSPITAL PWA</p>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent14" aria-controls="navbarSupportedContent14" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="navbar-collapse collapse" id="navbarSupportedContent14" >
            <ul className="navbar-nav mr-auto">
              
              <li>
                <Link to="/home"><p style={{color: "black"}}>Home</p></Link>
              </li>

             

              <li className="nav-item">
                <p style={{color: "black"}}  onClick={this.historialClinico}>Historial Clinico</p>
              </li>
              
              <li className="nav-item">
                <Link from="/" to="/Login"><p style={{color: "black"}}  >Iniciar Sesión</p></Link>
              </li>

              <li className="nav-item">
                <Link from="/" to="/SingIn"><p style={{color: "black"}} >Registrar Nueva Cuenta</p></Link>
              </li>
              
              <li className="nav-item">
                <Link to="/home"><p style={{color: "black"}}  onClick={this.logout}>Salir</p></Link>
              </li>
              <li>
                <Link to="/DetallesAtencionMedica"><p style={{color: "black"}}  >PruebaDetalleAtencionMedNoBorrar</p></Link>
              </li>

            </ul>
          </div>
        </nav>
        )
      }
    }
}

export default Header;
