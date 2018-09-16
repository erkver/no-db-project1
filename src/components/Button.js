import React from "react";
import '../App.css';

const Button = (props) => {
    return (
        <div className="search-button">
            <button onClick={() => props.handleSubmit}>Submit</button>
        </div>
    )
}


export default Button;