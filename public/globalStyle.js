import {createGlobalStyle} from "styled-components";

import {primary_bg_color}  from "./colors"


const GlobalStyle = createGlobalStyle`
    html, body{
        margin: 0;
        padding: 0;
        background-color: ${primary_bg_color};
        overflow-x:hidden;
        font-family: 'Poppins', sans-serif;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;