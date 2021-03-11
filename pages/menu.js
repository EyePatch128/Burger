import React, { useContext } from "react"

//Context
import Context from "../context"

// Config
import {server} from "../config/index"

export default function Menu(props){
    console.log(props.data)
    
    return(
        <React.Fragment>
        </React.Fragment>
    );
}




export async function getStaticProps(context){
    console.log('fetching data...')
    const url = `${server}/api/menu`
    const res = await fetch(url);
    const data = await res.json();


    return {
        props: {
            data
            }
    }
}