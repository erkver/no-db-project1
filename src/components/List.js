import React from "react";
import beerPic from '../beer-stock-pic.jpg';
import '../App.css';
import { FaBeer } from "react-icons/fa";

const List = props => {
    return(
        <div className="list-container">
            <img src={beerPic}></img>
            <div className="list">{props.brewery.name} - {props.brewery.brewery_type}</div>
            <div className="list">{props.brewery.city}, {props.brewery.state}</div>
            <div className="list">{props.brewery.website_url}</div>
            <button onClick={() => 
                {props.handleToggle();
                props.toggleForm(props.brewery.id); 
                props.editBrewery(props.brewery.id)
                }}>Edit brewery</button>
            <button onClick={() => props.deleteBrewery(props.brewery.id)}>Delete brewery</button>
        </div>
    );
}

export default List;