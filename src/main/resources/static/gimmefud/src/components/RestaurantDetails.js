import { useEffect, useState } from 'react';
 import RestaurantService from '../services/RestaurantService';
 import { useParams, } from 'react-router-dom'




 export default function RestaurantDetails() {


      
    const result = useParams();
    console.log(result);

    const ravinteli = RestaurantService.get("Osmo Rilli");
    console.log("Lol viikset");
    if(ravinteli == null){
        console.log("lol");
        return  <div>
            No restaurant found
            </div>;
        
    }

 
   return (
     <div>
         Tähän pitäisi tulla ravinteli
     
         
     </div>
   )
 }
 