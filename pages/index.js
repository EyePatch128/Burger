import Head from 'next/head';
import React from "react"

import styled from "styled-components";
import {motion} from "framer-motion";

//Components
import Container from "../components/container/container"
import Navbar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import SeparateSection from "../components/separateSection";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Intro 
            bg="home-bg" 
            title="Lorem ipsum" 
            subtitle="Tempus dolor, pretium, fermentum consectetur Tempus dolor, pretium, fermentum consectetur" 
            btn="Order Now"
          />
        <SeparateSection />
      </Container>
    </React.Fragment>
  )
}
