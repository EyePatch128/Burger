import React, { useState } from 'react'

// Styles
import {Container, StatusModal} from "./contact-form-styles"

// Components
import ShowWhenVisible from "../showWhenVisible";

function ContactForm(props){

    const [showStatus, setShowStatus] = useState(false);
    const [isSuccess, setIsSuccess] = useState(null);

    const statusVariants = {
        visible:{
            opacity: 1,
            y: 0
        },
        hidden: {
            opacity: 0,
            y: -50
        }
    }
    const statusTransition = {
        duration: .4,
        type: "tween"
    }

    function updateStatus(status){
        setShowStatus(true)
        setIsSuccess(status)
        
        setTimeout(function(){
            setShowStatus(false)
            setIsSuccess(null)
        }, 3000)
    }

    function sendMessage(e){
        e.preventDefault();

        const data = {};
        const formData = new FormData(e.target);
        for(let elem of formData.entries()){
            data[elem[0]] = elem[1];
        }


        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            if(res.status == 200){
                updateStatus(true)
            }else{
                updateStatus(false)
            }
            const elements = e.target.elements;
            for(let i=0; i < elements.length; i++){
                elements[i].value = "";
            }
        })
        .catch(err=>{
            throw err;
        })
    }


    return(
        <ShowWhenVisible>
            {showStatus?<StatusModal color={isSuccess? "#28a745" : "#dc3545"} variants={statusVariants} initial="hidden" transition={statusTransition} animate="visible"> <h4>{isSuccess? "Message sent" : "Error occured"}</h4></StatusModal> : null}
            <Container>
                <form onSubmit={e=>sendMessage(e)}>
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