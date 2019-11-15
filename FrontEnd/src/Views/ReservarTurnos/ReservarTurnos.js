import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import { getEspecialidades } from "../../Service/Especialidades";
import { profesionalesObtener } from "../../Service/Profesionales";
import { disponibleObtener, guardarTurno } from "../../Service/Turnos";

import moment from "moment";
import DatePicker from "react-date-picker";

class ReservarTurnos extends React.Component {
  constructor() {
    super();
    this.state = {
      especialidadList: [],
      profesionalesList: [],
      formData: {
        fechaConsulta: new Date(),
        motivo: ""
      }
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
  onChangeEspecialidad = e => {
    var { formData } = this.state;
    var especialidad = e.target.value;
    if (especialidad) {
      formData.especialidad = especialidad;
      console.log(especialidad, "cambio especialidad");
      profesionalesObtener(especialidad).then(result => {
        console.log(result);
        this.setState({
          profesionalesList: result,
          formData: formData
        });
      });
    }
  };

  onChangeProfesional = e => {
    var { formData } = this.state;
    var profesional = e.target.value;
    console.log(profesional, "cambio profesional");
    if (profesional) {
      formData.medico = profesional;
      this.setState({ formData: formData });
    }
  };

  handleChangeFechaConsulta = e => {
    var { formData } = this.state;
    formData.fechaConsulta = e.value;
    formData.fecha = e.value;
    console.log(e.value, "cambio FECHA");
    if (e.value) {
      //   formData.fecha = moment(e);
      //Turnos disponibles
      disponibleObtener(formData).then(result => {
        console.log(result);
        formData.horaConsulta = result.turnoDisponible;
        this.setState({
          formData: formData
        });
      });
    }
  };
  changeMotivo = e => {
    console.log(e);
    var { formData } = this.state;
    formData.motivo = e.target.motivo;
    this.setState({ formData: formData });
  };

  guardar = e => {
    var { formData } = this.state;
    console.log(e);
    var horaConsultaSplit = formData.horaConsulta.split(":");
    var fecha = formData.fechaConsulta.setHours(
      horaConsultaSplit[0],
      horaConsultaSplit[1]
    );
    debugger;
    var form = {
      fecha: moment(fecha),
      hora: formData.horaConsulta,
      profesional: formData.medico,
      motivo: formData.motivo,
      paciente: JSON.parse(sessionStorage.getItem("userData")).dni
    };
    if(form){

      guardarTurno(form).then(result => {
      console.log(result);
    });
    } else {alert("faltan completar campos")}
  };

  render() {
    return (
      <div>
        <Header></Header>
        <h1>Reservar turno</h1>

        <form onSubmit={this.guardar}>
          <label>Especialidad:</label>
          <select onChange={this.onChangeEspecialidad} class="form-control">
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
          >
            <option value={null}>Elija un Profesional</option>
            {this.state.profesionalesList.length > 0 &&
              this.state.profesionalesList.map(value => {
                return (
                  <option value={value.nroMatricula}>
                    {`${value.apellido}, ${value.nombre}`}
                  </option>
                );
              })}
          </select>

          <DatePicker
            onChange={value => this.handleChangeFechaConsulta({ value })}
            value={this.state.formData.fechaConsulta}
          />
          {/* <DatePicker
              onChange={value => this.handleChangeFechaConsulta({ value })}
              value={this.state.formData.fechaConsulta}
            /> */}

          <label for="exampleFormControlInput1">
            Motivo
            <input
              value={this.state.formData.motivo}
              onChange={this.changeMotivo}
              name="motivo"
              class="form-control"
              type="text"
              placeholder="Ingresar Motivo"
            />
          </label>

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
                  //   onClick={() => this.guardar()}
                  type="submit"
                  class="btn btn-outline-secondary btn-lg btn-block"
                >
                  Guardar
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

export default ReservarTurnos;
