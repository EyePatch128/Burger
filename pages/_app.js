import React from "react"

import App from "next/app"
import Head from "next/head"


import '../public/fonts/fonts.css';
import GlobalStyle from "../public/globalStyle";


function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </React.Fragment>
        )
  }
  

  
  export default MyApp