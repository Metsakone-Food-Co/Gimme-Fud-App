import { useEffect, useState } from 'react';
 import CoursesService from '../services/CoursesService';
 import { useParams,Outlet} from 'react-router-dom'
 import Row from 'react-bootstrap/Row'
 import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Badge} from "react-bootstrap";




 export default function CoursesDetails(props) {

    const [courses, setCourses] = useState([]);

     
    const result = useParams();
    console.log(result);


    const init = () => {
      CoursesService.get(result.rname)
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
   return (
     <div className="container">

         <div>
         <Row xs={2} md={1} className="g-4">
            {courses.map(courses =>(
            <tr key={courses.rname}>

                <Card style={{ width: '26rem'  }} >
                <Card.Body style={{border: '50px'}}>
         
    

                <Card.Text>{courses.rname}</Card.Text>
                <Card.Text>
              <p>Meal name: {courses.meal_name}</p> </Card.Text>
              <Card.Text>
              <p>Price: {courses.meal_price} </p> 
              </Card.Text>
        

            
            </Card.Body>
            </Card>
        
            </tr>
            ))}
        </Row>
        </div>
         <Outlet />
         
     </div>
   )
 }
 