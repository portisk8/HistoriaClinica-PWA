import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = { message: "is header"};
        this.logout = this.logout.bind(this);     
    }//END constructor()------------------------------------------------------------------------------------------------------------

    
    logout() {
      //document.getElementById("btnProv").style.display = "none";
      //set session storage empty 
      sessionStorage.setItem("userData", "");
      //remove all data of session storage
      sessionStorage.clear();
    }//END logout()------------------------------------------------------------------------------------------------------------

    render(){
        return(
        <nav className="navbar navbar-dark navbar-2 bg-primary mb-4">
         <p>Hospital PWA</p>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent14" aria-controls="navbarSupportedContent14" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="navbar-collapse collapse" id="navbarSupportedContent14" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <p>Romper todo</p>
              </li>
              <li className="nav-item">
              <p>Reservar Turnos</p>
              </li>
              <li className="nav-item">
              <Link to="/home"><p style={{color: "black"}}  onClick={this.logout}>Salir</p></Link>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
}

export default Header;
