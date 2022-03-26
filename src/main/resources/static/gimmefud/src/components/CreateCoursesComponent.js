import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CoursesService from "../services/CoursesService";

const CreateCoursesComponent = () => {
    const[coursesId, setCoursesId] = useState('');
    const[restaurantid, setRestaurantId] = useState('');
    const[mealname, setMealName] = useState('');
    const[mealtype, setMealType] = useState('');
    const[mealprice, setMealPrice] = useState('');
    


    const {id} = useParams();

    const saveCourse = (e) => {
        e.preventDefault();
        
        const course = {coursesId, restaurantid, mealname, mealtype, mealprice};
        CoursesService.create(course)
            .then(response => {
                console.log("Course added successfully", response.data);
              
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }

  return (
    <div className="container"> 
        <h1> Create course  </h1>
    <div className="createCourse">
    <form  class = "row g-3">
        
<div class = "col-md-6">
    <label for = "inputcourseid" class="form-label">CoursesId</label>
    <input
    type="text"
    class="form-control"
    id="courseId"
    value={coursesId}
    onChange={(e) => setCoursesId(e.target.value)}
    placeholder="CoursesId"
    name="s" 
    />
</div>


<div class = "col-md-6">
    <label for = "inputrestaurantid" class="form-label">Restaurant ID</label>
    <input
    type="text"
    class="form-control"
    id="restaurantid"
    value={restaurantid}
    onChange={(e) => setRestaurantId(e.target.value)}
    placeholder="RestaurantId"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputMealName" class="form-label">Meal Name</label>
    <input
    type="text"
    class="form-control"
    id="mealname"
    value={mealname}
    onChange={(e) => setMealName(e.target.value)}
    placeholder="Meal name"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputMealType" class="form-label">Meal type</label>
    <input
    type="text"
    class="form-control"
    id="mealtype"
    value={mealtype}
    onChange={(e) => setMealType(e.target.value)}
    placeholder="Meal name"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "MealPrice" class="form-label">MealPrice</label>
    <input
    type="text"
    class="form-control"
    id="mealprice"
    value={mealprice}
    onChange={(e) => setMealPrice(e.target.value)}
    placeholder="Meal price"
    name="s" 
    />
</div>

<div class="col-12">
    <button  onClick={(e) => saveCourse(e)} type="submit" class = "btn btn-primary">Add me</button>

    </div>   
    </form>
                
                
                 </div>
        </div>
  )
}

export default CreateCoursesComponent;