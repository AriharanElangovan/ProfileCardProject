import React from "react";
import ReactDOM from "react-dom";

export default function Card(props){
    let badgeText=props.spots?"SOLD OUT":(props.location==="Online"?"ONLINE":"");

    return (
        <div className="card">
            {(props.spots===0 || props.location==="Online")&&<div className="badge">{badgeText}</div>}
          <img src={props.imagesrc}/>
          <p className='ratingSection'>
            <img className='starImg' src={props.starimg}/>
            <span>{props.rating} </span>
            <span>({props.overall})-{props.location}</span>
          </p>
          <p className='firstLine'>
            {props.title}
          </p>
          <p className='secondLine'>
            <span>From ${props.amount} </span><span>/ person</span>
          </p>
        </div>
    );
}