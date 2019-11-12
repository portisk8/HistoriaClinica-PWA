import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";

class DetallesAtencionMedica extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                    <h1>
                        Detalles de Atenciones Médicas

                        
                            <ul className="navbar-nav mr-auto">
                                
                                

                               <h4> <li className="nav-item">
                                    Fecha atencion:
                                </li>
                                </h4>
                                <h4><li className="nav-item">
                                    Duracion:
                                </li></h4>
                                <h4><li className="nav-item">
                                    Hora atencion:
                                </li></h4>
                                <h4><li className="nav-item">
                                    Diagnostico:
                                </li></h4>
                                <h4><li className="nav-item">
                                    ID atencion medica:
                                </li></h4>
                                <h4><li className="nav-item">
                                    Motivo de atencion:
                                </li></h4>
                                <h4><li className="nav-item">
                                    Medico:
                                </li></h4>

                               
                            </ul>
                        
                    </h1>
                                    <Footer></Footer>
                                </div>



        );

    }

}
export default DetallesAtencionMedica;