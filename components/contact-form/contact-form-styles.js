import styled from "styled-components"
import { tb } from "../../public/breakpoints"

import { paragraph_color, secondary_bg_color, secondary_color } from "../../public/colors"



export const Container = styled.div`
    background-color: ${secondary_bg_color};
    margin: 2em 5%;
    display: flex;
    flex-direction: column;

    & > form{
        padding: 1em 5%;
        
        & > div{
            display: flex;
            flex-direction: column;
            & > div{
                display: flex;
                flex-direction: column;

                input, textarea{
                    font-size: .9em;
                    font-family: "PoppinsMedium", sans-serif;
                    padding: 0.4em .5em;
                    margin-top: .9em;
                    text-indent: .2em;
                    border: 1px solid ${paragraph_color};
                    outline: none;
                    
                }

                textarea{
                    resize: none;
                    height: 5.1em;
                }

                &:last-of-type{
                    margin-top: 1.5em;

                    input, textarea{
                        margin-top: .7em;
                    }
                }
            }
        }
        
        
        button{
            color: white;
            background-color: ${secondary_color};
            font-size: 1em;
            padding: .6em 2em;
            border-radius: 50px;
            margin-top: 2.5em;
            cursor: pointer;
        }


        @media screen and (min-width: ${tb}){
            & > div{
                flex-direction: row;
                justify-content: space-between;
                
                & > div{
                    flex-basis: 35%;


                    &:last-of-type{
                        margin: 0;
                        flex-basis: 55%;
                    }
                }
            }

            button{
                padding: .6em 2.5em;
            }
        }
    }

`