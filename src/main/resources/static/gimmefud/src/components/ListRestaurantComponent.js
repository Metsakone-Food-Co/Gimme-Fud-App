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
      <h3>List of Restaurants</h3>
      <hr/>
      <div>
        {restaurants.map(restaurant =>(
          <tr key={restaurant.rname}>
            <div class="card" widht="50px">
              <div class="card-body">
                <div class="img">src</div>
                <div class="card-title">{restaurant.rname}</div>

              </div>
            </div>
          </tr>
        ))
        
        }
          
      </div>
    </div>
  );
}

export default ListRestaurantComponent;
