import React, { Component } from 'react';
import axios from 'axios'
import PhoneInput from 'react-phone-number-input'


class Add extends React.Component {
    constructor(props) {
      super(props);
      this.state = {ID: '',Name:'',Address:'',City:'',State:'',ZIP:'',ContactFirst:'',ContactLast:'',Phone:''};
    }
  
    handleChange=(event)=> {
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
        
      console.log('A form was submitted: ' + JSON.stringify( this.state));
      
      event.preventDefault();
      window.location='/';
    }
  
    render() {
      return (
    <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label >ID:</label>
            <input type="text" id='ID' value={this.state.ID} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label >Name:</label>
            <input type="text" id='Name' value={this.state.Name} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label >Address:</label>
            <input type="text" id='Address' value={this.state.Address} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label >City:</label>
            <input type="text" id='City' value={this.state.City} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label >State:</label>
            <input type="text" id='State' value={this.state.State} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label >ZIP:</label>
            <input type="text" id='ZIP' value={this.state.ZIP} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label >ContactFirst:</label>
            <input type="text" id='ContactFirst' value={this.state.ContactFirst} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label >ContactLast:</label>
            <input type="text" id='ContactLast' value={this.state.ContactLast} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label >Phone:</label>
            {/* <input type="text" id='Phone' value={this.state.Phone} onChange={this.handleChange} className="form-control" /> */}
            <PhoneInput    placeholder="Enter phone number" className="form-control"   value={ this.state.Phone } onChange={ Phone => this.setState({ Phone }) } />
        </div>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Add;
