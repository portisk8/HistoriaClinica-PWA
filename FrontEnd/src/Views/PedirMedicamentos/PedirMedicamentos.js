import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { getDrogas } from "../../Service/Drogas";

class PedirMedicamentos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dorgas: [],
          //  isLoaded: false,
            user: sessionStorage.getItem("userData")
        }
    }

    
    componentDidMount(){
        console.log(JSON.parse(this.state.user).dni)
        this.DrogasList(JSON.parse(this.state.user).dni);
 
     }//END componentDidMount()-----------------------------------------------------------------------------------------------------------
 
 
    DrogasList(dniNro){
        let droga = {
            dni: dniNro
        }    
        getDrogas(droga).then((result) => { 
            console.log(result) 
       /* result.map((item) =>
            this.state.drogas.push(item)
        );
        this.setState({isLoaded: true}) */    
        });
        
    }//END ProviderList()-----------------------------------------------------------------------------------------------------------

    

    render(){
        return (
            <div>
                <Header></Header>
                <div>
             
                        <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
                            Pedir Medicamentos
                        </button>
                 
                </div>
                <Footer></Footer>
            </div>



        );

    }

}
export default PedirMedicamentos;