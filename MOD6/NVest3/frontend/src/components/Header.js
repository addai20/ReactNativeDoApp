import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import accounting from '../src/accounting'

class Header extends Component {
  render(){
    return(
      <Navbar bg="dark" variant="dark">
   <Navbar.Brand href="#home">NVest Wealth Management</Navbar.Brand>
   <Nav className="mr-auto">
     <Nav.Link href="#home">Accounts</Nav.Link>
     <Nav.Link href="#features">Markets</Nav.Link>
     <Nav.Link href="#pricing">Find an Advisor</Nav.Link>
   </Nav>
   <Form inline>
     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     <Button variant="outline-info">Search</Button>
   </Form>
 </Navbar>
    )
  }
}

export default Header
