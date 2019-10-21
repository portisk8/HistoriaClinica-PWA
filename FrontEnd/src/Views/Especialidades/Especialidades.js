import React from "react";
import logo from "../../logo.svg";
import Header from "../../components/headers/header";
import { getEspecialidades } from "../../Service/Especialidades";

class Especialidades extends React.Component {
  constructor() {
    super();
    this.state = {
      especialidadList: []
    };
  }

  componentDidMount() {
    const especialidades = async () => await getEspecialidades();
    var esp = getEspecialidades().then(data => {
      console.log(data);
    });
    console.log(especialidades);
  }
  render() {
    return (
      <div>
        <Header></Header>
      </div>

      // <Redirect from="/" to="/dashboard" />
      /* <ul>
        <li>
          <Link to="/dashboard">Dashborad</Link>
        </li>
        <li>
          <Link to="/provider">Provider</Link>
        </li>
        <li>
          <Link to="/login">Salir</Link>
        </li>
      </ul>*/
    );
  }
}

export default Especialidades;
