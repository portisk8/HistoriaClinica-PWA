import React from "react";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer"; 
import { getEspecialidades } from "../../Service/Especialidades";
import {profesionalesObtener} from "../../Service/Profesionales"

class Especialidad extends React.Component {
  constructor() {
    super();
    this.state = {
      especialidadId: null,
      profesionalesList: []
    };
  }

  componentDidMount() {
    const { especialidadId } = this.props.match.params;
    profesionalesObtener(especialidadId).then(profesionales => {
      this.setState({
        profesionalesList: profesionales
      });
    });
    this.setState({ especialidadId: especialidadId });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div class="card" style={{width: "18rem"}}>
          <div class="card-header">
            <strong>{this.state.especialidadId}</strong>
          </div>
          <ul class="list-group list-group-flush">
            
            {this.state.profesionalesList.length > 0 &&
            this.state.profesionalesList.map(profesional => {
              return <li class="list-group-item">
                      {`${profesional.apellido}, ${profesional.nombre}`} <strong>(MP {profesional.nroMatricula})</strong>
                      </li>
              
            })
            }
          </ul>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Especialidad;
