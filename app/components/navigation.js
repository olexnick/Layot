import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <Navbar   collapseOnSelect className='Nav-top'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">LAYOUT 2</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">ABOUT</NavItem>
              <NavItem eventKey={2} href="#">SERVISE</NavItem>
              <NavItem eventKey={2} href="#">GALLERY</NavItem>
              <NavItem eventKey={2} href="#">TEAM</NavItem>
              <NavItem eventKey={2} href="#">TEAM</NavItem>
              <NavItem eventKey={2} href="#">CONTACT</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
