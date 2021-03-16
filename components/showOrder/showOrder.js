import React from "react"


// Styles
import { ButtonContainer } from "./showOrder-styles"


function ShowOrderButton(props){
    
    const {orders, setShowCart} = props;

    const num_orders = orders.length
    const render = num_orders > 0 ? true : false;

    function handleClick(){
        setShowCart(true);
    }

    return(
        <React.Fragment>
            {render ?
                <ButtonContainer onClick={handleClick} ><div><h4>Show Order</h4><span>{num_orders}</span></div></ButtonContainer>
                :
                null
            }
        </React.Fragment>
    )
}

export default ShowOrderButton;