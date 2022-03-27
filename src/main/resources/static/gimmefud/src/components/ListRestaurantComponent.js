import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantService from '../services/RestaurantService';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'

const ListRestaurantComponent = () => {

  const [restaurants, setRestaurants] = useState([]);

  const init = () => {
    RestaurantService.getAll()
      .then(response => {
        console.log('Printing restaurants', response.data);
        setRestaurants(response.data);
      })
      .catch(error => {
        console.log('vituiksmän', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);


  
    return (
      <div className="container">
        <h3>List of Restaurants</h3>
        <Row xs={1} md={3} className="g-4">
          {restaurants.map(restaurant =>(
            <tr key={restaurant.rname}>
                
                <Card style={{ width: '18rem'  }} >
                <Card.Body style={{border: '50px'}}>
                <Card.Header>{restaurant.rname}</Card.Header>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71GBQJBNEKL._SX679_.jpg"/>
              <Card.Title>{restaurant.rype}</Card.Title>
              <Card.Text>

              <p>Aukioloajat:</p>
              
              {restaurant.service_hours}        
              
              </Card.Text>
              <Card.Text>
                
              <p>Hintaluokka:</p>
              
              {restaurant.price_range}   
              
              </Card.Text>
              <Card.Link href="#">Tilaa</Card.Link>
              <Card.Link href="#">Arvostele</Card.Link>
  
              </Card.Body>
              </Card>
              
            </tr>
          ))
          }
          </Row>
          
           
          
          
          
            
        
      </div>
    );
  }

export default ListRestaurantComponent;
/*import React, { useState, useEffect } from 'react'
import RestaurantService from '../services/RestaurantService'
import { Link } from 'react-router-dom'

const ListRestaurantComponent = () => {

 const [restaurant, setRestaurant] = useState([])

 useEffect(() => {

    RestaurantService.getAllRestaurants().then((response) => {
        setRestaurant(response.data)
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    })

 }, [])
 

  return (
    <div className="container">
        <h2 className="text-center"> List Restaurants</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Restaurant Id</th>
                <th>Owner Id</th>
                <th>Restaurant name</th>
                <th>Restaurant Address</th>
                <th>Service hours</th>
                <th>Restaurant type</th>
                <th>Price range</th>
            </thead>
            <tbody> 
                {
                    restaurant.map(
                        restaurant =>
                        <tr key = {restaurant.restaurant_id}>
                            <td>{restaurant.restaurant_id}</td>
                            <td>{restaurant.owner_id}</td>
                            <td>{restaurant.rname}</td>
                            <td>{restaurant.raddress}</td>
                            <td>{restaurant.service_hours}</td>
                            <td>{restaurant.rtype}</td>
                            <td>{restaurant.price_range}</td>

                        </tr>
                    )
                
                }
                
                </tbody>

        </table>
    </div>
  )
}

export default ListRestaurantComponent*/