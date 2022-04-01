import { useEffect, useState } from 'react';
 import RestaurantService from '../services/RestaurantService';
 import { useParams,Outlet} from 'react-router-dom'




 export default function RestaurantDetails() {


     
    const result = useParams();
    console.log(result.rname);

    RestaurantService.get(result.rname);
   



   


 
   return (
     <div>
         Tähän pitäisi tulla ravinteli
       <div>
      {
        result.rname
      }
      </div>
         <Outlet />
     </div>
   )
 }
 