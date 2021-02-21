import styled from "styled-components"
import {motion} from "framer-motion"

import {secondary_bg_color, primary_color, secondary_color} from "../../public/colors";
import {md} from "../../public/breakpoints"

export const Main = styled.main`
  
`

export const Intro = styled.section`
  width: 100vw;
  height: 100vh;
  background: url("/images/${props=>props.bg}.png") rgba(0, 0, 0, .4);
  background-blend-mode: multiply;
  background-position: center;

  div{
    color: white;
  }

  @media screen and (min-width:${md}){
    position: absolute;
    top: 0;
    left: 0;
  }
`;
