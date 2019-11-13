import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { mostrarDrogas, requestDrugs, cambiarEstadoPrescripciones } from "../../Service/Drogas";

class PedirMedicamentos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            drogas: [],
            askDrug: [],
            changeStatePresc: [],
          //  isLoaded: false,
            user: sessionStorage.getItem("userData")
        }

        this.AskDrug = this.AskDrug.bind(this);
    }

    
    componentDidMount(){
        console.log(JSON.parse(this.state.user).dni)
        this.DrogasList(JSON.parse(this.state.user).dni);
 
     }//END componentDidMount()-----------------------------------------------------------------------------------------------------------
 
 
    DrogasList(dniNro){
           
        mostrarDrogas(dniNro).then((result) => { 
            result[0].map((item) =>
                this.state.drogas.push({droga: item.droga, cantidad: item.cantidad})
            );
            result[0].map((item) =>
                this.state.askDrug.push({droga: item.droga, drogueria: item.drogueria, cantidad: item.cantidad})
            );
            result[0].map((item) =>
                this.state.changeStatePresc.push({dni: JSON.parse(this.state.user).dni, droga: item.droga, drogueria: item.drogueria})
            );
         
            this.setState({isLoaded: true}) 
            
            });
             
    }//END DrogasList()-----------------------------------------------------------------------------------------------------------

    AskDrug(){
        console.log(this.state.askDrug)
        this.state.askDrug.forEach(element => {
            requestDrugs(element).then(result => {
                console.log(result);
            }) 
        });

        this.state.changeStatePresc.forEach(element => {
            cambiarEstadoPrescripciones(element).then(result => {
                console.log(result);
            }) 
        });
       // requestDrugs(this.state.askDrug)
       this.setState({isLoaded: false})           
    }//END DrogasList()-----------------------------------------------------------------------------------------------------------

    render(){
        if(this.state.isLoaded){
        const list = this.state.drogas;   
        return (
            <div>          
                <Header></Header>
                <div> <div className="col-12">
                        <h2>Listado De Drogas Por Pedir</h2>
                        <ul >
                            {list.map(listItem => <li id={listItem.droga} name={listItem.droga} className="list-group-item">{listItem.droga} {listItem.cantidad} unidades</li>)}
                        </ul>
                    </div>
           
                        <button onClick={this.AskDrug}  type="button" class="btn btn-primary btn-lg btn-block">
                            Pedir Medicamentos
                        </button>
                 
                </div>
                <Footer></Footer>
            </div>


        );
        }else{
            return (<div>
                <Header></Header>
                <div><h1>No tienes medicamentos para pedir</h1></div>
                </div>
            )
        }
    }

}
export default PedirMedicamentos;