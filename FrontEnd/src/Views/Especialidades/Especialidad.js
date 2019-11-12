import React from "react";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer"; 
import { getEspecialidades } from "../../Service/Especialidades";

class Especialidad extends React.Component {
  constructor() {
    super();
    this.state = {
      especialidadId: null
    };
  }

  componentDidMount() {
    const { especialidadId } = this.props.match.params;
    this.setState({ especialidadId: especialidadId });
  }

  render() {
    return (
      <div>
        <Header></Header>
        Especialidad {this.state.especialidadId}
        <Footer></Footer>
      </div>
    );
  }
}

export default Especialidad;
