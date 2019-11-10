import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { Link } from 'react-router-dom';

class MenuUsuario extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                
                <h1>
                    User Menu
                </h1>
                <h3>
                    Turnos
                </h3>
                <Link from="/" to="/ReservarTurnos">
                    <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                        Reservar Turnos
                    </button>
                </Link>
                
                <Link from="/" to="/TurnosDisponibles">
                    <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                        Turnos Diponibles
                    </button>
                </Link>

                <Link from="/" to="/HistorialTurnos">
                    <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                        Historial de Turnos
                    </button>
                </Link>

                <h3>
                    Farmacia
                </h3>
                
                <Link from="/" to="/PedirMedicamentos">
                    <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                        Pedir Medicamentos Prescritos
                    </button>
                </Link>

                
                    <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                        Historial de Prescripciones Médicas
                    </button>
                
                <h3>
                    Historia Clínica
                </h3>
                
                
                    <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                        Historial Clínico
                    </button>
                

                    <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                        Detalles de Atenciones Médicas
                    </button>
          

                <Footer></Footer>
            </div>



        );

    }

}
export default MenuUsuario;
