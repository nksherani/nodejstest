import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  state = {
    customers: []
  }
  render() {
    axios.get(`http://localhost:3000`)
      .then(res => {
        const customers = res.data;
        this.setState({ customers });
      })

    return (

      
      <div className="App">
        
      </div>
    );
  }
}

export default App;
