import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/headers/header";
import Footer from "../../components/footer/footer";
import SingIn from "../../Views/SingIn/SingIn";
import { Link } from 'react-router-dom';
import Login from "../Login/Login";

class Home extends React.Component {
 /* routeChangeLogin =()=>{
    let path = `login`;
    this.props.history.push(path);
  }
  routeChangeEspecialidades =()=>{
    let path = `Especialidades`;
    this.props.history.push(path);
  }*/
 
  render() {


    /*$('.carousel').carousel({
      interval: 200
    })*/

    return (
      <div>
        <Header></Header>
        <h1>Home</h1>
        
        <div>
          <Link from="/" to="/Especialidades">
            <button /*onClick={this.routeChangeEspecialidades}*/ type="button" class="btn btn-outline-secondary btn-lg btn-block">
              Especialidades
            </button>
          </Link>
        </div>
        



        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={logo} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={logo} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={logo} alt="Third slide"/>
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

export default Home;
