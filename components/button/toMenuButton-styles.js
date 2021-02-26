import { motion } from "framer-motion";
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
        
        padding: .8em 2em;
        vertical-align: middle;
	    position: relative;
	    z-index: 1;
	    -webkit-backface-visibility: hidden;
	    -moz-osx-font-smoothing: grayscale;
        overflow: hidden;


        &:focus {
            outline: none;
        }
        & > span {
            vertical-align: middle;
        }

        &::before,
        &::after {
            content: "${props=>props.text}";
            position: absolute;
            width: 100%;
            height: 50%;
            left: 0;
            background: ${primary_color};
            color: #fff;
            overflow: hidden;
            -webkit-transition: -webkit-transform 0.3s;
            transition: transform 0.3s;
            -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
            transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }

        &::before{
            top: 0;
	        padding-top: 0.8em;
        }
        
        &::after{
            bottom: 0;
	        line-height: 0;
        }

        &  > span {
            display: block;
            -webkit-transform: scale3d(0.2, 0.2, 1);
            transform: scale3d(0.2, 0.2, 1);
            opacity: 0;
            -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
            transition: transform 0.3s, opacity 0.3s;
            -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
            transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }

        &:hover::before {
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
        &:hover::after {
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
        }
        &:hover > span {
            opacity: 1;
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
        
        svg{
            transform: scale(1.7);
            height: 0;
            transition: 0.3s;
            margin-left: 0.5em;
            padding: 0;
        }
        
        &:hover > svg{
            height: 1em;
        }
    }
`;