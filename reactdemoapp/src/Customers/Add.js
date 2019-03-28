import React, { Component } from 'react';
import axios from 'axios'


class Add extends React.Component {
    constructor(props) {
      super(props);
      this.state = {ID: '1',Name:'',Address:'',City:'',State:'',ZIP:'',ContactFirst:'',ContactLast:'',Phone:''};
      //this.handleIDChange = this.handleIDChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange=(event)=> {
    //    this.state[event.target.id] = event.target.value;
    //    console.log(v);
            if(event.target.id==="ID")
            this.setState({ID: event.target.value});
            else if(event.target.id==="Name")
            this.setState({Name: event.target.value});
            else if(event.target.id==="Address")
            this.setState({Address: event.target.value});
            else if(event.target.id==="City")
            this.setState({City: event.target.value});
            else if(event.target.id==="State")
            this.setState({State: event.target.value});
            else if(event.target.id==="ZIP")
            this.setState({ZIP: event.target.value});
            else if(event.target.id==="ContactFirst")
            this.setState({ContactFirst: event.target.value});
            else if(event.target.id==="ContactLast")
            this.setState({ContactLast: event.target.value});
            else if(event.target.id==="Phone")
            this.setState({Phone: event.target.value});

    }
  

    handleSubmit=(event)=> {
        var data1= {
            firstName: 'Fred',
            lastName: 'Flintstone'
          };
        
        // let axiosConfig = {
        //     headers: {
        //         'Content-Type': 'application/json; charset=utf-8'     }
        //   };
        axios.post('http://localhost:3001/AddCustomer', this.state)

            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3001/AddCustomer',
        //     //data: this.state.Name,
        //     data: {
        //         firstName: 'Fred',
        //         lastName: 'Flintstone'
        //       },
        //     config: { headers: {'Content-Type': 'application/json; charset=utf-8',
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token" }}
        //     })
        //     .then(function (response) {
        //         //handle success
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });

      console.log('A form was submitted: ' + JSON.stringify( this.state));
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <td><input type="text" id='ID' value={this.state.ID} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td><input type="text" id='Name' value={this.state.Name} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td><input type="text" id='Address' value={this.state.Address} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <th>City</th>
                    <td><input type="text" id='City' value={this.state.City} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <th>State</th>
                    <td><input type="text" id='State' value={this.state.State} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <th>ZIP</th>
                    <td><input type="text" id='ZIP' value={this.state.ZIP} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <th>ContactFirst</th>
                    <td><input type="text" id='ContactFirst' value={this.state.ContactFirst} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <th>ContactLast</th>
                    <td><input type="text" id='ContactLast' value={this.state.ContactLast} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td><input type="text" id='Phone' value={this.state.Phone} onChange={this.handleChange} /></td>
                </tr>
            </tbody>
        </table>
         
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Add;
