import React, {useContext, useEffect, useRef, useState} from "react";

import { AnimatePresence } from "framer-motion";

// Context
import Context from "../../context"

//Styles
import {Background, Container, Step} from "./cart-styles"

// Components
import CrossIcon from "../../public/icons/cross.svg"


function Cart(props){

    const context  = useContext(Context);
    const [orders, addOrder] = context.cart;
    const [showCart, setShowCart] = context.showCart;
    const [deleteOrder, clearCart] = context.clearCart;
    
    // hide cart
    const cartDOM = useRef(null);
    useEffect(()=>{ 
        document.getElementsByTagName("body")[0].style = "overflow-y: hidden";
        document.getElementsByTagName("html")[0].style = "overflow-y: hidden";

        function handleClick(e){
            setShowCart(false);
        }

        cartDOM.current.addEventListener("click", handleClick)

        return ()=>{
            document.getElementsByTagName("body")[0].style = "overflow-y: auto";
            document.getElementsByTagName("html")[0].style = "overflow-y: auto";

            if(cartDOM.current !== null)
                cartDOM.current.removeEventListener("click", handleClick);
        }
    })
    
    function hideCart(){
        setShowCart(false);
    }
    

    const steps = {
        first: [1, "Next step: Delivery"],
        second: [2, "Next step: Payment"],
        third: [3, "Confirm payment"]
    }
    const [step, setStep] = useState(steps.first);

    // Number of items
    
    const [itemCount, setItemCount] = useState({});
    useEffect(()=>{
        const defaultItemCount = {};
        for(let elem of orders){
            defaultItemCount[elem.id] = 1;
        }
        setItemCount(defaultItemCount)
    }, [])

    function handleItemCount(e, id){
        const newCount = {...itemCount};
        newCount[id] = e.target.value;

        setItemCount(newCount);
    }

    // Total
    let total = 0;
    for(let elem of orders){
        total += parseFloat(elem.price) * itemCount[elem.id]
    }
    

    // Animation
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    }
    const containerTransition = {
        duration: .3,
        ease: "easeOut"
    }
    

    function handleClick(){

    }

    return(
        <React.Fragment>
                <React.Fragment>
                    <Background ref={cartDOM} />
                    <AnimatePresence>
                        <Container initial="hidden" animate="visible" exit="hidden" variants={containerVariants} transition={containerTransition}>
                            <Step>
                                <CrossIcon onClick={hideCart}/>
                                <h3>Your Order</h3>
                                <div>
                                    {orders.length > 0?
                                    <React.Fragment>
                                        <div>
                                        {
                                            orders.map(elem=>{
                                                return (
                                                    <div key={elem.id}>
                                                        <input type="number" onChange={(e)=>handleItemCount(e, elem.id)} min="1" max="50" name={"Number_" + orders.id} defaultValue={itemCount[elem.id]} />
                                                        <h3>{elem.name}</h3> 
                                                        <h4>{elem.price}$</h4>
                                                        <button onClick={()=>deleteOrder(elem.id)}><CrossIcon/></button>
                                                    </div>
                                                );
                                            })
                                        }
                                        </div>

                                        <textarea placeholder="Add a comment for the chef..." name="comment"/>

                                    </React.Fragment>
                                    :
                                    <h3>Your cart is empty</h3>
                                    }

                                </div>

                                {orders.length > 0?
                                        <React.Fragment>
                                            <button onClick={handleClick}>
                                                <span>{step[0]}</span>
                                                <h4>{step[1]}</h4>
                                                <h5>{total}$</h5>
                                            </button>

                                            <h5 onClick={clearCart}>Clear cart</h5>
                                        </React.Fragment>
                                        
                                :
                                null
                                }
                                
                            </Step>
                        </Container>
                    </AnimatePresence>
                </React.Fragment>

            
        </React.Fragment>
    )
}

export default Cart;