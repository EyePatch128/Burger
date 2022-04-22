import React,{useEffect} from "react";
import Link from 'next/link';
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion"

//Styles
import {Container, Social, Hour, Contact, Line} from "./footer-styles";

//Icons
import PhoneIcon from "../../public/icons/phone.svg";
import LocationIcon from "../../public/icons/location.svg";
import FacebookIcon from "../../public/icons/facebook.svg";
import InstagramIcon from "../../public/icons/instagram.svg";
import PinterestIcon from "../../public/icons/pinterest.svg";
import TwitterIcon from "../../public/icons/twitter.svg";
import ShowWhenVisible from "../showWhenVisible";


function Footer(props){

    // Animate Line on view
    const controlsLine = useAnimation();
    const [refLine, inViewLine] = useInView();
  
    useEffect(() => {
      if (inViewLine) {
        controlsLine.start("visible");
      }
    }, [controlsLine, inViewLine]);

    const variantsLine = {
        visible: { width: "80%"},
        hidden: { width: "0.5%"}
    }
    const transition = { 
        duration: 0.5,
    };



    return(
            <Container>
                <ShowWhenVisible>
                    <h3>
                        Check Out Our Reviews
                    </h3>
                </ShowWhenVisible>

                <ShowWhenVisible>
                    <Social>
                        <Link href="facebook.com">
                            <FacebookIcon />
                        </Link>

                        <Link href="instagram.com">
                            <InstagramIcon />
                        </Link>

                        <Link href="twitter.com">
                            <TwitterIcon />
                        </Link>

                        <Link href="pinterest.com">
                            <PinterestIcon />
                        </Link>
                    </Social>
                </ShowWhenVisible>

                <Line
                    ref={refLine}
                    animate={controlsLine}
                    initial="hidden"
                    transition={transition}
                    variants={variantsLine}
                />
                
                <ShowWhenVisible>
                    <h5>Open Hours :</h5>
                </ShowWhenVisible>

                <ShowWhenVisible>
                    <Hour>
                        <h6>Monday - Saturday</h6>
                        <h6>9 AM - 8 PM</h6>
                    </Hour>
                </ShowWhenVisible>

                <ShowWhenVisible>
                    <Contact>
                        <div>
                            <span>
                                <PhoneIcon />
                            </span>
                            <h6>+555-555-555</h6>
                        </div>

                        <div>
                            <span>
                                <LocationIcon />
                            </span>
                            <h6>8 Street, city 90544</h6>
                        </div>
                    </Contact>
                </ShowWhenVisible>
                
            </Container>
    );
}

export default Footer;