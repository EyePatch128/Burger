import styled from "styled-components";

import {md} from "../../public/breakpoints"
import {primary_color} from "../../public/colors";


export const Intro = styled.section`
  width: 100vw;
  height: 100vh;
  background: url("/images/${props=>props.bg}") rgba(0, 0, 0, .4);
  background-blend-mode: multiply;
  background-position: center bottom 25px;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const HeadingContainer = styled.div`
  color: white;
  padding: 25vh 1.5em 0 1.5em;

  h1{
    font-size: 35px;
    font-family: "PoppinsMedium";
    margin: 0;
    letter-spacing: 2px;
  }
  h4{
    font-family: 'Poppins';
    font-weight: 100;
    color: ${primary_color};
    margin-top: 0.5em;
  }

  @media screen and (min-width:${md}){
    padding: 25vh 0 0 0;  
    width: 60%;
    margin-left: 10%;

    h1{
      font-size: 50px;
    }
    h4{
      font-size: 25px;
    }
  }
`;