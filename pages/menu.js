import React, { useContext, useEffect, useState } from "react"

//Config
import {server} from "../config/index"  

//Context
import Context from "../context"

// Content
import {Menu as content} from "../public/content"

// Components
import Container from "../components/container/container";
import Navbar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import SeparateSection from "../components/separateSection";
import Section from "../components/section/section";
import Scrollspy from "../components/scrollspy/scrollspy"
import Grid from "../components/grid/grid";
import Entry from "../components/entry/entry";
import Footer from "../components/footer/footer";
import ShowOrder from "../components/showOrder/showOrder"

// export async function getStaticProps(context) {
//     const url = `${server}/api/menu`
//     const res = await fetch(url);
//     const data = await res.json();

//     return {
//       props: {
//           data,
//       },
//     }
// }


export default function Menu(props){
    const context  = useContext(Context);

    // Set page Title
    const [pageTitle, setPageTitle] = context.pageTitle;
    useEffect(()=>{
        setPageTitle("Menu")
    }, [pageTitle]);
    

    const isMobile = context.isMobile[0];
    const windowDimensions = context.windowDimensions[0];

    // Shopping cart stuff
    const [orders, addOrder] = context.cart;
    const [showCart, setShowCart] = context.showCart;
    
    const [activeGrid, setActiveGrid] = useState("Burger")


    // // If max reads is reached uncomment this below

    const Entries = (img)=>{
        let x = [];
        for(let i=0; i<8; i++){
            const id = i+"p";
            const name = "Origin Burger"
            const description = "Roasted eggplant spread, marinated steak, veggies"
            const price = 10
            const ImageURL = img

            x[i] = (
                    <Entry 
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        price={price}
                        imageURL={ImageURL}
                        addOrder={addOrder}
                    />
                )
        }
        return x;
    }
    const food = ["Burger", "Salad", "Drink"];
    const img = ["/images/origin-burger.png", "/images/Salad.jpg", "images/orange-juice.jpg"]
    const MobileMenu = ()=>{
        const result =  food.map((elem, index)=>{
            return (
                <Section title={elem} key={index+1}>
                    <Grid col={2} tb>
                        {Entries(img[index])}
                    </Grid>
                </Section>
            );
        })
        return result
    }

    const MenuGrids = ()=>{
        let x = [];
        for(let i=0; i < 3; i++){
            x[i] = (
                <Grid col={2} key={i}>
                    {
                        Entries(img[i])
                    }
                </Grid>
            )
        }
        return x[food.indexOf(activeGrid)];
    }
    


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

                <Section>
                    {isMobile ?
                        MobileMenu()
                    :   
                            
                        <Scrollspy sections={food} setActiveGrid={setActiveGrid}>
                            {
                                MenuGrids()
                            }
                        </Scrollspy>
                            
                    }
                </Section>

                <Footer />

            </Container>
            <ShowOrder orders={orders} setShowCart={setShowCart} />
        </React.Fragment>
    );
}
