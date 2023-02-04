import React from "react";
import { useHistory } from "react-router-dom";
import BasePage from "./base";



const NoPage=()=>{
    const history=useHistory();
    return(
        <BasePage
        title= "You Lost Your Way"
        description = "Please click the link below to home page">
        
        <button type="" onClick={()=>history.push("/")}>Home</button>
        
        
        </BasePage>
    )
}

export default NoPage