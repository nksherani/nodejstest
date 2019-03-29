import React, { Component } from 'react';
import axios from 'axios';
import  Customer from './Customer'
import '../site.css'

class Index extends Component {
  state = {
    customers: []
  }
  componentDidMount(){
    this.GetCustomers();
  }
  GetCustomers=()=>{
    axios.get(`http://localhost:3001/GetCustomers`)
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

export default Index;
