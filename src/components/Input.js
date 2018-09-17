import React,{ Component } from "react";
import '../App.css';
import Button from "./Button";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: "",
            stateInput: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleStateClick = this.handleStateClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({nameInput: e.target.value});
    }

    handleStateChange(e) {
        this.setState({stateInput: e.target.value});
    }

    handleNameClick() {
        this.props.search(this.state.nameInput);
        this.setState({nameInput: ""});
    }

    handleStateClick() {
        this.props.state(this.state.stateInput);
        this.setState({stateInput: ""});
    }

    render() {
        return (
            <div className="input">
                <input 
                    placeholder="Find a brewery by name" 
                    value={this.state.nameInput} 
                    onChange={this.handleNameChange}
                />
                <Button 
                    handleNameSubmit={this.handleNameClick}
                    nameInput={this.state.nameInput}
                    handleStateSubmit={this.handleStateClick}
                    stateInput={this.state.stateInput}
                />
                <input 
                    placeholder="Find a brewery by state" 
                    value={this.state.stateInput} 
                    onChange={this.handleStateChange}
                />
                <button
                    className="search-button"                     
                    onClick={() => this.handleStateClick(this.state.stateInput)}>Submit
                </button> 
            </div>
        );
    }
}

export default Input;

