import React, { useContext, useEffect, useState } from "react"

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

export default function Menu(props){
    const context  = useContext(Context);

    const isMobile = context.isMobile[0];
    const windowDimensions = context.windowDimensions[0];

    // // Fetch data
    // const [data, setData] = useState({})
    // useEffect(async ()=>{
    //     const url = `${server}/api/menu`
    //     const res = await fetch(url);
    //     const data = await res.json();

    //     setData(data);

    // }, [data])

    // const food = Object.keys(data);

    // const Entries = elem=>{
    //     return Object.entries(data[elem]).map(entry=>{
    //         const id = entry[1]._id;
    //         const name = entry[0];
    //         const description = entry[1].Description;
    //         const price = entry[1].Price;
    //         const ImageURL = entry[1].ImageURL;
            
    //         return(
    //             <Entry 
    //                 key={id}
    //                 name={name}
    //                 description={description}
    //                 price={price}
    //                 imageURL={ImageURL}
    //                 addOrder={""}
    //             />
    //         );
    //     })
    // }

    // const MobileMenu = food.map((elem, index)=>{
    //                     return (
    //                         <Section title={elem} key={index}>
    //                             <Grid col={2} tb>
    //                                 {Entries(elem)}
    //                             </Grid>
    //                         </Section>
    //                     );
    //                 })

    // const MenuGrids = ()=>{
    //     return food.map((elem, index)=>{
    //         return(
    //             <Grid key={index}>
    //                 {
    //                     Entries(elem)
    //                 }
    //             </Grid>
    //         );
    //     })
    // }

    const [activeGrid, setActiveGrid] = useState("Burger")

    const Entries = (img)=>{
        let x = [];
        for(let i=0; i<4; i++){
            const id = i+"p";
            const name = "Origin Burger"
            const description = "Roasted eggplant spread, marinated steak, veggies"
            const price = 10
            const ImageURL = img

            x[i] = (
                    <Entry 
                        key={id}
                        name={name}
                        description={description}
                        price={price}
                        imageURL={ImageURL}
                        addOrder={""}
                    />
                )
        }
        return x;
    }
    const food = ["Burger", "Salad", "Drink"];
    const img = ["/images/origin-burger.png", "/images/salad.jpg", "images/orange-juice.jpg"]
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

                {isMobile ?
                    <Section>{MobileMenu()}</Section>
                :   
                        <Section>
                            <Scrollspy sections={food} setActiveGrid={setActiveGrid}>
                                {
                                    MenuGrids()
                                }
                            </Scrollspy>
                        </Section>
                }

                <Footer />

            </Container>
        </React.Fragment>
    );
}
