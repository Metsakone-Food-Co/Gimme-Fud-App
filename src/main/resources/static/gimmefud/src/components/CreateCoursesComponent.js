import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CustomerService from "../services/CoursesService";




const CreateCoursesComponent = () => {
    const [course_name, setCourseName] = useState('');
    const[rname, setRname   ] = useState('');
    const[meal_name, setMealName] = useState('');
    const[meal_type, setMealType] = useState('');
    const[meal_price, setMealPrice] = useState('');

   
    const navigate = useNavigate();



    const saveCourse = (e) => {
        e.preventDefault();
        
        const course = { course_name, rname, meal_name, meal_type, meal_price};
        CustomerService.create(course)
        .then(response => {
            console.log("Course added successfully", response.data);
            navigate("/CreationSuccesfull");
        })
        .catch(error => {
            console.log('something went wrong', error);
        })
    }




  return (
    <div className="container"> 
        <h1> Create course  </h1>
    <div className="createCustomer">
    <form  class = "row g-3">
        


<div class = "col-md-6">
    <label for = "inputCourseName" class="form-label">Username</label>
    <input
    type="text"
    class="form-control"
    id="course_name"
    value={course_name}
    onChange={(e) => setCourseName(e.target.value)}
    placeholder="CourseName"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputRname" class="form-label">Restaurant name</label>
    <input
    type="text"
    class="form-control"
    id="rname"
    value={rname}
    onChange={(e) => setRname(e.target.value)}
    placeholder="Rname"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputMealName" class="form-label">Meal name</label>
    <input
    type="text"
    class="form-control"
    id="meal_name"
    value={meal_name}
    onChange={(e) => setMealName(e.target.value)}
    placeholder="Meal name"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputMealType" class="form-label">Last name</label>
    <input
    type="text"
    class="form-control"
    id="meal_type"
    value={meal_type}
    onChange={(e) => setMealType(e.target.value)}
    placeholder="Meal type"
    name="s" 
    />
</div>
<div class = "col-md-6">
    <label for = "inputPriceRange" class="form-label">Phone number</label>
    <input
    type="text"
    class="form-control"
    id="price_range"
    value={meal_price}
    onChange={(e) => setMealPrice(e.target.value)}
    placeholder="Price range"
    name="s" 
    />
</div>




  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input"
       type="checkbox" id="gridCheck" />
      <label class="form-check-label"
       for="gridCheck">
        My information is correct
      </label>
    </div>
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