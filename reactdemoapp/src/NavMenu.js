import React from 'react';
 import { Route, Link } from 'react-router-dom';
 import Add from './Customers/Add';
 import Edit from './Customers/Edit';
 import Index from './Customers/Index';
 
class NavMenu extends React.Component {
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Demo App</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><Link to="/">List</Link></li>
      <li><Link to="/Customers/Add">Add</Link></li>
    </ul>
  </div>
</nav> */}
                <ul>
                     <li><Link to="/">List</Link></li>
                    <li><Link to="/Customers/Add">Add</Link></li>
                </ul>

                <Route path="/" exact component={Index}/>
                <Route path="/Customers/Add" component={Add}/>
                <Route path="/Customers/Edit/:id" component={Edit}/>
            </div>
        );
    }
}

export default NavMenu;