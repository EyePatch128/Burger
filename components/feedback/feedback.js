import React from "react"
import ShowWhenVisible from "../showWhenVisible"

import {Container, Image, TextContainer, Name, Comment} from "./feedback-styles"

function Feedback(props){
    return(
        <ShowWhenVisible>
            <Container enlarge={props.enlarge}>
                <Image ariaLabel={props.name} bg={props.image} />
                <TextContainer>
                    <Name>
                        <h5>{props.name}</h5>
                    </Name>
                    <Comment>
                        <p>"{props.comment}"</p>
                    </Comment>
                </TextContainer>
            </Container>
        </ShowWhenVisible>
    )
}

export default Feedback