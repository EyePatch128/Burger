import React from "react"

import {Container, Image, TextContainer, Name, Comment} from "./feedback-styles"

function Feedback(props){
    return(
        <Container>
            <Image src={`../../images/feedback/${props.image}`} alt={props.name} />
            <TextContainer>
                <Name>
                    <h4>{props.name}</h4>
                </Name>
                <Comment>
                    <p>"{props.comment}</p>
                </Comment>
            </TextContainer>
        </Container>
    )
}

export default Feedback