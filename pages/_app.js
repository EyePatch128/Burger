import React, { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive';

// Next things
import App from "next/app"
import Head from "next/head"

// Context
import Context from "../context";

//Styles
import '../public/fonts/fonts.css';
import GlobalStyle from "../public/globalStyle";
import {md} from "../public/breakpoints";



function MyApp({ Component, pageProps }) {
   
    // Detecting if user is on mobile or not
    const _md = `${(parseInt(md) - 1)}px`;
    const isMobile = useMediaQuery({
        query: `(max-device-width: ${_md})`
    });

    const [state, setState] = useState({ isMobile });

    //Update state when isMobile changes
    useEffect(()=>{
        setState({...state, isMobile})
    }, [isMobile])


    return (
        <React.Fragment>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
            </Head>
            <GlobalStyle />
            <Context.Provider value={{state, setState}}>
                <Component {...pageProps} />
            </Context.Provider>
        </React.Fragment>
        )
  }
  

  
  export default MyApp