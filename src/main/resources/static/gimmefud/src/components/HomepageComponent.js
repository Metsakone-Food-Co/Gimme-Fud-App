import React from 'react'
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown, Carousel} from "react-bootstrap";




export default function Homepage(props) {
  return (
<div>

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
               <Link to="/LoginComponent"><button type="button" class="btn btn-light btn-lg ">Login</button></Link>
         </>
         
   }
        
       </div>

   </div>

  )
}