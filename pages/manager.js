import React, { useContext, useEffect } from  "react"

// Context
import Context from "../context";

import Manager from "../components/content-manager/manager"

export default function ContentManager(props){

    const context = useContext(Context)

    // Set page Title
    const [pageTitle, setPageTitle] = context.pageTitle;
    useEffect(()=>{
        setPageTitle("Manager")
    }, [pageTitle]);

    return(
        <Manager />
    );
}