import styled from "styled-components"

import { secondary_bg_color, secondary_color } from "../../public/colors";


export const Container = styled.div`
    border: 1.5px solid ${secondary_bg_color};
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
    padding-right: 2em;
    height: 90vh;
    & > div:last-child{
        margin-top: 4em;
        overflow-y: auto;

        &::-webkit-scrollbar {
            margin-right: 5px;
            width: 8px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: ${secondary_color};
        }


        & > div{
            margin-top: 0em;
        }
    }
`

export const Navigation = styled.div`
    
    & > ul{
        list-style: none;
        display: flex;
        justify-content: flex-start;
        margin: 2% 5% 0 5%;
        padding: .3em 2em;
        background-color: ${secondary_color};
        
        li{    

            button{
                color: ${secondary_color};
                font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                letter-spacing: 1.5px;
                font-size: 1em;
                background-color: ${secondary_bg_color};
                padding: .4em 1em;
                margin-right: 0.5em;
                text-align: center;
                align-items: center;
                display: flex;
                cursor: pointer;
                height: 2.5em;
                
                svg{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;


export const Content = styled.div`

`;