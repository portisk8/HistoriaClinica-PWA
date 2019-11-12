import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { getHistorialTurnos } from "../../Service/HistorialTurnos";

class HistorialTurnos extends React.Component {
    constructor() {
        super();
        this.state = {
          historialTurnosList: []
        };
      }
    

    componentDidMount() {
        // const especialidades = async () => await getEspecialidades();
        getHistorialTurnos().then(data => {
        console.log(data);
            if (data && Array.isArray(data)) {
                this.setState({ historialTurnosList: data });
            }
        });
        // console.log(especialidades);
    }


    render(){
        return (
            <div>
                <Header></Header>
                    <h1>
                        HISTORIAL TURNOS
                    </h1>
                    {this.state.historialTurnosList.length > 0 && this.state.historialTurnosList.map((item) => (
                        <div>
                        
                            hola
                        
                        </div>
                    ))}
                <Footer></Footer>
            </div>



        );

    }

}
export default HistorialTurnos;