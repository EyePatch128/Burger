import styled from "styled-components"
import { md, tb } from "../../public/breakpoints"


export const GridContainer = styled.div`
    margin: 4em 5% 0 5%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    @media screen and (min-width: ${md}){
        grid-template-columns: 1fr 1fr;
    }
`