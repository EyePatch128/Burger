import React, {useContext, useEffect, useRef, useState} from "react";
import cookieCutter from 'cookie-cutter'

import { AnimatePresence, useGestures } from "framer-motion";

// Context
import Context from "../../context"

//Styles
import {Background, Container, Step, DeliveryForm, PaymentForm} from "./cart-styles"

// Components
import CrossIcon from "../../public/icons/cross.svg"


function Cart(props){

    const context  = useContext(Context);
    const [orders, addOrder] = context.cart;
    const [showCart, setShowCart] = context.showCart;
    const [deleteOrder, clearCart] = context.clearCart;
    const setOrders = context.setOrders;
    
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
    

    // Stages
    const stages = {
        first: {
            number: 1,
            text: "Next step: Delivery",
            next: "TODELIVERY"
        },
        second: {
            number: 2,
            text: "Next step: Payment",
            next: "TOPAYMENT"
        },
        third: {
            number: 3,
            text: "Confirm payment",
            next: "FINISHED"
        }
    }
    const [stage, setStage] = useState(stages.first);
    useEffect(()=>{
        const cookie = cookieCutter.get("stage");
        if(cookie){
            setStage(JSON.parse(cookie));
        }
    }, [])

    // Number of items
    // let total = 0;
    const [itemCount, setItemCount] = useState({});
    useEffect(()=>{
        const cookie = cookieCutter.get("itemCount");
        if(cookie){
            const count = JSON.parse(cookie);
            for(let elem of orders){
                if(!count[elem.id]){
                    count[elem.id] = 1;
                }
            }
            setItemCount(count);
            
        }else{
            const defaultItemCount = {};
            for(let elem of orders){
                defaultItemCount[elem.id] = 1;
            }
            setItemCount(defaultItemCount)  
            
        };
    }, [])

    function handleItemCount(e, id){
        const newCount = {...itemCount};
        newCount[id] = e.target.value;

        setItemCount(newCount);
    }
    
    // Total
   const [total, setTotal] = useState(0);
   useEffect(()=>{
       let value = 0;
       for(let elem of orders){
           value += parseFloat(elem.price) * itemCount[elem.id];
       }
       setTotal(value)
   }, [itemCount])


    // Comment for chef
    const [chefComment, setChefComment] = useState("");
    useEffect(()=>{
        const cookie = cookieCutter.get("chefComment");
        if(cookie && cookie.length > 0)
            setChefComment(cookie);
    }, [])
    function handleCommentChange(e){
        setChefComment(e.target.value);
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
    
    // Stages
    const goToPrevStage = currentStage =>{
        const data = {
            action: "GOBACK",
            currentStage: stage.number
        }

        fetch("/api/cart", {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res=>{
                if(res.status == 200){
                    setStage(JSON.parse(cookieCutter.get("stage")));
                }
            })
            .catch(err=>{
                throw err;
            })  
    }

    const goBack = {
        1: {
            callback: clearCart,
            text: "Clear cart"
        },
        2: {
            callback: goToPrevStage,
            text: "Go back"
        },
        3: {
            callback: goToPrevStage,
            text: "Go back"
        }
    }

    // Order Stage
    function submitCart(){
        const data = {
            orders,
            action: stage.next,
            itemCount,
            chefComment
        };

        fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res=>{
                if(res.status == 200){
                    setStage(stages.second);
                }
            })
            .catch(err=>{
                throw err;
            })
    }

    // Delivery Stage
    const [deliveryFormInput, setDeliveryFormInput] = useState({
        name: "Naruto",
        street: "konoha",
        city: "leaf village",
        phone: "7777"
    })

    function submitDelivery(){
        const data = {
            action: stage.next,
            deliveryFormInput
        }

        fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res=>{
                if(res.status == 200){
                    setStage(stages.third);
                }
            })
            .catch(err=>{
                throw err;
            })
    }

    // Payment
    const [paymentFormInput, setPaymentFormInput] = useState({
        name: "Naruto",
        card: "FR55-4581-4B58-4226-8874",
        expires: "05/28",
        cvc: "568"
    })
    function confirmPayment(){
        const data = {
            action: stage.next,
            paymentFormInput
        }

        fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res=>{
                if(res.status == 200){
                    setShowCart(false);
                    const cookie = cookieCutter.get("orders");
                    if(cookie)
                        setOrders(JSON.parse(cookie));
                };
                props.updateStatus(res.status)
            })
            .catch(err=>{
                throw err;
            })
    }

    function handleFormChange(e, form){
        const input = e.target.name;
        const data = {};
        data[input] = e.target.value;
        if(form == deliveryFormInput)
            setDeliveryFormInput({...form, ...data});
        else
            setPaymentFormInput({...form, ...data});
    }


    const stage_output = {
        1: (
            <React.Fragment>
                <h3>Your Order</h3>
                <div>
                    {orders.length > 0?
                    <React.Fragment>
                        <div>
                        {
                            orders.map(elem=>{
                                return (
                                    <div key={elem.id}>
                                        <input type="number" onChange={(e)=>handleItemCount(e, elem.id)} min="1" max="50" name={"Number_" + orders.id} defaultValue={itemCount[elem.id] || 1} />
                                        <h3>{elem.name}</h3> 
                                        <h4>{elem.price}$</h4>
                                        <button onClick={()=>deleteOrder(elem.id)}><CrossIcon/></button>
                                    </div>
                                );
                            })
                        }
                        </div>

                        <textarea placeholder="Add a comment for the chef..." name="comment" onChange={e=>handleCommentChange(e)} defaultValue={chefComment}/>

                    </React.Fragment>
                    :
                    <h3>Your cart is empty</h3>
                    }

                </div>
            </React.Fragment>
        ),
        2: (
            <React.Fragment>
                <DeliveryForm onSubmit={e=>e.preventDefault()}>
                    <input type="text" name="name" placeholder="Full Name" onChange={e=>handleFormChange(e, deliveryFormInput)} defaultValue={deliveryFormInput.name} required />
                    <input type="text" name="street" placeholder="Street" onChange={e=>handleFormChange(e, deliveryFormInput)} defaultValue={deliveryFormInput.street} required />
                    <input type="text" name="city" placeholder="City" onChange={e=>handleFormChange(e, deliveryFormInput)} defaultValue={deliveryFormInput.city} required />
                    <input type="tel" name="phone" placeholder="Phone N°" onChange={e=>handleFormChange(e, deliveryFormInput)} defaultValue={deliveryFormInput.phone} required />
                </DeliveryForm>
            </React.Fragment>
        ),
        3: (
            <React.Fragment>
                <PaymentForm onSubmit={e=>e.preventDefault()}>
                    <input type="text" name="name" placeholder="Name" onChange={e=>handleFormChange(e, paymentFormInput)} defaultValue={paymentFormInput.name} required />
                    <div>
                        <label>Card information</label>
                        <input type="text" name="Card number" placeholder="Card Number" onChange={e=>handleFormChange(e, paymentFormInput)} defaultValue={paymentFormInput.card} required/>
                        <div>
                            <input type="text" name="expires" placeholder="MM/AA" onChange={e=>handleFormChange(e, paymentFormInput)} defaultValue={paymentFormInput.expires} required/>
                            <input type="number" name="CVC" placeholder="CVC Code" onChange={e=>handleFormChange(e, paymentFormInput)} defaultValue={paymentFormInput.cvc} required/>
                        </div>
                    </div>
                </PaymentForm>
            </React.Fragment>
        )
    };

    const submitButtonCallback = {
        1: submitCart,
        2: submitDelivery,
        3: confirmPayment
    }

    return(
        <React.Fragment>
                <React.Fragment>
                    <Background ref={cartDOM} />
                    <AnimatePresence>
                        <Container initial="hidden" animate="visible" exit="hidden" variants={containerVariants} transition={containerTransition}>
                            <Step>
                                <CrossIcon onClick={hideCart}/>

                                {stage_output[stage.number]}

                                {orders.length > 0?
                                    <React.Fragment>
                                        <button onClick={submitButtonCallback[stage.number]}>
                                            <span>{stage.number}</span>
                                            <h4>{stage.text}</h4>
                                            <h5>{total}$</h5>
                                        </button>
                        
                                        <h5 onClick={goBack[stage.number].callback}>{goBack[stage.number].text}</h5>
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