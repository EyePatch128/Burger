import React, {useContext, useEffect} from "react"

// Nextjs
import Image from "next/image"

// Context
import Context from "../context"

// Content
import {Contact as content} from "../public/content"


// Components
import Navbar from "../components/navbar/navbar"
import Container from "../components/container/container"
import Intro from "../components/intro/intro"
import SeparateSection from "../components/separateSection";
import Section from "../components/section/section";
import ContactForm from "../components/contact-form/contact-form"
import Footer from "../components/footer/footer";
import ShowOrder from "../components/showOrder/showOrder"



function Contact(props){
    const context  = useContext(Context);

    // Set page Title
    const [pageTitle, setPageTitle] = context.pageTitle;
    useEffect(()=>{
        setPageTitle("Contact us")
    }, [pageTitle]);


    const isMobile = context.isMobile[0];
    const windowDimensions = context.windowDimensions[0];

    // Shopping cart
    const [orders, addOrder] = context.cart;
    const [showCart, setShowCart] = context.showCart;


    return(
        <React.Fragment>
            <Navbar isMobile={isMobile}/>

            <Container>
                <Intro 
                    bg={content.Intro.bg}
                    title={content.Intro.title}
                    subtitle={content.Intro.subtitle}
                />

                <SeparateSection up isMobile={isMobile} windowDimensions={windowDimensions}/>
                
                <Section
                    title="Write Us"
                >
                    <ContactForm/>
                </Section>

                <Section
                    title="Find Us"
                >
                    <div style={{margin: isMobile? "2em" : "2em auto"}}>
                        <Image src="/images/map.png" alt="map" width={isMobile? windowDimensions.width - (0.1 * windowDimensions.width) : windowDimensions.width * (3.5/4)} height={isMobile? windowDimensions.width * (4.75/5) : windowDimensions.height * (4.75/5)} />
                    </div>
                </Section>

                <Footer />
            </Container>
            <ShowOrder orders={orders} setShowCart={setShowCart} />
        </React.Fragment>
    )
}


export default Contact;