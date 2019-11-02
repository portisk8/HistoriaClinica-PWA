import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";

class MenuUsuario extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                <h1>
                    Menú Usuario
                </h1>
                <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                    Reservar Turnos
                </button>
                
                <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                    Pedir Medicamentos Prescritos
                </button>

                <div class="form-group">
                    <label for="exampleFormControlSelect1">Historial</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Historial de Turnos</option>
                        <option>Historial de Prescripciones Médicas</option>
                        <option>Historial Clínico</option>
                    </select>
                </div>

                <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                    Ver Detalles de Atenciones Médicas
                </button>
          

                <Footer></Footer>
            </div>



        );

    }

}
export default MenuUsuario;