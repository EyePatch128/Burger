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

    const state = {
        isMobile: [isMobile, setIsMobile],
        windowDimensions: [windowDimensions, setWindowDimensions]
    };

    return (
        <React.Fragment>
            <Head>
                <title>Create Next App</title>
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
  

  
  export default MyApp