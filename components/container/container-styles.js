import styled from "styled-components"

import {md} from "../../public/breakpoints"

export const Main = styled.main`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: ${md}){
    margin-top: -12vh;
  }
`
