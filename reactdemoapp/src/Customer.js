import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class Customer extends Component {
  
  render() {
    var data = this.props.customerList.map((x,i)=><tr key={i}><td>{x.name}</td><td>{x.address}</td></tr>);
    return (
      <div>
          <h1>List of Customers</h1>
      <table>
          <thead>
          <tr>
              <th>Name</th>
              <th>Address</th>
          </tr>
          </thead>
          <tbody>
        {data}
        </tbody>
      </table>
        
      </div>
    );
  }
}

export default Customer;
