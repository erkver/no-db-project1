import React from "react";
import beerPic from '../beer-stock-pic.jpg';
import '../App.css';
import Linkify from 'react-linkify';

const List = props => {
    return(
        <div className="list-container">
            <img src={beerPic} alt="https://http.cat/404.jpg"></img>
            <div className="list">{props.brewery.name} - {props.brewery.brewery_type}</div>
            <div className="list">{props.brewery.city}, {props.brewery.state}</div>
            <Linkify>
            <div className="list" id="website">{props.brewery.website_url}</div>
            </Linkify>
            <div className="list">Comment/Notes: {props.brewery.comment}</div>
            <div className="list-buttons">
                <button onClick={() => props.deleteBrewery(props.brewery.id)}>Delete brewery</button>
                <button 
                    className="add-btn" 
                    onClick={() => {
                        props.addBrewery(props.brewery); props.toggle(props.brewery.id)}}
                    >{props.visitedText}
                </button>
            </div>
            <div className="edit-comment">
                <input 
                    type="text" 
                    placeholder="Add/edit comment"
                    value={props.brewery.id.updatedComment} 
                    onChange={props.handleComment}
                /> 
                <button 
                    onClick={() => props.editBrewery(props.brewery.id, props.updatedComment)}>Update comment
                </button>
                {console.log(props.updatedComment)}
            </div>
        </div>
    );
}

export default List;