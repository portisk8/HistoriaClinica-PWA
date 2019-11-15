import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { getHistorialTurnos } from "../../Service/HistorialTurnos";

class HistorialTurnos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          historialTurnosList: [],
          user: sessionStorage.getItem("userData")
        };
      }
    

    componentDidMount() {
        
        this.historialList(JSON.parse(this.state.user).dni);
        
    }

    historialList(dniNro){
           
        getHistorialTurnos(dniNro).then((result) => { 
            result.map((item) =>
                this.state.historialTurnosList.push(item)
            );

            this.setState({isLoaded: true}) 
            
            });
             
    }

    render(){
        if(this.state.isLoaded){
            const list = this.state.historialTurnosList;
            return (
                <div>
                    <Header></Header>
                        
                        <div  className="col-12">
                            <h1>
                                HISTORIAL TURNOS
                            </h1>
                            <ul>

                                {list.map(listItem => 
                                    <li  className="list-group-item">
                                    
                                    Especialidad: {listItem.especialidad} <br/>      
                                    Profesional: {listItem.apellido}, {listItem.nombre} <br/>
                                    Fecha Atención: {listItem.diaAtencion}/{listItem.mesAtencion}/{listItem.anioAtencion} <br/>
                                    Horario Atención: {listItem.horaAtencion} <br/>
                                    Estado: {listItem.estado}
                                    
                                    </li>
                                )}
            
                                </ul>
                            </div>
                        
                    <Footer></Footer>
                </div>
            );
        }else{
            return (
                <Header></Header>     
            )
        }

    }

}
export default HistorialTurnos;