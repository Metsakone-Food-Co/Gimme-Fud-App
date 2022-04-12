import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RestaurantService from '../services/RestaurantService';
import SearchRestaurant from './SearchRestaurant';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Badge, Image} from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import { BsCartPlus} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";



const ListRestaurantComponent = () => {

const navigate = useNavigate();

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



  
  const {searchRestaurant} = window.location;
  const query = new URLSearchParams(searchRestaurant).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  //const query = 'nakit';

  const filterRestaurants = (restaurants, query) => {
    if(!query){
      //console.log("Perse");
      return restaurants;
    }
    return restaurants.filter((restaurant) => {
      //console.log("Paska");
      const restaurantName = restaurant.rname.toLowerCase();
      return restaurantName.includes(query);
    })
  }

  const filteredRestaurants = filterRestaurants(restaurants, searchQuery);

  return (
    <div>
    <div className='navbar'>
      <div className='leftSide'> 
        <img className='kuva'src="Logo.png"/>    
         </div>
       <div className='rightSide'>
      <button type = "button" class="btn background-color:transparent btn-lg " onClick={() => navigate (-1)}> Go back</button>
      

         </div>  
     </div>
    
    <div className="container">
      
       <div class="card text-white">
       <img src="ruokakuva.png" class="card-img" alt= "background" width="100%" height="400px"/>
       <div class="card-img-overlay">
       <h3>List of Restaurants</h3>
   
       </div>
       </div>
       <h3>Type to search for restaurants</h3>
       <SearchRestaurant
       searchQuery={searchQuery}
       setSearchQuery={setSearchQuery}/>
       

        <Row xs={1} md={3} className="g-4">
          {filteredRestaurants.map(restaurant =>(
            <tr key={restaurant.rname}>
                
                <Link to = {restaurant.rname}>

                <Card style={{ width: '18rem'  }} >
                <Card.Body style={{border: '50px'}}>
                <Image 
                        src={restaurant.img_url} 
                        fluid
                        className='card-image-top'
                        class='courseImage'
                      />
            
             <Card.Title>{restaurant.rname} <BsCartPlus/></Card.Title>

              <Card.Text>
              <p>Opening hours: {restaurant.service_hours}</p> </Card.Text>
              <Card.Text>
              <p>Price Range: {restaurant.price_range} </p> 
              </Card.Text>
              
      
                <button type="button" class="btn btn-outline-secondary"> Tilaa <BsCartPlus/></button>
                <Card.Text>
              
                <Badge bg="light" text="info">{restaurant.rtype}<MdFastfood/></Badge>
                  
                </Card.Text>
           
                
             
     
              </Card.Body>
              </Card>
              </Link>
            </tr>
          ))
          }
          </Row>
       <div class="downcont">
      
       </div>
       
        
      </div>
      </div>
 
  );
}

export default ListRestaurantComponent;
