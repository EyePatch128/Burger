import styled from "styled-components"
import {motion} from "framer-motion"

import {secondary_bg_color, primary_color, secondary_color} from "../../public/colors"

import {md} from "../../public/breakpoints";

export const Header = styled.header`
    width: 100vw;
    height: 4em;
    background-color: ${secondary_bg_color};
    color: white;
    position: relative;
    z-index: 1;
    @media screen and (min-width: ${md}){
        background-color: rgba(27, 26, 25, .2);
    }
`;

export const Nav = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-basis: 100%;
    align-items: center;
    padding-left: 1.5em;

    @media (min-width: ${md}) {
        justify-content: space-between;
        margin: auto;
        width: 80%;
        padding: 0;
    }
`;

export const Logo = styled.a`
    color: ${primary_color};
    font-size: 28px;
    font-weight: 800;
    margin: auto auto auto 0.4em;
    cursor: pointer;
    
    @media (min-width: ${md}) {
        font-size: 42px;
        margin: 0;
    }
`;

export const Menu = styled.div`
    margin-top: 0.2em;
    @media (min-width: ${md}) {
        display: none;
    }
`;

export const Phone = styled.div`
    .icon{
        width: 18px;
        height: 18px;
        padding-right: 0.5em auto;
        margin-right: 0.4em;
    }
    .location-icon{
        margin-left: -0.2em;
    }
    font-size: 12px;
    font-weight: 200;
    display: flex;
    margin-right: 1em;
    order: 2;
    
    @media screen and (min-width: ${md}) {
        display: none;
    }
`;

export const NavListContainerMobile = styled(motion.div)`
    position: absolute;
    left: 0;
    top: 0;
`;

export const NavList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 3em 2em 1em 2em;
    background-color: ${primary_color};
    order: 2;
    z-index: ${props=>props.isOpen? 'auto' : -5 };
    .info{
        margin-top: 1em;
    }
    
    .cross-icon{
        margin-bottom: 1em;
    }

    @media (min-width: ${md}){
        .info{
            display: none;
        }
        .cross-icon{
            display: none;
        }
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 100%;
        padding: 0 1em;
        margin: 0;
        background-color: transparent;
        z-index: auto;
    }
`;

export const NavLink= styled.li`
    font-size: 14px;
    font-family: 'PoppinsBold';
    letter-spacing: 0.1em;
    padding: 0.7em;
    margin-left: 1em;
    color: ${secondary_bg_color};
    text-transform: uppercase;
    cursor: pointer;
    transition: .5s;

    &:hover{
        color: #bfbbbb;
    }
    
    @media (min-width: ${md}){
        color: white;
        padding: 0;
        margin: 1em ;
        font-family: 'PoppinsMedium';
    }
`

export const NavLinkInfo = styled(Phone)`
    font-size: 14px;
    color: white;
    font-family: 'PoppinsMedium';
`
export const OrderButton = styled.button`
    display: none;
    @media screen and (min-width: ${md}){
        font-size: 16px;
        font-family: 'PoppinsBold';
        color: white;
        background-color: ${secondary_color};
        height: 2.2em;
        width: 3.5em;
        padding: 0.1em 0.5em;
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-radius: 50px;
        border: none;
        margin-left: 3em;
        padding: 0.7em;
        cursor: pointer;
    }
`;

