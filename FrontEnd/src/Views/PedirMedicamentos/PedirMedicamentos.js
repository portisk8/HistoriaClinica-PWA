import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";

class PedirMedicamentos extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                    <h1>
                        Pedir Medicamentos Prescritos
                    </h1>
                <Footer></Footer>
            </div>



        );

    }

}
export default PedirMedicamentos;