import { useEffect, useState } from 'react';
import CoursesService from '../services/CoursesService';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import SearchCourses from './SearchCourses';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Badge, ListGroupItem, Image, CardGroup} from "react-bootstrap";
import {Container , Row, Col} from 'react-bootstrap'  
import { BsCartPlus} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

const ListCoursesComponent = () => {

  const navigate = useNavigate();
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

  const {searchCourse} = window.location;
  const query = new URLSearchParams(searchCourse).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filterCourses = (courses, query) => {
    if(!query){
      
      return courses;
    }
    return courses.filter((course) => {
     
      const courseName = course.course_name.toLowerCase();
      return courseName.includes(query);
    })
  }

  const filteredCourses = filterCourses(courses, searchQuery);

  return (

    <div>
    <div className='navbar'>
      <div className='leftSide'> 
        <img className='kuva'src="Logo.png"/>    
         </div>
       <div className='rightSide'>
      <button type = "button" class="btn background-color:transparent btn-lg " onClick={() => navigate (-1)}> Home</button>
      

         </div>  
    
    <div className="coursesContainer">
    
       <div className='courseSearch'>
       <h3>Course search</h3>
       <SearchCourses
       searchQuery={searchQuery}
       setSearchQuery={setSearchQuery}/>
       </div>

       <div className="courseTest">
       

        <Row xs={1} md={4} >
          {filteredCourses.map(course =>(
            <tr key={course.course_name}>

                <Link to={course.rname}>

              <CardGroup>

                <Card border="warning" className="mb-3" style={{ width: '20rem' }}>

                  <Card.Body >
                      
                      <Image 
                        src="https://im.mtv.fi/image/3408894/landscape16_9/792/446/b51f396b1ebe045cdc114881f1d55017/Lj/grilli.jpg" 
                        fluid
                        className='card-image-top'
                        class='courseImage'
                      />
                      <Card.Header  >{course.course_name} </Card.Header>
                      
                      <ListGroupItem>

                        Restaurant: {course.rname}

                      </ListGroupItem>
                      <ListGroupItem>

                        Price: {course.meal_price}

                      </ListGroupItem>
                      <ListGroupItem>
              
                      {course.meal_type}
                        
                      </ListGroupItem>
              
      
                      <Button type="button" class="btn btn-outline-secondary"> Tilaa <BsCartPlus/></Button>
                      <Card.Link href="#">Give Feedback</Card.Link>
                      
           
                  </Card.Body>
              </Card>
              </CardGroup>
              
              
              </Link>  
              
            </tr>
          ))
          }
          </Row>
          </div>
          </div>
          </div>
       
       <Outlet />
       
       </div>
      
 
  );
}

export default ListCoursesComponent