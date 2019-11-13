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
        // const especialidades = async () => await getEspecialidades();
        /*getHistorialTurnos().then(data => {
        console.log(data);
            if (data && Array.isArray(data)) {
                this.setState({ historialTurnosList: data });
            }
        });*/
        this.historialList(JSON.parse(this.state.user).dni);
        // console.log(especialidades);
    }

    historialList(dniNro){
           
        getHistorialTurnos(dniNro).then((result) => { 
            result[0].map((item) =>
            console.log(item)
               // this.state.drogas.push({droga: item.droga, cantidad: item.cantidad})
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
                        <div>
                            <div  className="col-12">
                                <h1>
                                    HISTORIAL TURNOS
                                </h1>
                                <ul>
                                    {list.map(listItem => 
                                        <li  className="list-group-item">

                                        {listItem.especialidad} {listItem.apellido} {listItem.nombre} 
                                        </li>
                                    )}
            
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
export default HistorialTurnos;