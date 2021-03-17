import React, { useContext, useState } from 'react';

//Context
import Context from "../../context"

// Styles
import { Main } from "./container-styles";

// Components
import Cart from "../cart/cart";
import StatusModal from "../statusModal.js"


function Container(props) {
    const context  = useContext(Context);
    const [showCart, setShowCart] = context.showCart;

    // Status
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(null)
    const updateStatus = (status)=>{
        if(status == 200){
            setSuccess(true);
        }else{
            setSuccess(false);
        }
        setShowModal(true);
        setTimeout(function(){
            setShowModal(false);
        },3000)
    }


    return ( 
        <React.Fragment>   
            <Main>
                {showModal? <StatusModal success={success} /> : null}
                {showCart? <Cart updateStatus={updateStatus} /> : null }
                {props.children}
            </Main>      
        </React.Fragment>
    );
}

export default Container;