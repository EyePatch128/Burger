import React, { useContext } from "react"

//Context
import Context from "../context"

// Config
import {server} from "../config/index"

// Content
import {Menu as content} from "../public/content"

// Components
import Container from "../components/container/container";
import Navbar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import SeparateSection from "../components/separateSection";
import Section from "../components/section/section";
import Grid from "../components/grid/grid";
import Entry from "../components/entry/entry";

export default function Menu(props){
    const context  = useContext(Context);

    const isMobile = context.isMobile[0];
    const windowDimensions = context.windowDimensions[0];

    const { data } = props;
    
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
                    Object.keys(data).map((elem, index)=>{
                        return (
                            <Section title={elem} key={index}>
                                <Grid>
                                {
                                    Object.entries(data[elem]).map((entry, i)=>{
                                        const id = entry[1]._id;
                                        const name = entry[0];
                                        const description = entry[1].description;
                                        const price = entry[1].price;
                                        const ImageURL = entry[1].ImageURL;
                                        
                                        return(
                                            <Entry 
                                                key={id}
                                                name={name}
                                                description={description}
                                                price={price}
                                                imageURL={ImageURL}
                                                addOrder={""}
                                            />
                                        )
                                    })
                                }
                                </Grid>
                            </Section>
                        );
                    })
                :
                null
                }

                <Section>
                    <Grid isMobile={isMobile} lot>

                    </Grid>
                </Section>

            </Container>
        </React.Fragment>
    );
}




export async function getStaticProps(context){
    const url = `${server}/api/menu`
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            data
            }
    };

};