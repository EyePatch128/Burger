import Head from 'next/head';

import styled from "styled-components";
import {motion} from "framer-motion";

//Components
import Container from "../components/container/container"

import { Intro } from "../components/container/container-styles";


export default function Home() {
  return (
    <Container>
      <Intro bg="home-bg">
          <div>
              <motion.h1>Lorem ipsum</motion.h1>
              <motion.h4>Tempus dolor, pretium, fermentum consectetur </motion.h4>
          </div>
      </Intro>  
    </Container>
  )
}
