import Head from 'next/head';
import React, { useContext, useEffect, useState } from "react"

// import styled from "styled-components";
// import {motion} from "framer-motion";


//Context
import Context from "../context"

//Components
import Container from "../components/container/container";
import Navbar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import SeparateSection from "../components/separateSection";
import Section from "../components/section/section";
import Grid from "../components/grid/grid";
import Entry from "../components/entry/entry";
import Feedback from '../components/feedback/feedback';
import Footer from "../components/footer/footer";


export default function Home() {
  const {state} = useContext(Context);
  const isMobile = state.isMobile;

  const [windowDimensions, setWindowDimensions] = useState({});
  useEffect(()=>{
    setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
    const handleResize = ()=>{
      setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', handleResize)

    return ()=>{window.removeEventListener("resize", handleResize)};
  }, [])

  const content = {
    Intro: {
      bg:"home-bg.png",
      title:"Lorem ipsum",
      subtitle:"Tempus dolor, pretium, fermentum consectetur Tempus dolor, pretium, fermentum consectetur",
      btn:"Order Now"
    },
    TheBurgerPlace: {
      title: "The Burger Place",
      paragraph: ["A porttitor tempus sapien, est nibh vulputate velit", "A porttitor tempus sapien, est nibh vulputate velit. Pretium proin tortor pretium at."],
      btn: "Make your order"
    },
    DiscoverDelicacies: {
      bg: "burger-bg.png",
      title: "Discover our delicacies",
      subtitle: "Fresh From The Grill"
    },
    OurPopularDishes: {
      title: "Our Popular Dishes",
      subtitle: "Quality Ingredients, Tasty Meals",
      paragraph: ["Consectetur amet nibh pretium et vel. Tincidunt nunc fermentum massa habitant. Vel consectetur non at sed felis. Donec malesuada at facilisis aliquet eget in."],
      btn: "Explore Entire Menu"
    },
    HappyCustomers:{
      bg: "happy-customer.png",
      title: "They All Love Our Food",
      paragraph: ["Vitae habitasse scelerisque natoque eu. Non et etiam et nibh nullam tellus egestas auctor. Et sem viverra neque neque, nisl. Maecenas non pharetra ipsum, rutrum justo, vitae id urna, donec. "]
    }
  }

  return (
    <React.Fragment>
      <Navbar isMobile={isMobile}/>
      <Container>
        <Intro 
            bg={content.Intro.bg}
            title={content.Intro.title}
            subtitle={content.Intro.subtitle} 
            btn={content.Intro.btn}
          />

        <SeparateSection up isMobile={isMobile} windowDimensions={windowDimensions}/>
        
        <Section
          title={content.TheBurgerPlace.title}
          text={content.TheBurgerPlace.paragraph}
          btn={content.TheBurgerPlace.btn}
          ColoredBurger
        />

        <SeparateSection isMobile={isMobile} windowDimensions={windowDimensions} rotate="180deg"/>

        <Section
          title={content.DiscoverDelicacies.title}
          subtitle={content.DiscoverDelicacies.subtitle}
          bg={content.DiscoverDelicacies.bg}
          spaceTop={1}
          spaceBot={1}
        />

        <Section
          title={content.OurPopularDishes.title}
          subtitle={content.OurPopularDishes.subtitle}
          text={content.OurPopularDishes.paragraph}
          btn={content.OurPopularDishes.btn}
          WhiteBurger
        >
          <Grid col={2}>
            <Entry 
              bg="origin-burger.png"
              name="Origin Burger"
              price="10"
              description="Roasted eggplant spread, marinated steak, veggies"
              btn-action={state.addOrder}
              />

            <Entry 
              bg="origin-burger.png"
              name="Origin Burger"
              price="10"
              description="Roasted eggplant spread, marinated steak, veggies"
              btn-action={state.addOrder}
              />

              <Entry 
              bg="origin-burger.png"
              name="Origin Burger"
              price="10"
              description="Roasted eggplant spread, marinated steak, veggies"
              btn-action={state.addOrder}
              />

              <Entry 
              bg="origin-burger.png"
              name="Origin Burger"
              price="10"
              description="Roasted eggplant spread, marinated steak, veggies"
              btn-action={state.addOrder}
              />
          </Grid>
        </Section>

        <Section
          bg={content.HappyCustomers.bg}
          title={content.HappyCustomers.title}
          text={content.HappyCustomers.paragraph}
          spaceTop={1}
          spaceBot={isMobile?2:1}
        />

        <SeparateSection up isMobile={isMobile} windowDimensions={windowDimensions}/>

        <Section>
            <Grid col={3} tb>
              <Feedback image="sakura.jpg" name="Sakura" comment="Non malesuada sit ipsum purus, sed!" />
              <Feedback image="song.jpg" name="Song" comment="Non malesuada sit ipsum purus, sed!" />
              <Feedback image="viking.jpg" name="Viking" comment="Non malesuada sit ipsum purus, sed!" />
            </Grid>
        </Section>

        <Footer />
        
      </Container>
    </React.Fragment>
  )
}
