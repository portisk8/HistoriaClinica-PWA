import React from "react";
import logo from "../../logo.svg";
import hospital2 from "../../assets/img/hospital2.jpg";
import hospital3 from "../../assets/img/hospital3.jpg";
import hospital4 from "../../assets/img/hospital4.jpg";
import hospital5 from "../../assets/img/hospital5.jpg";
import hospital6 from "../../assets/img/hospital6.jpg";
import hospital7 from "../../assets/img/hospital7.jpg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import SingIn from "../../Views/SingIn/SingIn";
import { Link } from 'react-router-dom';
import Login from "../Login/Login";
import { Redirect } from 'react-router-dom';


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
      toLogin: false
    }
    this.historialClinico = this.historialClinico.bind(this);

  }

  historialClinico(){
    if(sessionStorage.getItem("userData")){
      this.setState({isLogin: true})
  }else{
    this.setState({toLogin: true})
  }
}
  render() {
    if(this.state.isLogin){
      return <Redirect to={"/HistorialClinico"}/>
    }else if(this.state.toLogin){
      return <Redirect to={"/Login"}/>
    }else{
    return (
      <div>
        <Header></Header>
                
        <h1 style={{textAlign: "center"}}>Hospital Salutem</h1>
        
        <div>
          <Link from="/" to="/Especialidades">
            <button /*onClick={this.routeChangeEspecialidades}*/ type="button" class="btn btn-info btn-lg btn-block">
              Especialidades
            </button>
          </Link>
        </div>


        <div>
          <Link from="/" to="/ReservarTurnos">
            <button  type="button" class="btn btn-outline-secondary btn-lg btn-block">
              Reservar Turnos
            </button>
          </Link>
        </div>
        <div>

          <Link from="/" to="/TurnosDisponibles">
            <button  type="button" class="btn btn-info btn-lg btn-block">
              Turnos Diponibles
            </button>
          </Link>
        </div>

        <div>
      
            <button onClick={this.historialClinico} type="button" class="btn btn-outline-secondary btn-lg btn-block">
              HistorialClinico
            </button>
          
        </div>

        <div id="carouselExampleIndicators" className="carousel slide" data-interval="2000" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
   
    <div class="carousel-item active">
      <img class="d-block w-100" src={hospital3} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={hospital5} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={hospital6} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={hospital7} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        
        <Footer></Footer>
      </div>
    
    );
  }
  }
}

export default Home;
