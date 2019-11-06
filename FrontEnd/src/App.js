import React from 'react';
import Header from './components/headers/header';
import { Redirect } from 'react-router-dom';
import './App.css';
//import Header from './components/headers/header';

class App extends React.Component{

  render(){
    return(
      <Redirect from="/" to="/home" />
    );
  }
}


export default App;

