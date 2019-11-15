import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { getHistorialTurnos } from "../../Service/HistorialTurnos";
import {historialDrogas} from '../../Service/Drogas';


class HistorialClinico extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          historialTurnosList: [],
          user: sessionStorage.getItem("userData"),
          drogas: []
        };
      }
    
      componentDidMount() {
        
        this.historialList(JSON.parse(this.state.user).dni);
        this.historialList2(JSON.parse(this.state.user).dni);
    }

    historialList(dniNro){
           
        getHistorialTurnos(dniNro).then((result) => { 
            result[0].map((item) =>
                this.state.historialTurnosList.push(item)
            );

            this.setState({isLoaded: true}) 
            
            });
             
    }

    historialList2(dniNro){
           
        historialDrogas(dniNro).then((result) => { 
            result[0].map((item) =>
            this.state.drogas.push({droga: item.droga, profesional: item.nombre, fecha: item.fechaAtencion})
               // this.state.drogas.push({droga: item.droga, cantidad: item.cantidad})
            );

            this.setState({isLoaded: true}) 
            
            });
             
    }
    render(){
        if(this.state.isLoaded){
            const list = this.state.historialTurnosList;
            const list2 = this.state.drogas;
            return (
                <div>
                    <Header></Header>
                        <div>
                            <div  className="col-12">
                                <h1>
                                    HISTORIAL TURNOS
                                </h1>
                                <ul>

                                    {list.map(listItem => 
                                        <li  className="list-group-item">
                                        
                                        Especialidad: {listItem.especialidad} <br/> 
                                        Profesional: {listItem.apellido}, {listItem.nombre} <br/>
                                        Fecha Asignada: {listItem.diaAsignado}/{listItem.mesAsignado}/{listItem.anioAsignado} <br/>
                                        Horario Asignado: {listItem.horaAtencion} <br/>
                                        </li>
                                    )}
            
                                </ul>
                            </div>
                            
                            <div className="col-12">
                                <h2>HISTORIAL DE MEDICAMENTOS</h2>
                                <ul className="list-group">
                                    {list2.map(listItem => 
                                        <li id={listItem.droga} name={listItem.droga} className="list-group-item">
                                            Droga: {listItem.droga}<br/>
                                            Profesional: {listItem.profesional}<br/>
                                            Fecha: {listItem.fecha}
                                        </li>)}
                                </ul>
                            </div>
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
export default HistorialClinico;