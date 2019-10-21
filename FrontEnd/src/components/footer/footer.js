import React from 'react';

class Footer extends React.Component{

    constructor(props) {
        super(props);
        this.state = { message: "is footer"}     
    }//END constructor()------------------------------------------------------------------------------------------------------------

    render(){
        return(
            //<footer id="footer" class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar rounded">Contácto: </footer>
            <footer >

            Contact
            </footer>
        )
    }
}

export default Footer;
