import React from 'react'
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'


export default function Homepage() {
  return (

    <div className="container">
        <h1>Login</h1>
        <form action="/" method="post">
          <div class = " form-floating mb-3">
            <input type="text" class="form-control" id= "loginUsername " placeholder="Username" ></input> 
            <label for = "loginUsername" >Username</label>
          </div>
          <div class = " form-floating mb-3">
            <input type="Password" class="form-control" id= "loginPAssword " placeholder="Password" ></input> 
            <label for = "loginPassword" >Password</label>
          </div>
        <Link to="/CreateCustomerComponent"><button type="button" class="btn btn-primary btn-lg ">Create customer</button></Link>
        <Link to="/CreateOwnerComponent"> <button type="button" class="btn btn-primary btn-lg ">Create owner</button></Link>
   </form>
   </div>

  )
}
