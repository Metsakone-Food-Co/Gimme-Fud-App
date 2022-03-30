import React from 'react'
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown, Carousel} from "react-bootstrap";




export default function Homepage(props) {
  return (
//tämä pitäis näkyä vaan asiakkaalle ja 
    <div className="Container">
    <Navbar bg="light" variant="light" expand="lg"><img src="Logo.png" width="8%"></img>
  <Container>
  <Nav.Link to="#/ListRestaurantComponent">Home</Nav.Link>
      <NavDropdown title="Courses" id="basic-nav-dropdown" >
      <NavDropdown.Item href="#action/3.1">Main</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Dessert</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Drinks</NavDropdown.Item>
      </NavDropdown>
   
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Link to="/ListRestaurantComponent"><button type="button" class="btn btn-light btn-lg ">Restaurants</button></Link>
        <Link to="/ListCoursesComponent"><button type="button" class="btn btn-light btn-lg ">Courses</button></Link> 
    
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Carousel className="karuselli">
  <Carousel.Item class="item">
    <img
  
      src="Logo.png"
      width="1200" height="400" />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img

      width="1200" height="400"
      src="https://images.interactives.dk/shutterstock_283021049-S-wInxW0pTbWtZ_ONROBLA.jpg?auto=compress&ch=Width%2CDPR&ixjsv=2.2.4&rect=0%2C1%2C4048%2C2802&w=960"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Best Bögö in town</h3>
     </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        <h1>Home Page lol</h1>





        <div>User login status: { props.userLoggedIn ? "is logged in" : "is not logged in" } </div>
        <div>
          { props.userLoggedIn ? 
          <>
              <div><button type = "button" class="btn btn-primary btn-lg"onClick={props.logout}> Logout </button></div>
              <Link to="/ListRestaurantComponent"><button type="button" class="btn btn-primary btn-lg ">Restaurants</button></Link>
            </>
             :
             
           <>
            
           <Link to="/LoginComponent"><button type="button" class="btn btn-primary btn-lg ">Login</button></Link>
           <Link to="/LoginOwnerComponent"><button type="button" class="btn btn-primary btn-lg ">Login as a Owner</button></Link>
           <Link to="/CreateCustomerComponent"><button type="button" class="btn btn-primary btn-lg ">Create customer</button></Link>
           <Link to="/CreateOwnerComponent"><button type="button" class="btn btn-primary btn-lg ">Create owner</button></Link>
           <Link to="/CreateCoursesComponent"><button type="button" class="btn btn-primary btn-lg ">Create course</button></Link>
          
         </>
         
   
   }
        
       </div>

   </div>

  )
}