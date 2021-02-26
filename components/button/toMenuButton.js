import React from "react";
import Link from "next/link";

import { Container, Button } from "./toMenuButton-styles";

import RightArrow from "../../public/icons/right-arrow.svg";

function ButtonContainer(props){

    return(
        <Container>
            <Link href="/menu">
                <Button text={props.children}>
                    <span>
                        {props.children}
                    </span>
                    <RightArrow />
                </Button>
            </Link>
        </Container>
    )
}

export default ButtonContainer; 