import styled from "styled-components"
import {motion} from "framer-motion"

import {secondary_bg_color, primary_color, secondary_color} from "../../public/colors";
import {md} from "../../public/breakpoints"

export const Main = styled.main`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${md}){
    margin-top: -10vh;
    & > section{
      padding: auto 10%;
    }
  }
`
