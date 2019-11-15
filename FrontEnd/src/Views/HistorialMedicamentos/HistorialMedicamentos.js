
import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import {historialDrogas} from '../../Service/Drogas';

class HistorialMedicamentos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            drogas: [],
          //  isLoaded: false,
            user: sessionStorage.getItem("userData")
        }

        this.historialList = this.historialList.bind(this);
    }

    
    componentDidMount(){
        console.log(JSON.parse(this.state.user).dni)
        this.historialList(JSON.parse(this.state.user).dni);
 
     }//END componentDidMount()-----------------------------------------------------------------------------------------------------------
 
 
    historialList(dniNro){
           
        historialDrogas(dniNro).then((result) => { 
            console.log(result)
           /* result.forEach(item => {
                this.state.drogas.push({droga: item.droga, profesional: item.profesional, fecha: item.fecha})
 
            });*/
            result.map((item) =>
            this.state.drogas.push({droga: item.droga, profesional: item.profesional, fecha: item.fecha})
               // this.state.drogas.push({droga: item.droga, cantidad: item.cantidad})
            );

            this.setState({isLoaded: true}) 
            
            });
             
    }//END DrogasList()-----------------------------------------------------------------------------------------------------------


    render(){
        if(this.state.isLoaded){
        const list = this.state.drogas;   
        return (
            <div>          
                <Header></Header>
                <div> <div className="col-12">
                        <h2>Historial de Medicamentos</h2>
                        <ul className="list-group">
                            {list.map(listItem => <li id={listItem.droga} name={listItem.droga} className="list-group-item">Droga: {listItem.droga}, Profesional: {listItem.profesional}, Fecha: {listItem.fecha}</li>)}
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
export default HistorialMedicamentos;
