import React from "react";
import Header from "../../components/headers/header";
import { getEspecialidades } from "../../Service/Especialidades";
import Footer from "../../components/footer/footer";
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
      if (data && Array.isArray(data)) {
        this.setState({ especialidadList: data });
      }
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
                onClick={() => this.goToEspecialidad(item.descripcionEspecialidad)}
                style={{ marginBottom: 10 }}
              >
                {item.descripcionEspecialidad}
              </button>
            </div>
          ))}
          <Footer></Footer>
      </div>
    );
  }
}

export default Especialidades;
