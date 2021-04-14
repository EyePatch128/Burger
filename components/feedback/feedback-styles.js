import styled from "styled-components"
import { tb } from "../../public/breakpoints";

import { paragraph_color, secondary_bg_color } from "../../public/colors";

export const Container = styled.div`
    margin: 0 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
        "image image text text text";
    align-items: center;

    @media screen and (min-width: ${tb}){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas:
            "image"
            "image"
            "image"
            "."
            "text"
            "text"
            "text";
        background: ${secondary_bg_color};
        margin: ${props=>props.enlarge ? "-2em 0" : "0"};

        padding: ${props=>props.enlarge ? "2em 0 2em 0": "0"}
    }
`

export const Image = styled.div`
    background: url("/images/feedback/${props=>props.bg}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    grid-area: image;
    height: 6em;
    width: 6em;
    margin: auto;
    @media screen and (min-width: ${tb}){
        margin-top: 1em;
        height: 8em;
        width: 8em;
    }
`
export const TextContainer = styled.div`
    color: ${paragraph_color};
    grid-area: text;

    @media screen and (min-width: ${tb}){
        text-align: center;
        padding-bottom: 1.5em;
        margin-top: -0.15em;
    }
`

export const Name = styled.div`
    font-family: "PoppinsLight", sans-serif;
    letter-spacing: 1.8px;
    
    & > *{
        margin: 0;
    }

    @media screen and (min-width: ${tb}){
        font-size: 18px;
    }
    
`

export const Comment = styled.div`
    font-size: 14px;

    & > *{
        margin: 0.5em auto 0 auto;
        text-align: center;
    }

    @media screen and (min-width: ${tb}){
        font-size: 16px;
        margin-top: 1.5em;
        margin-bottom: 0em;
    }
`