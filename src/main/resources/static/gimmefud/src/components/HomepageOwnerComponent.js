import React from 'react'
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import { Carousel} from "react-bootstrap";

export default function HomepageOwnerComponent(props) {
  return (
  
  <div>
    <div className='navbar'> 
    <img className='kuva'src="Logo.png"></img>
      <div className='nav2'>
        <h1>Home Page OWNER </h1>
    
        </div>

    <div> login status: { props.ownerLoggedIn ? "is logged in" : "is not logged in" } </div>
    <div>
      { props.ownerLoggedIn ? 
        <>
          <Link to="/ListRestaurantComponent"><button type="button" class="btn btn-primary btn-lg ">Restaurants</button></Link>
          <Link to="/ListCoursesComponent"><button type="button" class="btn btn-primary btn-lg ">Courses</button></Link>
          <Link to="/CreateCoursesComponent"><button type="button" class="btn btn-primary btn-lg ">Create Courses</button></Link>
          <Link to="/CreateRestaurantComponent"><button type="button" class="btn btn-primary btn-lg ">Create restaurant</button></Link>
          <div className="Logout"><button type = "button" class="btn btn-primary btn-lg"onClick={props.logout}> Logout </button></div>
        </>
         :
        <>
            <Link to="/CreateOwnerComponent"><button type="button" class="btn btn-light btn-lg ">Sign up</button></Link>
           <Link to="/LoginOwnerComponent"><button type="button" class="btn btn-light btn-lg ">Sign in</button></Link>
         </>
     
      }   
      
    </div>
    </div>

<div>
  <Carousel className="karuselli">
  <Carousel.Item class="item">
    <img
      src="Logo.png"
      width="1200" height="400" />
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
</div>

</div>



  )
}