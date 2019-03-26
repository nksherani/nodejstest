import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import  Customer from './Customer'
class App extends Component {
  state = {
    customers: []
  }
  componentDidMount(){
    this.GetCustomers();
  }
  GetCustomers=()=>{
    axios.get(`http://localhost:3001`)
    .then(res => {
      const customers = res.data;
      this.setState({ customers });
      console.log(this.state.customers);
    });
    
  }
  render() {
    
    return (
      <div className="App">
        <Customer customerList={this.state.customers}></Customer>
      </div>
    );
  }
}

export default App;
