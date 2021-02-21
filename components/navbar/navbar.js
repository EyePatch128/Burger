import React from 'react';

// Components
import { Header } from "./navbar-styles";
import Navigation from "./nav";

function Navbar(props){
    return(
        <Header>
            <Navigation/>
        </Header>
    );
}

export default Navbar;