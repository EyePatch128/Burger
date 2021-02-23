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

        <SeparateSection forIntro isMobile={isMobile} windowDimensions={windowDimensions}/>
        
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
          spaced
        />
      </Container>
    </React.Fragment>
  )
}
