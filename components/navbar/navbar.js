import React from 'react';

// Components
import { Header } from "./navbar-styles";
import Navigation from "./nav";

function Navbar({isMobile}){
    return(
        <Header>
            <Navigation isMobile={isMobile} />
        </Header>
    );
}

export default Navbar;