import { motion } from "framer-motion"
import styled from "styled-components"
import { tb } from "../../public/breakpoints"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    width: 90%;
    margin: 5em auto 1em auto;
    padding-top: 2em;
    overflow: hidden;
    
    & > *{
        margin: 0;
    }

    & > div{
        font-size: 1em;
        letter-spacing: 1.25px;
        

        h3{
            text-align: center;
            margin: 0;
        }

        h5{
            margin: 1em 0 .5em 0;
            letter-spacing: 1.5px;
        }
    }


    @media screen and (min-width: ${tb}){
        & > div{
            text-align: center;

            h3{
                font-size: 1.4em;
            }

            h5{
                margin: 1em auto;
                font-size: 1.2em;
            }
        }
    }
    
`


export const Line = styled(motion.span)`
    margin: 1em auto;
    height: 1.25px;
    background: rgba(200, 200, 200, 0.7);
`

export const Social = styled.div`
    margin: .5em auto 1em auto;
    display: flex;
    justify-content: space-between;
    width: 10em;
    flex-flow: wrap;

    & > *{
            width: 2em;
            height: 2em;
        }
`



export const Hour = styled.div`
    font-family: "PoppinsLight", sans-serif;
    font-weight: 100;
    letter-spacing: 1.1px;
    display: flex;
    justify-content: flex-end;
    margin: 0 0 auto auto;
    padding-right: 1em;

    & > *{
        margin: 0;
        font-size: 12px;
    }

    & > h6:first-of-type{
        margin-right: 2em;
    }

    @media screen and (min-width: ${tb}){
        margin: auto;
        width: 22em;
        justify-content: space-between;
        & > *{
            font-size: 14px;
        }
    }
`

export const Contact = styled.div`
    display: block;
    margin: 2em 0;

    & > div{
        display: flex;
        margin-top: 0.5em;
        align-items: center;
        
        span{
            width: 1.5em;
            height: 1.5em;
            align-items: center;
            position: relative;

            svg{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
        h6{
            font-size: 0.8em;
            letter-spacing: 1.5px;
            margin: .1em .3em;
        }
    }

    @media screen and (min-width: ${tb}){
        display: flex;
        justify-content: space-between;
        margin: 4em auto;
        width: 25em;
    }
`