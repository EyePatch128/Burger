import styled from "styled-components"
import { md } from "../../public/breakpoints";

export const Container = styled.div`
    height: 10em;
    width: 8em;
    margin: 1em auto -2.5em auto;
    svg{
        height: inherit;
        width: inherit;
    }

    @media screen and (min-width: ${md}){
        height: 12em;
        width: 10em;
    }
`;