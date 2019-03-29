import React, { Component } from 'react';
import Edit from './Edit'
import { Route, Link } from 'react-router-dom';

class Customer extends Component {
  
  render() {
    var data = this.props.customerList.map((x,i)=><tr key={i}>
    <td>{x.ID}</td>
    <td>{x.Name}</td>
    <td>{x.Address}</td>
    <td>{x.City}</td>
    <td>{x.State}</td>
    <td>{x.ZIP}</td>
    <td>{x.ContactFirst}</td>
    <td>{x.ContactLast}</td>
    <td>{x.Phone}</td>
    <td><Link to={'/Customers/Edit/'+x._id }>Edit</Link></td>
    </tr>);
    return (
      <div>
          <h1>List of Customers</h1>
      <table id='customers' >
          <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>ZIP</th>
              <th>Contact First</th>
              <th>Contact Last</th>
              <th>Phone</th>
              <th>Edit</th>
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
