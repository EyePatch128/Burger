import React, { useState } from 'react';
import { motion } from "framer-motion"


import { Main } from "./container-styles";


function Container(props) {
    return ( 
        <React.Fragment>   
            <Main>
                {props.children}
            </Main>      
        </React.Fragment>
    );
}

export default Container;