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

      
        { props.userLoggedIn ? 
          <>
              <div className="Logout">
              <Link to="/ListRestaurantComponent"><button type="button" class="btn background-color:transparent btn-lg ">Restaurants</button></Link>
              <Link to="/HistoryComponent"><button type="button" class="btn background-color:transparentt  btn-lg ">Order history</button></Link>
              <button type = "button" class="btn background-color:transparent btn-lg" onClick={props.logout}> Logout </button></div>
            </>
             :
           <>
                <Link to="/CreateCustomerComponent"><button type="button" class="btn background-color:transparent btn-lg ">Sign up</button></Link>
               <Link to="/LoginComponent"><button type="button" class="btn background-color:transparentt btn-lg ">Sign in</button></Link>
               <Link to="/HomepageOwnerComponent"><button type="button" class="btn background-color:transparentt btn-lg ">Owner homepage</button></Link>
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

export default Homepage;