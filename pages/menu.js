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

    const BurgerList = [
        {
            name: "Beef Burger",
            description: "Roasted eggplant spread, marinated steak, veggies",
            price: 10,
        },
        {
            name: "Cheeseburger",
            description: "Quater Pounder with Cheese",
            price: 9,
        },
        {
            name: "Bacon Cheeseburger",
            description: "Quater Pounder with Cheese & Bacon",
            price: 10,
        },
        {
            name: "Mighty Burger",
            description: "Quater Pounder beef patty or a freshly grilled chicken fillet, topped with cheese, fried onions & chorizo",
            price: 15,
        },
        {
            name: "Pulled Pork",
            description: "Pulled pork topped with onion rings",
            price: 7,
        },
        {
            name: "Chicken All Star",
            description: "2 chicken fillets topped with onion rings and bacon",
            price: 8,
        },
        {
            name: "Mexicano",
            description: "Quater pounder beef patty topped with jalapeneos, salsa, sour cream and totillas",
            price: 11,
        },
        {
            name: "Henos Go Ham Burger",
            description: "Two gormet beef patties topped with cheese, hash browns, Henos' egg patty, fried onions and Go Ham sauce",
            price: 12,
        }
    ]

    const SaladList = [
        {
            name: "Classic Greek Salad",
            description: "tomato pieces, sliced cucumber, onions, olives, feta cheese",
            price: 4,
        },
        {
            name: "Pad Thai Salad",
            description: "Vegetarian salad which is a mix of both fruits and vegetables",
            price: 5,
        },
        {
            name: "Chicken Salad",
            description: "chicken, peppers, olives and celery",
            price: 4,
        },
        {
            name: "Fruity Pasta Salad",
            description: "Pasta with various fresh fruits",
            price: 3,
        },
        {
            name: "Bulgur Wheat and Shrimp Salad",
            description: "Bulgur wheat is coarsely ground wheat grain and is parboiled",
            price: 6,
        },
        
    ];
    const DrinkList = [
        {
            name: "Coca Cola",
            description: "",
            price: 2,
        },
        {
            name: "Orange juice",
            description: "",
            price: 1,
        },
        {
            name: "Mojito",
            description: "",
            price: 6,
        },
        {
            name: "Black Tea",
            description: "",
            price: 3,
        },
        {
            name: "Cocktail",
            description: "",
            price: 4,
        },
        {
            name: "Strawberry juice",
            description: "",
            price: 2,
        },
    ];
    const Entries = (cat)=>{
        const mealList = cat == "Burger" ? BurgerList : cat == "Salad"? SaladList : DrinkList;
        
        let x = [];
        for(let i=0; i < mealList.length; i++){
            const id = i+"p";
            const name = mealList[i].name
            const description = mealList[i].description
            const price = mealList[i].price
            const ImageURL = `/images/${cat.toLowerCase()}${i+1}.jpg`;

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
                        {Entries(elem)}
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
                        Entries(food[i])
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
