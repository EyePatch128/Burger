import React, {useState} from 'react';
import Link from "next/link"

import { AnimatePresence } from "framer-motion"


// Icons
import PhoneIcon from "../../public/icons/phone.svg";

// components
import { Nav, Logo, Phone, NavListContainerMobile } from "./navbar-styles";
import NavigationList from "./navList";
import AnimatedMenu from "./animated-menu"


function Navigation (props){
    const [open, setOpen] = useState(false);
    

    const toggleNavbar = ()=>{
        setOpen(!open);
    }
    
    const isMobile = props.isMobile;

    const variants = {
        open: { opacity: 1, left: 0,},
        closed: { opacity: 0, left: "-50%"},
      }

    return(
        <Nav>
            {
                isMobile && 
                <React.Fragment>
                <AnimatedMenu isOpen={open} toggleNavbar={toggleNavbar}/>

                <Phone>
                    <div className="icon">
                        <PhoneIcon />
                    </div>
                    <span>+555-555-555</span>
                </Phone>

                <AnimatePresence>
                    <NavListContainerMobile
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        variants={variants}
                        exit="closed"
                        transition={{
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                    >
                        <NavigationList  isOpen={open} toggleNavbar={toggleNavbar} isMobile={isMobile} />
                    </NavListContainerMobile>
                </AnimatePresence>
                </React.Fragment>
            }
            <Link href="/"><Logo>LOGO</Logo></Link>
            {
                !isMobile &&
                <NavigationList isMobile={isMobile} />
            }
            
        </Nav>
    );
}

export default Navigation;