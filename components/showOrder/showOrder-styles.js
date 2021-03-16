import styled from "styled-components"
import { motion } from "framer-motion"
import { secondary_color } from "../../public/colors";


export const ButtonContainer = styled(motion.button)`
    position: fixed;
    left: 50%;
    bottom: 6%;
    transform: translateX(-50%);
    z-index: 99;
    background-color: ${secondary_color};
    color: white;
    border-radius: 50px;
    font-family: "PoppinsMedium", sans-serif;
    padding: .4em .5em .4em 1em;
    font-size: 1em;
    letter-spacing: 1.5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    width: 80%;
    max-width: 15em;
    
    
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;    
        text-align: center;

        *{
            margin: 0;
        }

        h4{
            font-size: inherit;
            font-family: inherit;
            font-weight: 100;
            flex-basis: 80%;
            text-align: center;
            
        }

        span{
            width: 2.4em;
            height: 2.4em;
            border-radius: 50%;
            background-color: rgba(255, 205, 125, .8);
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    
    
`;