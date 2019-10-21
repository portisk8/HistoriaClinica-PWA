import React from "react";
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
    // const especialidades = async () => await getEspecialidades();
    getEspecialidades().then(data => {
      console.log(data);
      this.setState({ especialidadList: data.items });
    });
    // console.log(especialidades);
  }

  goToEspecialidad = especialidadId => {
    let path = `especialidad/${especialidadId}`;
    this.props.history.push(path);
  };

  render() {
    return (
      <div>
        <Header></Header>
        {this.state.especialidadList.length > 0 &&
          this.state.especialidadList.map((item, idx) => (
            <div>
              <button
                type="button"
                class="btn btn-outline-primary btn-lg btn-block"
                onClick={() => this.goToEspecialidad(idx)}
                style={{ marginBottom: 10 }}
              >
                {item}
              </button>
            </div>
          ))}
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
