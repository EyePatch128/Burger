import React, { useContext } from "react"

// import firebase from "../config/firebase";


//Context
import Context from "../context"

//Content
import { index as content} from "../public/content/index";

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


export default function Home(props) {
  
  const context  = useContext(Context);

  const isMobile = context.isMobile[0];
  const windowDimensions = context.windowDimensions[0];

 

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

        <SeparateSection down isMobile={isMobile} windowDimensions={windowDimensions} rotate="180deg"/>

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
              addOrder={""}
              />

            <Entry 
              bg="origin-burger.png"
              name="Origin Burger"
              price="10"
              description="Roasted eggplant spread, marinated steak, veggies"
              addOrder={""}
              />

            <Entry 
              bg="origin-burger.png"
              name="Origin Burger"
              price="10"
              description="Roasted eggplant spread, marinated steak, veggies"
              addOrder={""}
            />

            <Entry 
              bg="origin-burger.png"
              name="Origin Burger"
              price="10"
              description="Roasted eggplant spread, marinated steak, veggies"
              addOrder={""}
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
