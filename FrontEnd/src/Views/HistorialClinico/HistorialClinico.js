import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";

class HistorialClinico extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                    <h1>
                        Historial Clínico
                    </h1>
                <Footer></Footer>
            </div>



        );

    }

}
export default HistorialClinico;