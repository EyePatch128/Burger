import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from "react";

import { primary_bg_color } from "../public/colors";
import {md} from "../public/breakpoints";

const SeparateSection = styled.section`
    margin-top: ${props=>props.height*-2.2}px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    div{
        background: ${primary_bg_color};
        height: ${props=>props.height*1.4}px;
        width: 100%;
    }

    svg{
        margin: auto;
    }

    @media screen and (min-width: ${md}){
        margin-top: ${props=>props.height*-1.2}px;

        div{
            height: ${props=>props.height*0.5}px;
        }
    }
`;
const SVG = styled.svg`
    margin: auto;
`;


function Separation(props){
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(500);
    useEffect(()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [])

    const _md = `${(parseInt(md) - 1)}px`
    const isMobile = useMediaQuery({
        query: `(max-device-width: ${_md})`
    });


    const svgWidth = isMobile? width * 0.4 : width * 0.6;
    const svgHeight = isMobile? height * 0.1 : height * 0.2;
    
    const peakY = isMobile? 0:30;
    const points = `${svgWidth/2},${peakY}  0,${svgHeight} ${svgWidth},${svgHeight}`
    console.log(points)
    return(
        <SeparateSection height={svgHeight}>
                
            <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points={points} fill={primary_bg_color}/>
            </svg>
            <div/>

        </SeparateSection>
    )
}

export default Separation;