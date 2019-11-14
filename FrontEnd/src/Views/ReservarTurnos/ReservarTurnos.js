import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { getEspecialidades } from "../../Service/Especialidades";
import { profesionalesObtener } from "../../Service/Profesionales";
import { createForm, formShape } from "rc-form";

class ReservarTurnos extends React.Component {
  constructor() {
    super();
    this.state = {
      especialidadList: [],
      profesionalesList: []
    };
  }

  static propTypes = {
    form: formShape
  };

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
  onChangeEspecialidad = e => {
    var especialidad = e.target.value;
    if (especialidad) {
      console.log(especialidad, "cambio especialidad");
      profesionalesObtener(especialidad).then(result => {
        console.log(result);
        this.setState({ profesionalesList: result });
      });
    }
  };

  onChangeProfesional = e => {
    var profesional = e.target.value;
    console.log(profesional, "cambio profesional");
  };

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  };

  render() {
    let errors;
    const { getFieldProps, getFieldError } = this.props.form;

    return (
      <div>
        <Header></Header>
        <h1>Reservar turno</h1>

        <form>
          <div class="form-group">
            <label>Especialidad:</label>
            <select
              onChange={this.onChangeEspecialidad}
              class="form-control"
              {...getFieldProps("required", {
                // onChange(){}, // have to write original onChange here if you need
                rules: [{ required: true }]
              })}
            >
              <option value={null}>Elija alguna opcion</option>
              {this.state.especialidadList.length > 0 &&
                this.state.especialidadList.map(value => {
                  return (
                    <option value={value.descripcionEspecialidad}>
                      {value.descripcionEspecialidad}
                    </option>
                  );
                })}
            </select>

            <label>Profesional:</label>
            <select
              onChange={this.onChangeProfesional}
              class="form-control"
              disabled={this.state.profesionalesList.length < 1}
              {...getFieldProps("required", {
                // onChange(){}, // have to write original onChange here if you need
                rules: [{ required: true }]
              })}
            >
              <option value={null}>Elija un Profesional</option>
              {this.state.profesionalesList.length > 0 &&
                this.state.profesionalesList.map(value => {
                  return (
                    <option value={value.numeroMatricula}>
                      {`${value.apellido}, ${value.nombre}`}
                    </option>
                  );
                })}
            </select>

            <div class="form-group">
              <label for="exampleFormControlInput1">Motivo</label>
              <input
                onChange={this.onChange}
                name="motivo"
                class="form-control"
                type="text"
                placeholder="Ingresar Motivo"
              ></input>
            </div>
          </div>

          <div class="conainer">
            <div class="row">
              <div class="col">
                <button
                  onClick={() => this.props.history.push("MenuUsuario")}
                  type="button"
                  class="btn btn-outline-secondary btn-lg btn-block"
                >
                  Cancelar
                </button>
              </div>
              <div class="col">
                <button
                  onClick={() => this.props.history.push("MenuUsuario")}
                  type="button"
                  class="btn btn-outline-secondary btn-lg btn-block"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </form>
        <Footer></Footer>
      </div>
    );
  }
}

export default createForm()(ReservarTurnos);
