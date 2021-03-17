import { motion } from "framer-motion"
import styled from "styled-components"
import { tb } from "../../public/breakpoints"
import { paragraph_color, primary_bg_color, secondary_bg_color, secondary_color } from "../../public/colors"


export const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(27, 27, 27, .6);
    z-index: 99 !important;
`

export const Container = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100 !important;
    background-color: ${primary_bg_color};
    width: 100%;
    height: 100%;
    color: white;
    
    @media screen and (min-width: ${tb}){
        width: 75%;
        height: 95%;
        left: 12.5%;
        top: 5%;
        /* top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important; */
    }
`

export const Step = styled(motion.div)`
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;

    *{
        margin: 0;
    }

    svg{
        margin: 1em auto 0 1em;
        width: 1.8em;
        height: 1.8em;
        cursor: pointer;


        path{
            fill: white;
        }

        @media screen and (min-width: ${tb}){
            margin: 1.5em 1.5em 0 auto;
        }
    }

    & > h3{
        font-size: 2em;
        letter-spacing: 1.5px;
        margin: 1em auto 0 1.5em;
    }
    
    & > div, & > form{
        flex-basis: 50%;
    }

    & > div{
        margin: 2em 1em 0 .5em;
        position: relative;

        & > div{
            overflow-y: auto;
            max-height: 10em;

            & > div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 1em;
                width: 90%;
                max-width: 25em;

                input{
                    width: 2.5em;
                    height: 2em;
                    font-size: 1em;
                    font-family: "PoppinsMedium", sans-serif;
                    outline: none;
                    background-color: ${paragraph_color};
                    border: none;
                    text-align: center;

                    &   ::-webkit-inner-spin-button, 
                    &::-webkit-outer-spin-button {  
                        opacity: 1;
                    }
                }
                
                h3{
                    font-weight: 100;
                    letter-spacing: 1.3px;
                    flex-basis: 70%;
                    margin-left: .5em;
                }

                h4{

                }

                button{
                    svg{
                        width: 1em;
                        height: 1em;
                        margin: 0;

                        path{
                            fill: #dc3545;
                        }
                    }
                }
   
            }
        }

        & > textarea{
            font-size: 1.1em;
            width : 90%;
            text-indent: .4em;
            margin-top: 2em;
            margin-left: 1em;
            height: 5em;
            resize: none;
            outline: none;
            max-width: 30em;

        }

        & > h3{
            font-weight: 100;
            text-align: center;
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);
        }

        @media screen and (min-width:${tb}){
              margin-left: 4em;
        }

    }

    & > button{
        margin: 1em auto;
        padding: .5em 1em;
        background-color: ${secondary_color};
        color: white;
        font-size: 1em;
        display: flex;
        align-items: center;
        width: 90%;
        max-width: 25em;
        cursor: pointer;


        span{
            font-size: 1.2em;
            font-family: "PoppinsMedium", sans-serif;
            border: 1px solid white;
            width: 1.5em;
            height: 1.5em;
            text-align: center;
            flex-basis: 10%;
        }

        h4{
            flex-basis: 60%;
            font-size: 1.1em;
            font-weight: 100;
            letter-spacing: 1px;
        }

        h5{
            font-size: 1.1em;
            letter-spacing: 1px;
            margin-left: 4em;
        }
    }

    & > h5{
        color: #dc3545;
        margin: 0 auto;
        font-size: 1em;
        letter-spacing: 1.2px;
        cursor: pointer;
    }
`

export const DeliveryForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 3em 1em 3em 1em;

    input{
        font-size: 1em;
        font-family: "PoppinsMedium", sans-serif;
        letter-spacing: 1.2px;
        text-indent: .3em;
        padding: .6em 0;
        outline: none;
        border: none;
        appearance: none;
        margin-top: .5em;
    }

    @media screen and (min-width: ${tb}){
        margin: 4em 5em 2em 5em;
    }
`

export const PaymentForm = styled(DeliveryForm)`
    margin-bottom: 1em;
    & > div{
        margin-top: 2em;
        display: flex;
        flex-direction: column;
    }
`