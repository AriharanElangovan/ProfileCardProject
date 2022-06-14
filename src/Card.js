import React from "react";
import ReactDOM from "react-dom";
import location from './location.png';

export default function Card(props){
    return (
        <div className="card">
            <img src={`./${props.image}`}/>
            <div>
                <p>
                    <img src={location}/>{props.location}<span>View on Google Maps</span>
                </p>
                <h3>{props.title}</h3>
                <p>{props.fromDate}-{props.toDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}