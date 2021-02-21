import React, { useState } from 'react';
import { motion } from "framer-motion"


import { Main } from "./container-styles";

import Navbar from "../navbar/navbar";

function Container(props) {
    return ( 
        <React.Fragment>
            <Navbar />
            <Main>
                {props.children}
            </Main>      
        </React.Fragment>
    );
}

export default Container;