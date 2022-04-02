import { useEffect, useState } from 'react';
 import CoursesService from '../services/CoursesService';
 import { useParams,Outlet} from 'react-router-dom'




 export default function CoursesDetails(props) {

    const [courses, setCourses] = useState([]);

     
    const result = useParams();
    console.log(result);


    const init = () => {
      CoursesService.getAll(result.rname)
        .then(response => {
          console.log('Printing courses', response.data);
          setCourses(response.data);
        })
        .catch(error => {
          console.log('vituiksmän', error);
        }) 
    }
    useEffect(() => {
      init();
    }, []);


    //Miksi ei menut tule 
      //<h1>{courses.rname}</h1>
      //<h2>{courses.meal_name}</h2>
     //<h1> {courses.meal_price}</h1>
     

   


 
   return (
     <div>
         
    {courses.map(courses =>(
    <tr key={courses.rname}>

        <h2>{courses.rname}</h2>
        <h2>{courses.meal_name}</h2>
        <h2>{courses.meal_price}</h2>

    </tr>))}
        
     

         <Outlet />
     </div>
   )
 }
 