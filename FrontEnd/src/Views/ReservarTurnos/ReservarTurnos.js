import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { Link } from 'react-router-dom';

class ReservarTurnos extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                    <h1>
                        RESERVAR TURNOS
                    </h1>
                    <div>
                        <Link from="/" to="/PedirMedicamentos">
                            <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                                Ver Medicamentos Para Pedir
                            </button>
                        </Link>
                    </div>
                <Footer></Footer>
            </div>



        );

    }

}
export default ReservarTurnos;