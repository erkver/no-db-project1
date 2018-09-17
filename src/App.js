import React, { Component } from 'react';
import axios from 'axios';
import "./reset.css"
import './App.css';
import List from './components/List'
import Input from './components/Input';
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      visited: [],
      toggle: false,
      visitedToggle: false,
      editComment: "",
      visitedText: "Been Here!"
    }
    this.addBrewery = this.addBrewery.bind(this);
    this.removeBrewery = this.removeBrewery.bind(this);
    this.addBrewery = this.addBrewery.bind(this);
    this.editBrewery = this.editBrewery.bind(this);
    this.searchBrewery = this.searchBrewery.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleVisitedToggle = this.handleVisitedToggle.bind(this);
    this.addToVisited = this.addToVisited.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.findByState = this.findByState.bind(this);
  }

  componentDidMount() {
    axios.get('/api/breweries').then(res => {
      console.log("res:", res.data);
      this.setState({breweries: res.data});
    }).catch(err => console.log(err));
  }

  addBrewery(name, brewery_type, city, state, website_url, comment) {
    // console.log(name, brewery_type, city, state, website_url, comment);
    axios.post('/api/breweries', {name, brewery_type, city, state, website_url, comment}).then(res => {
      console.log("res:", res);
      this.setState({breweries: res.data});
    }).catch(err => console.log(err));
  }

  removeBrewery(id) {
    // console.log(id);
    axios.delete(`/api/breweries/${id}`).then(res => {
      this.setState({breweries: res.data});
    }).catch(err => console.log(err));
  }

  editBrewery(id, text) {
    // console.log(id, text)
    axios.put(`/api/breweries/${id}`, {text}).then(res => {
      this.setState({breweries: res.data, editComment: ""});
    }).catch(err => console.log(err));
  }

  searchBrewery(str) {
    console.log(str); 
    axios.get(`/api/breweriesSearch?by_name=${str}`).then(res => {
      this.setState({breweries: res.data});
    }).catch(err => console.log(err));
  }

  findByState(state) {
    console.log(state); 
    axios.get(`/api/breweriesState?by_state=${state}`).then(res => {
      this.setState({breweries: res.data});
    }).catch(err => console.log(err));
  }

  addToVisited(brewery){
    let visitedArr = this.state.visited.slice();
    visitedArr.push(brewery);
    this.setState({visited: visitedArr, visitedText: "Added!"});
  }

  handleToggle(){
    this.setState({toggle: !this.state.toggle});
  }
  
  handleVisitedToggle(id){
    let toggleInd = this.state.breweries.findIndex(brewery => brewery.id === id);
    let breweriesCopy = this.state.breweries.slice();
    breweriesCopy[toggleInd] = this.setState({visitedToggle: !this.state.visitedToggle});
    this.state.visitedToggle === false ? this.setState({visitedText: "Been Here!"}) : this.setState({visitedText: "Added!"})
  }

  handleComment(e) {
    this.setState({editComment: e.target.value});
  }

  render() {
    // console.log(this.state.breweries)
    const { breweries, visited } = this.state;
    let breweryList = breweries.map((e, ind) => {
      return (
        <List 
          key={ind}
          brewery={e}
          deleteBrewery={this.removeBrewery}
          editBrewery={this.editBrewery}
          addBrewery={this.addToVisited}
          handleComment={this.handleComment}
          updatedComment={this.state.editComment}
          toggle={this.handleVisitedToggle}
          toggleState={this.state.visitedToggle}
          visitedText={this.state.visitedText}
        />
      )
      });
    let visitedList = visited.map((e, ind) => {
      return (
        <List 
          key={ind}
          brewery={e}
          deleteBrewery={this.removeBrewery}
          editBrewery={this.editBrewery}
          addBrewery={this.addToVisited}
          handleComment={this.handleComment}
          updatedComment={this.state.editComment}
          toggle={this.handleVisitedToggle}
          toggleState={this.state.visitedToggle}
          visitedText={this.state.visitedText}
        />
      )
      });
    return (
      <div className="App">
        <div className="navBar">
          <button className="visited-button" onClick={() => this.handleToggle()}>{this.state.toggle === false ? "View visited breweries" : "Back to list"}</button>
        </div>
          <nav>
            <h1>HopSearch</h1>
          </nav>
          {this.state.toggle === false ? 
            <div className="form-container">
              <div className="pre-body">
                <p className="alt-text">Filter by:</p>
                  <Input 
                    search={this.searchBrewery}
                    state={this.findByState}
                  />
              </div>
              <p className="alt-text">or add a new brewery!</p>
              <Form
                addBrewery={this.addBrewery}
              />
            </div> : 
            <p id="visited">Visited breweries</p>
          }
        {this.state.toggle === false ? breweryList : visitedList}
      </div>
    );
  }
}

export default App;
