import React from 'react';
import './footer.css';

class Footer extends React.Component{

    constructor(props) {
        super(props);
        this.state = { message: "is footer"}     
    }//END constructor()------------------------------------------------------------------------------------------------------------

    render(){
        return(
            //<footer id="footer" class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar rounded">Contácto: </footer>
            
<footer class="page-footer font-small grey pt-4">

  
<div class="container-fluid text-center text-md-left">

    
    <div class="row">

     
      <div class="col-md-6 mt-md-0 mt-3">

        <h5 class="text-uppercase">CONTACTO</h5>
        <p>3794123456</p>

      </div>


      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">www.empresaamiguitos.com</a>
          </li>
        </ul>

      </div>

      
  </div>
  </div>
  
</footer>

        )
        }
        }
        export default Footer;