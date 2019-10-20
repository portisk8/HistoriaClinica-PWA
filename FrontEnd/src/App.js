import React from 'react';
import Header from './components/headers/header';

import './App.css';
//import Header from './components/headers/header';

class App extends React.Component{

  render(){
    return(
      <div>
        <Header></Header>
        <h1>hello</h1>
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


export default App;

