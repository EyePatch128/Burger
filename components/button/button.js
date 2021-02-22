import React from "react";

import { Container, Button } from "./button-styles";

import RightArrow from "../../public/icons/right-arrow.svg";

function ButtonContainer(props){
    return(
        <Container>
            <Button onClick={props.action}>
                {props.children}
                <RightArrow />
            </Button>
        </Container>
    )
}

export default ButtonContainer; 