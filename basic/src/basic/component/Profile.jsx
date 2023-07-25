import React from "react";
import Avartar from "./Avartar";

export default function Profile(props){
    return (<div className="profile">
        <Avartar 
        url={props.url}
        isNew ={props.isNew}/>
        <h1>{props.name}</h1>
        <p>{props.title}</p>
    </div>);
}
