import React from 'react'
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'


export default function Homepage() {
  return (

    <div className="container">
        <h1>Homepage</h1>
        <h3>Use the navbar to switch views</h3>
        <Link to="/ListRestaurantComponent"><h1>Restaurants</h1></Link> 
        <Link to="/ListCustomerComponent"><h1 >Customers</h1></Link>
    </div>

  )
}
