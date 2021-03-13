import React, { useEffect, useState }  from "react";

import {Container, Image, TextContainer, Name, Description, Button} from "./entry-styles";

//Components
import ShowWhenVisible from "../showWhenVisible";

function Entry(props){
    // Fetch image background download url
    // const [imageURL, setImageURL] = useState("");
    // useEffect(()=>{
    //     fetch(`/api/image?id=${props.imageURL}`)
    //         .then(res=>res.text())
    //         .then(res=>{
    //             setImageURL(res)
    //         })
    //         .catch(err=>{
    //             throw err;
    //         });
    // }, [imageURL])
    const {imageURL} = props;

    const Output = (
        <Container>
            <Image imageURL={imageURL} alt={props.name}/>

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
    )

    return(
            <React.Fragment>
                {props.animate? <ShowWhenVisible>{Output}</ShowWhenVisible>: Output}
            </React.Fragment>
            
    )
}

export default Entry;