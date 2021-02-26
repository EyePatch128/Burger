import React from "react"
import Button from "../button/button"
import ShowWhenVisible from "../showWhenVisible";

// Styles
import {Section, TextContainer, Paragraph, Space} from "./section-styles";

// Components
import ColoredBurger from "../burger-icon/colored-burger";
import WhiteBurger from "../burger-icon/white-burger";

function SectionContainer(props){
    const spaceTop = [null];
    const spaceBot = [null];
    for(let i=0; i<props.spaceTop;i++){
        spaceTop.push(<Space key={i} />);
    }
    for(let i=0; i<props.spaceBot;i++){
        spaceBot.push(<Space key={i} />);
    }

    return(
        <Section bg={props.bg} ariaLabel={props.bg?props.bg.split(".")[0].replace('-', ' ').toUpperCase() : ""}>
            {spaceTop}

            {props.ColoredBurger? <ColoredBurger/> : null}
            {props.WhiteBurger? <WhiteBurger/> : null}

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
                {props.children}
            </ShowWhenVisible>

            <ShowWhenVisible>
                {props.btn? <Button>{props.btn}</Button> : null}
            </ShowWhenVisible>

            {spaceBot}
        </Section>
    )
}

export default SectionContainer;