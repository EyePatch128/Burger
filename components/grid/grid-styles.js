import styled from "styled-components"
import { md, tb } from "../../public/breakpoints"


export const GridContainer = styled.div`
    margin: 4em 10% 0 10%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    @media screen and (min-width: ${props=>props.tb? tb : md}){
        grid-template-columns: ${props=>"1fr ".repeat(props.col)};
    }
`