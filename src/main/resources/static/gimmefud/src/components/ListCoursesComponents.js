import React, { useState, useEffect } from 'react'
import CustomerService from '../services/CoursesService'

const ListCoursesComponent = () => {

 const [courses, setCourses] = useState([])

 useEffect(() => {

    CustomerService.getAllCourses().then((response) => {
        setCourses(response.data)
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    })

 }, [])
 

  return (
    <div className="container">
        <h2 className="text-center"> List Courses</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Courses ID</th>
                <th>Restaurant ID</th>
                <th>Meal name</th>
                <th>Meal type</th>
                <th>Meal price</th>
            </thead>
            <tbody> 
                {
                    courses.map(
                        courses =>
                        <tr key = {courses.courses_id}>
                            <td>{courses.courses_id}</td>
                            <td>{courses.restaurant_id}</td>
                            <td>{courses.meal_name}</td>
                            <td>{courses.meal_type}</td>
                            <td>{courses.meal_price}</td>
                           

                        </tr>
                    )
                
                }
                
                </tbody>

        </table>
    </div>
  )
}

export default ListCoursesComponent