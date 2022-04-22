import React, { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive';

import cookieCutter from 'cookie-cutter'

// Next things
import Head from "next/head"

//Config
import {server} from "../config/index"

// Context
import Context from "../context";

//Styles
import '../public/fonts/fonts.css';
import GlobalStyle from "../public/globalStyle";
import {md} from "../public/breakpoints";



function MyApp({ Component, pageProps }) {

    // Fetch data
    // const [data, setData] = useState({})
    // useEffect(async ()=>{
    //     const url = `${server}/api/menu`
    //     const res = await fetch(url);
    //     const data = await res.json();

    //     setData(data);

    // }, [data]);

    // Page title
    const [pageTitle, setPageTitle] = useState("");

    // Detecting if user is on mobile or not and Updating
    const _md = `${(parseInt(md) - 1)}px`;
    const mobileDetected = useMediaQuery({
        query: `(max-device-width: ${_md})`
    });
    const [isMobile, setIsMobile] = useState(mobileDetected);
    useEffect(()=>{
        setIsMobile(mobileDetected);
    }, [mobileDetected]);

    //Get window dimensions
    const [windowDimensions, setWindowDimensions] = useState({});
    useEffect(()=>{
        setWindowDimensions({width: window.innerWidth, height: window.innerHeight});

        const handleResize = ()=>{
            setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
        };
        window.addEventListener('resize', handleResize);

        return ()=>{window.removeEventListener("resize", handleResize)};
    }, []);

    // Shopping cart
    const [showCart, setShowCart] = useState(false);

    const [orders, setOrders] = useState([]);
    
    useEffect(()=>{
        let cookie = cookieCutter.get("orders")
        
        if(cookie){
            cookie = JSON.parse(cookieCutter.get("orders"))
            setOrders(cookie)
        }

    }, [])

    const addOrder = (e, order)=>{

        const {id} = order;
        for(let elem of orders){
            if(elem.id == id)
                return;
        };

        const data = {
            action: "ADD",
            orders: [...orders, order]
        };
        
        fetch("/api/cart", {
            method:"POST",
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res=>{
                if(res.status == 200){
                    // setOrders(JSON.parse(data));
                    setOrders(JSON.parse(cookieCutter.get("orders")));
                };
            }) 
            .catch(err=>{
                throw err;
            })
        
    };

    const deleteOrder = (id)=>{
        const data={
            action: "SINGLE",
            id,
            orders,
        }

        fetch("/api/cart", {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': "application/json"
            }
        })
            .then(res=>{
                setOrders(JSON.parse(cookieCutter.get("orders")));
            })
            .catch(err=>{
                throw err;
            })
    }

    const clearCart = ()=>{
        const data={
            action: "ALL"
        }

        fetch("/api/cart", {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': "application/json"
            }
        })
            .then(res=>{
                setOrders(JSON.parse(cookieCutter.get("orders")));
            })
            .catch(err=>{
                throw err;
            })
    }

    // State to pass to pages
    const state = {
        isMobile: [isMobile, setIsMobile],
        windowDimensions: [windowDimensions, setWindowDimensions],
        pageTitle: [pageTitle, setPageTitle],
        cart: [orders, addOrder],
        showCart: [showCart, setShowCart],
        clearCart: [deleteOrder, clearCart],
        setOrders: setOrders
        
    };

    return (
        <React.Fragment>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta httpEquiv="content-language" content="en" />
            </Head>
            <GlobalStyle />
            <Context.Provider value={state}>
                <Component {...pageProps} />
            </Context.Provider>
        </React.Fragment>
        )
  }
 
  
export default MyApp;