import React, { Component } from 'react';
import axios from 'axios';
import "./reset.css"
import './App.css';
import List from './components/List'
import Input from './components/Input';
import Form from "./components/Form";
import Edit from "./components/Edit";
import Button from "./components/Button";
import beerPic from './beer-stock-pic.jpg';
import { FaBeer } from "react-icons/fa";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      toggle: false
    }
    // this.searchBrewery = this.searchBrewery.bind(this);
    this.addBrewery = this.addBrewery.bind(this);
    this.removeBrewery = this.removeBrewery.bind(this);
    this.addBrewery = this.addBrewery.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    axios.get('/api/breweries').then(res => {
      console.log("res:", res.data);
      this.setState({breweries: res.data});
    }).catch(err => console.log(err));
  }

  // searchBrewery(searchStr) { 
  //   axios.get(`/api/breweries?by_name=`).then(res => {
  //     let filteredBreweries = res.data.filter(brewery => brewery.name.includes(searchStr))
  //     this.setState({breweries: filteredBreweries});
  //   }).catch(err => console.log(err));
  // }

  addBrewery(name, brewery_type, city, state, website_url) {
    console.log(name, brewery_type, city, state, website_url);
    axios.post('/api/breweries', {name, brewery_type, city, state, website_url}).then(res => {
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

  }rd

  toggleForm(id) {
    let singleBrewery = this.state.breweries.filter(brewery => brewery.id === id)
    console.log(singleBrewery, this.state.toggle);
    this.state.toggle === true ? this.setState({breweries: singleBrewery}) : this.state.breweries;
  }

  handleToggle(){
      this.setState({toggle: !this.state.toggle});
  }

  render() {
    // console.log(this.state.breweries)
    const { breweries } = this.state;
    let breweryList = breweries.map((e, desc, location, site) => {
      return (
        <List 
          key1={desc}
          key2={location}
          key3={site}
          brewery={e}
          deleteBrewery={this.removeBrewery}
          editBrewery={this.editBrewery}
          toggleForm={this.toggleForm}
          handleToggle={this.handleToggle}
        />
      )
      });
    return (
      <div className="App">
        <div className="navBar">
          <nav><h1>HopSearch</h1></nav>
          <Input 
            search={this.searchBrewery}
          />
        {this.state.toggle === false ? <p id="alt">Or add a new brewery!</p> : <p id="alt">Edit brewery</p>}
        </div>
        <Form
          addBrewery={this.addBrewery}
          formState={this.state.toggle}
        />
        {breweryList}
      </div>
    );
  }
}

export default App;
