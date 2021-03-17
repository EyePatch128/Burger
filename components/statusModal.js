import React from "react";
import styled from "styled-components"

import {AnimatePresence, motion} from "framer-motion";

const Container = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(27, 27, 27, .6);
    z-index: 99 !important;
`

const Modal = styled.div`
    position: fixed;
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
    z-index: 101;
    background: ${props=>props.success? "#28a745" : "#dc3545"};
    width: 15em;

    h3{
        font-size: 1.15em;
        text-align: center;
        color: white;
        font-weight: 100;
        text-transform: capitalize;
    }
`

const variants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1
    }
}

const transition = {
    duration: .3,
    ease: "easeOut"
}

function StatusModal(props){
    return(
        <React.Fragment>
            <AnimatePresence>
                <Container initial="hidden" variants={variants} animate="visible" exit="hidden">
                    <Modal success={props.success}>
                        <h3>{props.success? "Order successfully made" : "An error occured"}</h3>
                    </Modal>
                </Container>
            </AnimatePresence>
        </React.Fragment>
    )
}

export default StatusModal;