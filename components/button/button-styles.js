import styled from "styled-components"
import { md } from "../../public/breakpoints";
import { primary_color } from "../../public/colors";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3em;
    font-size: 16px;

    @media screen and (min-width: ${md}){
        font-size: 18px;
        margin-top: 4em;
    }
`

export const Button = styled.button`
    background-color: ${primary_color};
    border: none;
    outline: none;
    border-radius: 50px;
    color: white;
    font-size: inherit;
    letter-spacing: 1.5px;
    font-weight: 100;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6em 1em;
    cursor: pointer;
    svg{
        margin-left: 0.4em;
    }

    @media screen and (min-width: ${md}){
        padding: 0.6em 1.3em;

        svg{
            transform: scale(1.3);
        }
    }
`;