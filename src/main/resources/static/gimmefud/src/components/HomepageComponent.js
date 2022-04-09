import React from 'react'
import {BrowserRouter,Routes, Route, Link, useNavigate } from 'react-router-dom'
import foodd from "../assests/foodd.jpg";
import {GiShoppingCart} from "react-icons/gi";


const Homepage = (props) => {

return (

    <div className='navbar'>
    <div className='leftSide'> 
      <img className='kuva'src="Logo.png"/>    
       </div>
    <div className='rightSide'> 
      <div> Login status: { props.userLoggedIn ? "is logged in" : "is not logged in" }</div>
      
        { props.userLoggedIn ? 
          <>
              <div className="Login">
              <Link to="/ListRestaurantComponent"><button type="button" class="btn background-color:transparent btn-lg ">Restaurants</button></Link>
              <Link to="/ListCoursesComponent"><button type="button" class="btn background-color:transparentt  btn-lg ">Courses</button></Link>
              <Link to="/HistoryComponent"><button type="button" class="btn background-color:transparentt  btn-lg ">Order History</button></Link>
              <Link to="/ShoppingcartComponent"><button type="button" class="btn background-color:transparentt  btn-lg ">Cart<GiShoppingCart/></button></Link>
              <button type = "button" class="btn background-color:transparent btn-lg" onClick={props.logout}> Logout </button></div>
            </>
             :
           <>
               <Link to="/LoginComponent"><button type="button" class="btn background-color:transparentt btn-lg ">Login</button></Link>
         </>
         
        }
</div>


<div className="home" style={{ backgroundImage:  `url(${foodd})` }}>
    <div className="headerContainer">
   <h1>Welcome to our App</h1> 

    </div>
 </div>
 </div>


  )
}

export default Homepage;