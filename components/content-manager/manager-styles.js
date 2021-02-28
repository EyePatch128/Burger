import styled from "styled-components"
import { primary_color } from "../../public/colors"

export const Container = styled.div`
    margin: 5% auto 0 auto;
    width: 50%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;


    & > div {
        textarea{
            display: block;
            width: 100%;
            height: 2em;
            border: 1px solid white;
            margin: 1em;
            outline: none;
            font-size: 1em;
            font-family: "Poppins", sans-serif;
            text-indent: 0.2em;
            letter-spacing: 1.1px;
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
    margin: 1em;
    outline: none;
    font-size: 1em;
    font-family: "Poppins", sans-serif;
    text-indent: 0.2em;
    letter-spacing: 1.1px;

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
