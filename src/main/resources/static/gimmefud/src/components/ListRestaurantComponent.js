import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantService from '../services/RestaurantService';

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
      
         
          {
            restaurants.map(restaurant => (
              <div key={restaurant.rname}>
                <div class = "row">
                  <div class = "col-sm-6">
               <div class="card"></div>
               <div class = "card-body">
                <div class = "card-title">{restaurant.rname}</div>
                <div class = "card-text">{restaurant.raddress}</div>

              </div>
               </div>
              </div>
              </div>
            ))
          }
       
    
        
      </div>
 
  );
}

export default ListRestaurantComponent;
