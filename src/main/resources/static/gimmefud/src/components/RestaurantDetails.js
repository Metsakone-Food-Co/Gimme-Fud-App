import { useEffect, useState } from 'react';
 import RestaurantService from '../services/RestaurantService';
 import { useParams,Outlet} from 'react-router-dom'




 export default function RestaurantDetails() {

    const [restaurant, setRestaurant] = useState([]);

     
    const result = useParams();
    console.log(result);


    const init = () => {
      RestaurantService.get(result.rname)
        .then(response => {
          console.log('Printing restaurants', response.data);
          setRestaurant(response.data);
        })
        .catch(error => {
          console.log('vituiksmän', error);
        }) 
    }
    useEffect(() => {
      init();
    }, []);




   


 
   return (
     <div>
         Tähän pitäisi tulla ravinteli
      <h1>{restaurant.rname}</h1>
      <h2>{restaurant.raddress}</h2>
     <h1> {restaurant.rtype}</h1>
     

         <Outlet />
     </div>
   )
 }