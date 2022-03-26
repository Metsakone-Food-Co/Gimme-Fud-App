import { useEffect, useState } from 'react';
import CoursesService from '../services/CoursesService';

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
      <h3>List of Courses</h3>
      <hr/>
      <div>
  
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Course name</th>
              <th>Restaurant name</th>
              <th>Meal name</th>
              <th>Meal type</th>
              <th>Meal price</th>

            </tr>
          </thead>
          <tbody>
          {
            courses.map(courses => (

              <tr key={courses.courseName}>
                <td>{courses.courseName}</td>
                <td>{courses.rname}</td>
                <td>{courses.mealname}</td>
                <td>{courses.mealtype}</td>
                <td>{courses.mealprice}</td>

              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default ListCoursesComponent