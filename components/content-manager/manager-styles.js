import styled from "styled-components"
import {motion} from "framer-motion"

import { primary_color } from "../../public/colors"

export const Container = styled.div`
    margin: 5% auto 0 auto;
    width: 50%;
`

export const Form = styled.form`


    & > div {
        display:flex;
        justify-content: space-between;

        select{
            font-family: "PoppinsMedium", sans-serif;
            outline: none;
            border: none;
            padding: 0em 1em;
            font-size: 1em;
            margin-bottom: 1em;
        }

        label{
            color: white;
            letter-spacing: 1.2px;
            margin: 1em;
        }
        label[for="file-upload"]{
            display: inline-block;
            border: 1px solid #ccc;
            padding: 0.3em 0.6em;
            color: white;
            margin: 2em 1em;

            cursor: pointer;
        }
    }
`

export const Input = styled.input`
    height: 2.5em;
    border: 1px solid white;
    margin: .5em;
    outline: none;
    font-size: 1em;
    font-family: "Poppins", sans-serif;
    text-indent: 0.2em;
    letter-spacing: 1.1px;
    &[type="number"]{
        width: 5em;
    }

    &[type="file"]{
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
`


export const Button = styled.button`
    background-color: white;
    border: 2px solid ${primary_color};
    outline: none;
    padding: .5em 2em;
    width: 10em;
    margin: 2em auto;
    font-size: 1.2em;
    font-family: "PoppinsMedium", sans-serif;
    font-weight: 700;
    letter-spacing: 1.3px;
    cursor: pointer;
`
export const StatusModal = styled.div`
    color: ${props=>props.color};
    margin: 1em auto 3em auto;
    text-align: center;
    width: 20em;
    letter-spacing: 1px;
    border-bottom: 1.5px solid ${props=>props.color};
    opacity: ${props=>props.opacity};
    transition: .3s;

    &>*{
        margin: 0.1em;
    }
`

export const AuthenticationForm = styled.div`
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1.5px solid grey;

    button{
        border-bottom: 1.5px solid white;
        padding: 0.5em 1em;
        font-size: 1em;
        color: white;
        cursor: pointer;
        margin: 2em 1em 0 auto;
    }
`

export const Logout = styled.button`
    position: absolute;
    top: 1em;
    right:3em;
    border: 1.5px solid white;
    padding: 0.5em 1em;
    font-size: 1em;
    color:white;
    cursor: pointer;    
`