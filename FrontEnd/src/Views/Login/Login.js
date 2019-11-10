import React from 'react';
import './login.css';
import Header from "../../components/headers/header";
import { postLogin } from "../../Service/PostLogin";
import { Redirect } from 'react-router-dom';
import Footer from "../../components/footer/footer";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dni: '',
            password: '',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //stop the reload action by pressing submit button
    handleSubmit(event){    
        event.preventDefault();
    };//END handleSubmit()------------------------------------------------------------------------------------------------------------

    
    login(){
        //if exist usernmae and pass
        if(this.state.dni && this.state.password){
            //pass the username and pass to the postData method that performs the fetch from the postLogin.js service
            postLogin(this.state).then(result => {
                let responseJSON = result;
                console.log(responseJSON)
                //if exist token 
                if(responseJSON.token){
                    //set local storage with the api users response
                    sessionStorage.setItem('userData',JSON.stringify(responseJSON));
                    //redirect equals true, to redirect to the component dashboard
                    this.setState({redirect: true});               
                }else{//else user or pass invalid
                    alert("Datos incorrectos")
                }
            });
        }
       
    }//END login()------------------------------------------------------------------------------------------------------------


    onChange(e){
        //set the state username and password with the input value
        this.setState({[e.target.name]: e.target.value});
    }//END onChange()------------------------------------------------------------------------------------------------------------


    render(){
        //if the state.redirect equlas true, then redirect to dashboard component
         if(this.state.redirect){
            return(<Redirect to={'/MenuUsuario'} />);      
         }
         //if the user is stored in the local storage then redirect dashboard component
       /*  if(sessionStorage.getItem("userData")){
             return(<Redirect to={'/dashboard'} />);
         }*/
        return(
            <div>
                <Header></Header>
                <div class="container login-container">
                
                <div class="row">
                    <div class="col-md-6 login-form-1">
                        <h3>Iniciar sesión</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <input  type="text" name="dni" onChange={this.onChange} class="form-control" placeholder="Tu DNI"  />
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" onChange={this.onChange} class="form-control" placeholder="Tu Contraseña"  />
                            </div>
                            <div class="form-group">
                                <input type="submit" onClick={this.login} class="btnSubmit" value="Ingresar" />
                            </div>
                            <div class="form-group">
                                <a href="#" class="ForgetPwd">¿Olvidaste tu contraseña?</a>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
        );
    }//END render()------------------------------------------------------------------------------------------------------------

}

export default Login