import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Carousel} from "react-bootstrap";

export default function NavBarComponent() {
  return (
    <div className="Container">
    <Navbar bg="light" variant="light" expand="lg"><img src="Logo.png" width="8%"></img>
  <Container>
  <Nav.Link to="#/ListRestaurantComponent">HomeEEEEE</Nav.Link>
      <NavDropdown title="Courses" id="basic-nav-dropdown" >
      <NavDropdown.Item href="#action/3.1">Main</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Dessert</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Drinks</NavDropdown.Item>
      </NavDropdown>
   
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        
    
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

