import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  render() {
    axios.get(`http://localhost:3000`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

    return (

      
      <div className="App">
        
      </div>
    );
  }
}

export default App;
