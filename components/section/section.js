import React from "react"
import Button from "../button/button"
import ShowWhenVisible from "../showWhenVisible";

// Styles
import {Section, TextContainer, Paragraph, Space} from "./section-styles";

// Components
import ColoredBurger from "../burger-icon/burger";

function SectionContainer(props){
    return(
        <Section bg={props.bg}>
            {props.spaced?<Space/>:null}

            {props.ColoredBurger?<ColoredBurger/>:null}


            <TextContainer>

                <ShowWhenVisible>
                    <h2>{props.title}</h2>
                </ShowWhenVisible>
                
                <ShowWhenVisible>
                    {props.subtitle? <h4>{props.subtitle}</h4> : null}
                </ShowWhenVisible>

                {props.text?
                    <Paragraph>
                        {props.text.map((elem, i)=>
                            <ShowWhenVisible key={i}>
                            <p>{elem}</p>
                            </ShowWhenVisible>
                        )}
                    </Paragraph>
                    :
                    null
                }

            </TextContainer>

            <ShowWhenVisible>
                {props.btn? <Button>{props.btn}</Button> : null}
            </ShowWhenVisible>

            {props.spaced?<Space show/>:null}
        </Section>
    )
}

export default SectionContainer;