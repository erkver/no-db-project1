import React,{ Component } from "react";
import './App.css';
import Button from "./Button";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(this.state.userInput);
        this.setState({userInput: e.target.value});
    }


    render() {
        return (
            <div className="input">
                <input 
                placeholder="Enter new brewery" 
                value={this.state.userInput} 
                onChange={this.handleChange}
                />
                <Button />
            </div>
        );
    }
}

export default Input;

