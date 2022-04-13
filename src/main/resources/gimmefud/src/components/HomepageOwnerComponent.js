import React from 'react'
import { useEffect, useState } from 'react';
import { useParams,Outlet} from 'react-router-dom'
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import foodd from "../assests/foodd.jpg";


const HomepageOwner= (props)=> {



  return (
 

  <div className='navbar'>
      <div className='leftSide'> 
        <img className='kuva'src="Logo.png"/>    
         </div>
      <div className='rightSide'> 

        
          { props.ownerLoggedIn ? 
            <>
              <div className="Logout">
              <Link to="/OwnerListRestaurantComponent"><button type="button" class="btn background-color:transparent  btn-lg"><div>Own restaurants</div></button></Link>
              {/* <Link to="/ListCoursesComponent"><button type="button" class="btn background-color:transparent  btn-lg ">Courses</button></Link> */}
              <Link to="/CreateCoursesComponent"><button type="button" class="btn background-color:transparent  btn-lg ">Create Courses</button></Link>
              <Link to="/CreateRestaurantComponent"><button type="button" class="btn background-color:transparent  btn-lg ">Create restaurant</button></Link>
              <button type = "button" class="btn background-color:transparent btn-lg "onClick={props.logout}> Logout </button></div>
            </>
            :
            <>
              <Link to="/CreateOwnerComponent"><button type="button" class="btn background-color:transparent btn-lg ">Sign up</button></Link>
              <Link to="/LoginOwnerComponent"><button type="button" class="btn background-color:transparent btn-lg ">Sign in</button></Link>
            </>
        
      }   
        </div>


<div className="home" style={{ backgroundImage:  `url(${foodd})` }}>
    <div className="headerContainer">
   <h1>Welcome to our food delivery App</h1> 



    </div>
 </div>
 </div>



  )
}
export default HomepageOwner;