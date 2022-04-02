import { useEffect, useState } from 'react';
 import RestaurantService from '../services/RestaurantService';
 import { useParams,Outlet} from 'react-router-dom'




 export default function RestaurantDetails() {


     
    const result = useParams();
    console.log(result);


    const init = () => {
      RestaurantService.getAll()
        .then(response => {
          console.log('Printing restaurants', response.data);
       
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
      {result.rtype}
     

         <Outlet />
     </div>
   )
 }
 