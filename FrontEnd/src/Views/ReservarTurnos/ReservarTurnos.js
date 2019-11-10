import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { getEspecialidades } from "../../Service/Especialidades";

class ReservarTurnos extends React.Component {
    constructor() {
        super();
        this.state = {
            especialidadList: []
        };
    }

    componentDidMount() {
        // const especialidades = async () => await getEspecialidades();
        getEspecialidades().then(data => {
            console.log(data);
            if (data && Array.isArray(data)) {
                this.setState({ especialidadList: data });
            }
        });
        // console.log(especialidades);
    }
    onchangeEspecialidad = (value) => { console.log(value, "cambio especialidad") }
    render() {
        return (
            <div>
                <Header></Header>
                <h1>Reservar turno</h1>

                <form>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Especialidad</label>
                        <select onchange={this.onchangeEspecialidad} class="form-control" id="exampleFormControlSelect1">
                            <option>Elija alguna opcion</option>
                            {
                                this.state.especialidadList.length > 0 &&
                                this.state.especialidadList.map(value => {
                                    return (<option>{value.descripcionEspecialidad}</option>)
                                })

                            }

                        </select>

                        <div class="form-group">

                            <label for="exampleFormControlInput1">Motivo</label>
                            <input onChange={this.onChange} name="motivo" class="form-control" type="text" placeholder="Ingresar Motivo"></input>

                        </div>

                    </div>
                </form>
                <Footer></Footer>
            </div>


        );
    }
}

export default ReservarTurnos;