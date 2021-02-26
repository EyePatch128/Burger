import React  from "react";

import {GridContainer} from "./grid-styles"

function Grid(props){
    return(
        <GridContainer col={props.col} tb={props.tb}>
            {props.children}
        </GridContainer>
    )
}

export default Grid;