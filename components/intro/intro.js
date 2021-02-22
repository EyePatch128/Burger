import React from "react";
import {motion} from "framer-motion"

// Components
import Button from "../button/button"
import ShowWhenVisible from "../showWhenVisible";

// Styled Components
import { Intro, HeadingContainer } from "./intro-styles";

function IntroContainer(props){
    function orderNow(){
        console.log("Clicked")
    }
    return(
        <Intro bg={props.bg}>
            <ShowWhenVisible>
                <HeadingContainer>
                    <motion.h1>{props.title}</motion.h1>
                    <motion.h4>{props.subtitle}</motion.h4>
                </HeadingContainer>
            
                <ShowWhenVisible>
                    {props.btn?<Button action={orderNow}>{props.btn}</Button>:null}
                </ShowWhenVisible>
            </ShowWhenVisible>
        </Intro>
    )
}

export default IntroContainer;