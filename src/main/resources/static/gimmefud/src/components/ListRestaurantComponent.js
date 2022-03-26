import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantService from '../services/RestaurantService';
import {Card} from 'react-bootstrap';

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


  return(
    

    <div className="container">
      <Card style={{ width: '18rem' }}>
          <Card.Body> 
          {
            restaurants.map(restaurant => (
              <tr key={restaurant.usernamer}>

           
              <Card.Title>
                <h1>{restaurant.rname} </h1> 
                </Card.Title>
              </tr>
            ))}

          </Card.Body>
      </Card>

 

</div>
  )
}
export default ListRestaurantComponent