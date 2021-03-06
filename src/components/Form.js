import React,{ Component } from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            brewery_type: "",
            city: "",
            state: "",
            website_url: "",
            comment: ""
        }
        this.resetInput = this.resetInput.bind(this);
    }

    resetInput() {
        this.setState({name: "", brewery_type: "", city: "", state: "", website_url: "", comment: ""});
    }

    render() {
        return (
            <div className="add-brewery-form">
                <form>
                    <input 
                        type="text" 
                        placeholder="Brewery name" 
                        value={this.state.name} 
                        onChange={(e) => this.setState({name: e.target.value})}
                    /> 
                    <input 
                        type="text" placeholder="Brewery type" 
                        value={this.state.brewery_type} 
                        onChange={(e) => this.setState({brewery_type: e.target.value})}
                    />
                    <input 
                        type="text" 
                        placeholder="City" 
                        value={this.state.city} 
                        onChange={(e) => this.setState({city: e.target.value})}
                    /> 
                    <input 
                        type="text" 
                        placeholder="State" 
                        value={this.state.state} 
                        onChange={(e) => this.setState({state: e.target.value})}
                    />
                    <input 
                        type="text" 
                        placeholder="Website" 
                        value={this.state.website_url} 
                        onChange={(e) => this.setState({website_url: e.target.value})}
                    /> 
                    <input 
                        type="text" 
                        placeholder="Add comment/note" 
                        value={this.state.comment} 
                        onChange={(e) => this.setState({comment: e.target.value})}
                    /> 
                </form>
                <button
                    onClick={() => {this.props.addBrewery(this.state.name, this.state.brewery_type, this.state.city, this.state.state, this.state.website_url, this.state.comment); this.resetInput()}}>Add Brewery!
                </button>
            </div>
        );
    }
}