import styled from "styled-components";

import { md } from "../../public/breakpoints";
import { paragraph_color, primary_color } from "../../public/colors";


const applyBackground = (bg)=>{
    if(bg){
        return `
            background: url("/images/${bg}") rgba(0, 0, 0, .4);
            background-blend-mode: multiply;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        `;
    }
    return '';
}
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    
    ${props=>applyBackground(props.bg)}

    @media screen and (min-width: ${md}){
        padding: 0 10%;
    }
`;

export const TextContainer = styled.div`
    margin: 2em auto -1em auto ;
    width: 80%;
    text-align: center;
    padding: auto 3em;

    &>*{
        margin: 0;
    }

    h2{
        font-family: "Rufina";
        color: ${primary_color};
        font-size: 30px;
        margin: 0.1em;
    }
    h4{
        font-family: "PoppinsMedium";
        font-weight: 200;
        font-size: 14px;
        color: white;
    }

    @media screen and (min-width: ${md}){
        & > div:first-of-type{
            h2{
                font-size: 44px;
            }
            h4{
                font-size: 18px;
            }
        }
    }
`

export const Paragraph = styled.div`
    margin: 3.5em auto 2em auto;
    font-family: "Poppins";
    font-weight: 100;
    font-size: 14px;
    color: ${paragraph_color};
    @media screen and (min-width: ${md}){
        font-size: 18px;
    }
`

export const Space = styled.span`
    height: 2em;
    margin: 2em auto 1em auto;

    @media screen and (min-width: ${md}){
        width: 0;
        height: 10em;
        margin: 2em auto;
    }
`;