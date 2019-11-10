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
                    </h1>
                <Footer></Footer>
            </div>



        );

    }

}
export default DetallesAtencionMedica;