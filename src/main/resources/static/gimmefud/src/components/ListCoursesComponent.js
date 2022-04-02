import { useEffect, useState } from 'react';
import CoursesService from '../services/CoursesService';
import { Link, Outlet } from 'react-router-dom';
import SearchCourses from './SearchCourses';

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

  const {searchCourses} = window.location;
  const query = new URLSearchParams(searchCourses).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filterCourses = (courses, query) => {
    if(!query){
      
      return courses;
    }
    return courses.filter((courses) => {
     
      const coursesName = courses.rname.toLowerCase();
      return coursesName.includes(query);
    })
  }

  const filteredCourses = filterCourses(courses, searchQuery);



 
  

  return (
    <div className="container">
      
       <div class="card text-white">
       <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Meny_butikkjede_norgesgruppen_logo.jpg" border-box="20px" class="card-img" alt= "background" width="100%" height="400px"/>
       <div class="card-img-overlay">
       <h3>List of Courses</h3>
   
       </div>
       </div>
       <h2>Course search</h2>
       <SearchCourses
       searchQuery={searchQuery}
       setSearchQuery={setSearchQuery}/>
       

        <Row xs={1} md={3} className="g-4">
          {filteredCourses.map(course =>(
            <tr key={course.rname}>


                <Link to={course.rname}>
                <Card style={{ width: '26rem'  }} >
                <Card.Body style={{border: '50px'}}>
              <Card.Img variant="top" src="https://im.mtv.fi/image/3408894/landscape16_9/792/446/b51f396b1ebe045cdc114881f1d55017/Lj/grilli.jpg "/>
            
             <Card.Title  >{course.rname} <BsCartPlus /></Card.Title>

              <Card.Text>
              <p>Meal name: {course.meal_name}</p> </Card.Text>
              <Card.Text>
              <p>Price: {course.meal_price} </p> 
              </Card.Text>
              
      
                <button type="button" class="btn btn-outline-secondary"> Tilaa <BsCartPlus/></button>
                <Card.Link href="#">Give Feedback</Card.Link>
                <Card.Text>
              
                <Badge bg="light" text="info">{course.mealtype}<MdFastfood/></Badge>
                  
                </Card.Text>
           
              </Card.Body>
              </Card>
              </Link>  
              
            </tr>
          ))
          }
          </Row>
       <div class="downcont">
      
       </div>
       
       <Outlet />
      </div>
 
  );
}

export default ListCoursesComponent