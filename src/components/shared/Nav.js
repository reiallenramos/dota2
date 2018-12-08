import React, { Fragment } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../Home';
import Heroes from '../Heroes';
import Items from '../Items';

class Test extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Dota 2</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                  <NavItem>
                    <Link to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/heroes">Heroes</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/items">Items</Link>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/heroes" component={Heroes} />
            <Route path="/items" component={Items} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default Test;
