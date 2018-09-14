import React from "react";
import './App.css';

const Button = (props) => {
    return (
        <div className="search-button">
            <button 
            placeholder="Beer me!"
            // onClick={this.props.onClick}
            
            >
                Submit
            </button>
        </div>
    )
}


export default Button;