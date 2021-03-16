import React, { useContext } from 'react';

//Context
import Context from "../../context"

// Styles
import { Main } from "./container-styles";

// Components
import Cart from "../cart/cart"


function Container(props) {
    const context  = useContext(Context);
    const [showCart, setShowCart] = context.showCart;


    return ( 
        <React.Fragment>   
            <Main>
                {showCart? <Cart /> : null }
                {props.children}
            </Main>      
        </React.Fragment>
    );
}

export default Container;