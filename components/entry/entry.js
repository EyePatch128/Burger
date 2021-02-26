import React  from "react";


import {Container, Image, TextContainer, Name, Description, Button} from "./entry-styles";

//Components
import ShowWhenVisible from "../showWhenVisible";

function Entry(props){
    return(
        <ShowWhenVisible>
            <Container>
                <Image bg={props.bg} alt="Origin Burger"/>

                <TextContainer>
                    <Name>
                        <h3>{props.name}</h3>
                        <h3>{props.price}$</h3>
                    </Name>

                    <Description>
                        <p>{props.description}</p>
                    </Description>
                </TextContainer>

                <Button onClick={props.addOrder}>ADD TO ORDER</Button>
            </Container>
        </ShowWhenVisible>
    )
}

export default Entry;