import React from "react";
import Header from "../../components/headers/header";
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
      </div>
    );
  }
}

export default Especialidad;
