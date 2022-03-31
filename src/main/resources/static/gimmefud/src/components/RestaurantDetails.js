import { useEffect, useState } from 'react';
 import RestaurantService from '../services/RestaurantService';
 import { useParams, } from 'react-router-dom'




 export default function RestaurantDetails() {
    const init = () => {
        RestaurantService.getAll()
          .then(response => {
            console.log('Printing restaurant', response.data);
       
          })
          .catch(error => {
            console.log('vituiksmän', error);
          }) 
      }
    
      useEffect(() => {
        init();
      }, []);


      
    const result = useParams();
    console.log(result);

    const restaurant = RestaurantService.get(restaurant => restaurant.rname === result.rname);
    if(restaurant === null){
        return <div>No restaurant found</div>;
    }
   return (
     <div>
        Pertti
         
     </div>
   )
 }
 