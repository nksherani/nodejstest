import React from 'react';
 import Add from './Customers/Add';
 import Edit from './Customers/Edit';
 import Index from './Customers/Index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavMenu extends React.Component {
    render() {
        return (
        <Router>
        <div>
          <h2>Welcome to Customer Portal</h2>
          <nav className="navbar navbar-default navbar-expand-lg">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Index </Link></li>
            <li><Link to={'/Customers/Add'} className="nav-link">Add</Link></li>
            {/* <li><Link to={'/Customers/Edit/:id'} className="nav-link">Edit</Link></li> */}
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Index} />
              <Route path='/Customers/Add' component={Add} />
              <Route path='/Customers/Edit/:id' component={Edit} />
          </Switch>
        </div>
      </Router>
        );
    }
}

export default NavMenu;