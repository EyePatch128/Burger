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


    const {id, name, description, price, imageURL} = props;

    // cart stuff
    const {addOrder} = props;
    const order = {
        id,
        name,
        price
    };

    // Addedd animation
    
    
    const Output = (
        <Container>
            <Image imageURL={imageURL} alt={name}/>

            <TextContainer>
                <Name>
                    <h3>{name}</h3>
                    <h3>{price}$</h3>
                </Name>

                <Description>
                    <p>{description}</p>
                </Description>
            </TextContainer>

            <Button onClick={e=>addOrder(e, order)}>ADD TO ORDER</Button>
        </Container>
    )

    return(
            <React.Fragment>
                {props.animate? <ShowWhenVisible>{Output}</ShowWhenVisible>: Output}
            </React.Fragment>
            
    )
}

export default Entry;