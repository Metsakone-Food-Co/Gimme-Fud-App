import React from 'react'
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'


export default function Homepage(props) {
  return (

    <div className="container">

        <h1>Home Page lol</h1>
        <div>User login status: { props.userLoggedIn ? "is logged in" : "is not logged in" } </div>
        <div>
          { props.userLoggedIn ? 
          <>
            <Link to="/ListRestaurantComponent"><button type="button" class="btn btn-primary btn-lg ">List restaurants</button></Link> 
           <Link to="/ListCustomerComponent"><button type="button" class="btn btn-primary btn-lg ">List customers</button></Link>
           <Link to="/ListOwnerComponent"><button type="button" class="btn btn-primary btn-lg ">List owners</button></Link>
           <Link to="/ListCoursesComponent"><button type="button" class="btn btn-primary btn-lg ">List courses</button></Link>
            </>
             :
            <>
           <Link to="/LoginComponent"><button type="button" class="btn btn-primary btn-lg ">Login</button></Link>
           <Link to="/CreateCustomerComponent"><button type="button" class="btn btn-primary btn-lg ">Create customer</button></Link>
           <Link to="/CreateOwnerComponent"><button type="button" class="btn btn-primary btn-lg ">Create owner</button></Link>
           <Link to="/CreateCoursesComponent"><button type="button" class="btn btn-primary btn-lg ">Create course</button></Link>
           </>
   
   }
        
       </div>

   </div>

  )
}