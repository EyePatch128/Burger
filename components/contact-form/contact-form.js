import React from 'react'

// Styles
import {Container} from "./contact-form-styles"

// Components
import ShowWhenVisible from "../showWhenVisible";

function ContactForm(props){
    return(
        <ShowWhenVisible>
            <Container>
                <form action="/api/contact" method="POST">
                    <div>
                        <div>
                            <input type="text" name="name" placeholder="Your Name" />
                            <input type="email" name="email" placeholder="Your Email" />
                            <input type="tel" name="phone" placeholder="Contact No." />
                        </div>
                        <div>
                            <input type="text" name="subject" placeholder="Subject" />
                            <textarea type="textarea" name="message" placeholder="Message" />
                        </div>
                    </div>

                    <button>Send</button>
                </form>
            </Container>
        </ShowWhenVisible>
    );
}

export default ContactForm;