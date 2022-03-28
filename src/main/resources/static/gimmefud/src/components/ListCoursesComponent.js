import { useEffect, useState } from 'react';
import CoursesService from '../services/CoursesService';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Badge} from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import { BsCartPlus} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

const ListCoursesComponent = () => {

  const [courses, setCourses] = useState([]);

  const init = () => {
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
    init();
  }, []);

 
  

  return (
    <div className="container">
      
       <div class="card text-white">
       <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Meny_butikkjede_norgesgruppen_logo.jpg" border-box="20px" class="card-img" alt= "background" width="100%" height="400px"/>
       <div class="card-img-overlay">
       <h3>List of Courses</h3>
   
       </div>
       </div>
       

        <Row xs={1} md={3} className="g-4">
          {courses.map(courses =>(
            <tr key={courses.courses_name}>
                
                <Card style={{ width: '26rem'  }} >
                <Card.Body style={{border: '50px'}}>
              <Card.Img variant="top" src="https://im.mtv.fi/image/3408894/landscape16_9/792/446/b51f396b1ebe045cdc114881f1d55017/Lj/grilli.jpg "/>
            
             <Card.Title  >{courses.rname} <BsCartPlus /></Card.Title>

              <Card.Text>
              <p>Meal name: {courses.meal_name}</p> </Card.Text>
              <Card.Text>
              <p>Price: {courses.meal_price} </p> 
              </Card.Text>
              
      
                <button type="button" class="btn btn-outline-secondary"> Tilaa <BsCartPlus/></button>
                <Card.Link href="#">Give Feedback</Card.Link>
                <Card.Text>
              
                <Badge bg="light" text="info">{courses.mealtype}<MdFastfood/></Badge>
                  
                </Card.Text>
           
                
             
     
              </Card.Body>
              </Card>
              
            </tr>
          ))
          }
          </Row>
       <div class="downcont">
      
       </div>
       
        
      </div>
 
  );
}

export default ListCoursesComponent