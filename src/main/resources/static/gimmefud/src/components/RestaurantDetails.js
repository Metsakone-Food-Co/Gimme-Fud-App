import { useEffect, useState } from 'react';
 import RestaurantService from '../services/RestaurantService';
 import CoursesService from '../services/CoursesService';
 import { useParams,Outlet} from 'react-router-dom'
import { Card } from 'react-bootstrap';




 export default function RestaurantDetails() {

    const [restaurant, setRestaurant] = useState([]);
    const [courses, setCourses] = useState([]);
     
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

    
    
      const cinit = () => {
        CoursesService.getAll()
          .then(response => {
            console.log('Printing courses data', response.data);
            setCourses(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }
    
      useEffect(() => {
        cinit();
      }, []);


   


 
   return (
     <div className="restaurantPage">{restaurant.rname}
     <div className="restaurantContainer">
       
         <div className="leftMenu">
         <ul><b>Courses</b>
           <li>Appetisers</li>
           <li>Main courses</li>
           <li>Desserts</li>
           <li>Drinks</li>
         </ul>
         </div>
          
         <div className="centerMenu">
         <div>Rafla: {restaurant.rname}</div>
         <div>Ruoka:
           {courses.map(course => {
             if(course.rname == restaurant.rname)
             return <ul>
               <li>{course.course_name}</li>
             </ul>
           })}
         </div>
         </div>
          
         <div className="rightMenu">
         <div>{restaurant.raddress}</div>  
         </div>
          
      
     

         <Outlet />
     </div>
     </div>
   )
 }