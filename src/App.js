import React, { Component } from 'react';
import axios from 'axios';
import "./reset.css"
import './App.css';
import List from './List'
import Input from './Input';
import Button from "./Button";
import beerPic from './beer-stock-pic.jpg';
import { FaBeer } from "react-icons/fa";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    }
    this.createBrewery = this.createBrewery.bind(this);
  }

  componentDidMount() {
    axios.get('/api/breweries').then(res => {
      console.log("res:", res.data);
      this.setState({breweries: res.data});
    }).catch(err => console.log(err));
  }

  handleClick() {
    this.setState({})
  }
  createBrewery() {

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
        />
      )}
    );
    return (
      <div className="App">
        <div className="navBar">
          <nav>HopSearch</nav>
          <Input 

          />
        </div>
        {breweryList}
      </div>
    );
  }
}

export default App;
