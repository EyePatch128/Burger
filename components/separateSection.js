import { useEffect, useState } from "react";
import styled from "styled-components";

import { primary_bg_color } from "../public/colors";
import {md} from "../public/breakpoints"


const SeparateSection = styled.section`
    margin-top: ${props=>props.margin_top}px;
    margin-bottom: ${props=>props.margin_bottom}px;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transform: rotate(${props=>props.rotate || 0});
    div{
        background: ${primary_bg_color};
        height: ${props=>props.height*1.4}px;
        width: 100%;
    }

    svg{
        margin: 0 auto -0.1em auto;
    }

    @media screen and (min-width: ${md}){
        margin-top: ${props=>props.margin_top}px;
        margin-bottom: ${props=>props.margin_bottom}px;
        div{
            height: ${props=>props.height*0.5}px;
        }
    }
`;


function Separation(props){
    const width = (props.isMobile? props.windowDimensions.width * 0.4 : props.windowDimensions.width * 0.6) || null;
    const height = (props.isMobile? props.windowDimensions.height * 0.1 : props.windowDimensions.height * 0.2) || null;
    const peakY = props.isMobile? 0:30;
    const points = `${width/2},${peakY}  0,${height} ${width},${height}`;

    const margin_top    = props.isMobile? (props.up? height*-2.2 : 0) : (props.up? height*-1.2 : 0);
    const margin_bottom = props.isMobile? (props.down? height*-2 : 0) : (props.down? height*-1.2 : 0);
    return(
        <SeparateSection margin_bottom={margin_bottom} margin_top={margin_top} rotate={props.rotate} height={height} width={width}>
            <svg height={height} width={width} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points={points} fill={primary_bg_color}/>
            </svg>
            <div/>
        </SeparateSection>
    )
}

export default Separation;