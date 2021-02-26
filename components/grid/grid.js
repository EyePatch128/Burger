import React  from "react";

import {GridContainer} from "./grid-styles"

function Grid(props){
    return(
        <GridContainer>
            {props.children}
        </GridContainer>
    )
}

export default Grid;