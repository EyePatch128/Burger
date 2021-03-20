import React, { useContext, useEffect } from "react"

// import firebase from "../config/firebase";


//Context
import Context from "../context"

//Content
import { index as content} from "../public/content";

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
import ShowOrder from "../components/showOrder/showOrder";

export default function Home(props) {
  
  const context  = useContext(Context);

  // Set page Title
  const [pageTitle, setPageTitle] = context.pageTitle;
  useEffect(()=>{
    setPageTitle("Home");
  }, [pageTitle]);

  // if user is on mobile and window dimensions
  const isMobile = context.isMobile[0];
  const windowDimensions = context.windowDimensions[0];

  // Shopping cart stuff
  const [orders, addOrder] = context.cart;
  const [showCart, setShowCart] = context.showCart;

  // Favorite menu items
  // const data = context.data || {};
  // const Entries = ()=>{
  //   const favorites = [];
  //   const burgers = data["Burger"];
  //   if(burgers != undefined){
  //     const entries = Object.entries(burgers);
  //     for(let i = 0; i < 4; i++){
  //       favorites.push(entries[i]);
  //     }

  //     const output = favorites.map(elem=>{
  //       const id = elem[1]._id;
  //       const name = elem[0];
  //       const description = elem[1].Description;
  //       const price = elem[1].Price;
  //       const ImageURL = elem[1].ImageURL;
        
  //       return(
  //           <Entry 
  //               key={id}
  //               id={id}
  //               name={name}
  //               description={description}
  //               price={price}
  //               imageURL={ImageURL}
  //               addOrder={addOrder}
  //           />
  //       );
  //     })

  //     return output;
  //   }

  //   return null
  // }

  // If max reads reached uncomment this
  const Entries = ()=>{
    return(
      <React.Fragment>
        <Entry
              id={1}
              imageURL="/images/origin-burger.png"
              name="Origin Burger"
              price="10"
              description="Roasted eggplant spread, marinated steak, veggies"
              addOrder={addOrder}
              animate
              />

            <Entry 
              id={2}
              imageURL="/images/origin-burger.png"
              name="Traditional Burger"
              price="10"
              description="Roasted eggplant spread, marinated steak, veggies"
              addOrder={addOrder}
              animate
              />

            <Entry
              id={3}
              imageURL="/images/origin-burger.png"
              name="Kid's Burger"
              price="7"
              description="Roasted eggplant spread, marinated steak, veggies"
              addOrder={addOrder}
              animate
            />

            <Entry
              id={4}
              imageURL="/images/origin-burger.png"
              name="Mini Burger"
              price="8"
              description="Roasted eggplant spread, marinated steak, veggies"
              addOrder={addOrder}
              animate
            />
      </React.Fragment>
    )
  }
 

  return (
    <React.Fragment>
      <Navbar isMobile={isMobile} />
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
            {Entries()}
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
      <ShowOrder orders={orders} setShowCart={setShowCart} />
    </React.Fragment>
  )
}
