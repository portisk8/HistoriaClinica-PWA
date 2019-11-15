import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { drogasNoEntregadas, descontarStock, estadoPrescripciones } from "../../Service/Drogas";

class PedirMedicamentos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            drogas: [],
            descontarDroga: [],
            estadoPrescripcionesCambiar: [],
          //  isLoaded: false,
            user: sessionStorage.getItem("userData")
        }

        this.PedirDrogas = this.PedirDrogas.bind(this);
    }

    
    componentDidMount(){
        console.log(JSON.parse(this.state.user).dni)
        this.DrogasList(JSON.parse(this.state.user).dni);
 
     }//END componentDidMount()-----------------------------------------------------------------------------------------------------------
 
 
    DrogasList(dniNro){
           
        drogasNoEntregadas(dniNro).then((result) => { 
            console.log(result)
            result.map((item) =>
                this.state.drogas.push({droga: item.droga, cantidad: item.cantidad})
            );
            result.map((item) =>
                this.state.descontarDroga.push({droga: item.droga, drogueria: item.drogueria, cantidad: item.cantidad})
            );
            console.log(this.state.descontarDroga)
            result.map((item) =>
                this.state.estadoPrescripcionesCambiar.push({dni: JSON.parse(this.state.user).dni, droga: item.droga, drogueria: item.drogueria})
            );
         
            this.setState({isLoaded: true}) 
            console.log(this.state.estadoPrescripcionesCambiar)
            console.log(this.state.descontarDroga)
            });
             
    }//END DrogasList()-----------------------------------------------------------------------------------------------------------

    PedirDrogas(){
        console.log(this.state.descontarDroga)
        console.log(this.state.estadoPrescripcionesCambiar)
        this.state.descontarDroga.forEach(element => {
            descontarStock(element).then(result => {
                console.log(result);
            }) 
        });

        this.state.estadoPrescripcionesCambiar.forEach(element => {
            estadoPrescripciones(element).then(result => {
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
                        <ul className="list-group">
                            {list.map(listItem => <li id={listItem.droga} name={listItem.droga} className="list-group-item">{listItem.droga} {listItem.cantidad} unidades</li>)}
                        </ul>
                    </div>
           
                        <button onClick={this.PedirDrogas}  type="button" class="btn btn-primary btn-lg btn-block">
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