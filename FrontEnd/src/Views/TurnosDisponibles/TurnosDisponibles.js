import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";

class TurnosDisponibles extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                    <h1>
                        Turnos Disponibles
                    </h1>
                <Footer></Footer>
            </div>



        );

    }

}
export default TurnosDisponibles;