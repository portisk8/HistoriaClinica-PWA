import React from 'react';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = { message: "is header"}     
    }//END constructor()------------------------------------------------------------------------------------------------------------

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
              <p>Romper todo</p>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
}

export default Header;
