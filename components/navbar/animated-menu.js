import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components"

import {primary_color, secondary_bg_color} from "../../public/colors";

const Container = styled.div`
    margin-top: 0.2em;
    z-index: 5;
`

function AnimatedMenu(props){
    const menuPath = {
        A: "M0,5 L25,5",
        B: "M0,12.5 L25,12.5",
        C: "M0,20 L25,20"
    }

    const crossPath = {
        A: "M0,5 L25,20",
        B: "M0,20 L25,5"
    }

    const color = props.isOpen ? secondary_bg_color : primary_color;
    const variants = {
        open: { pathLength: 1},
        closed: { pathLength: 0},
    };
    const transition = {
        duration: 0.5,
        ease: "easeOut"
    };
    return(
        <Container onClick={props.toggleNavbar}>
            <AnimatePresence>
                <motion.svg width="30" height="30" viewBox="0 0 25 25" fill="none">
                    <motion.path
                        fill="none"
                        strokeWidth="2"
                        stroke={color}
                        d={menuPath.A}
                        initial="open"
                        animate={props.isOpen ? "closed" : "open"}
                        variants={variants}
                        exit="open"
                        transition={transition}
                    />
                    <motion.path
                        fill="none"
                        strokeWidth="2"
                        stroke={color}
                        d={menuPath.B}
                        initial="open"
                        animate={props.isOpen ? "closed" : "open"}
                        variants={variants}
                        exit="open"
                        transition={transition}
                        
                    />
                    <motion.path
                        fill="none"
                        strokeWidth="2"
                        stroke={color}
                        d={menuPath.C}
                        initial="open"
                        animate={props.isOpen ? "closed" : "open"}
                        variants={variants}
                        exit="open"
                        transition={transition}
                        
                    />
                    <motion.path
                        fill="none"
                        strokeWidth="2"
                        stroke={color}
                        d={crossPath.A}
                        initial="closed"
                        animate={props.isOpen ? "open" : "closed"}
                        variants={variants}
                        exit="closed"
                        transition={transition}
                        
                    />
                    <motion.path
                        fill="none"
                        strokeWidth="2"
                        stroke={color}
                        d={crossPath.B}
                        initial="closed"
                        animate={props.isOpen ? "open" : "closed"}
                        variants={variants}
                        exit="closed"
                        transition={transition}
                        
                    />
                </motion.svg>
            </AnimatePresence>
        </Container>
    );
}

export default AnimatedMenu;