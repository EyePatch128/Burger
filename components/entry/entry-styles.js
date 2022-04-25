import styled from "styled-components"
import { motion } from "framer-motion"
import { paragraph_color, primary_color, secondary_bg_color } from "../../public/colors"
import { md, tb } from "../../public/breakpoints"


export const Container = styled(motion.div)`
    display: block;
    background: ${secondary_bg_color};
    @media screen and (min-width: ${tb}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            "image text"
            "image text"
            "image ."
            "image button";
            
    }
    @media screen and (min-width: ${md}){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: 
            "image image text text text"
            "image image text text text"
            "image image . . ."
            "image image button button button";
            
    }
`

export const Image = styled.div`
    background: url(${props=>props.imageURL}) rgba(0, 0, 0, .4);
    background-blend-mode: multiply;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 10em; 

    @media screen and (min-width: ${tb}){
        grid-area: image;
        height: 100%;
    }
`


export const TextContainer = styled.div`
    color: ${paragraph_color};
    margin: 2em auto;
    width: 90%;

    & > *{
        margin: 0;
    }

    @media screen and (min-width: ${tb}){
        grid-area: text;
    }
`


export const Name = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    margin: auto;
    letter-spacing: 1.5px;

    & > *{
        margin: 0;
    }

    @media screen and (min-width: ${tb}){
        margin-bottom: 1em;
    }
`


export const Description = styled.div`
    margin: 0.5em auto 0 auto;
    font-weight: 100;
    font-size: 0.8em;
    & > *{
        margin: 0;
    }
`


export const Button = styled(motion.button)`
    width: 100%;
    background: ${paragraph_color};
    font-family: "PoppinsBold", sans-serif;
    font-weight: 700;
    color: ${primary_color};
    font-size: 1.1em;
    letter-spacing: 0.05em;
    padding: .5em 0;
    cursor: pointer;


    @media screen and (min-width: ${tb}){
        grid-area: button;
        margin-top: 2em;
    }
`
