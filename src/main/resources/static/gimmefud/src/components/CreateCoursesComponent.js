import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CustomerService from "../services/CoursesService";




const CreateCoursesComponent = () => {
    const [course_name, setCourseName] = useState('');
    const[rname, setRname   ] = useState('');
    const[meal_type, setMealType] = useState('');
    const[meal_price, setMealPrice] = useState('');

   
    const navigate = useNavigate();



    const saveCourse = (e) => {
        e.preventDefault();
        
        const course = { course_name, rname, meal_type, meal_price};
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
    <label for = "inputCourseName" class="form-label">Name of course</label>
    <input
    type="text"
    class="form-control"
    id="course_name"
    value={course_name}
    onChange={(e) => setCourseName(e.target.value)}
    placeholder="Name of course"
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
    placeholder="Restaurant name"
    name="s" 
    />
</div>


<div class = "col-md-6">
    <label for = "inputMealType" class="form-label">Type of meal</label>
    <input
    type="text"
    class="form-control"
    id="meal_type"
    value={meal_type}
    onChange={(e) => setMealType(e.target.value)}
    placeholder="Type of meal"
    name="s" 
    />
</div>
<div class = "col-md-6">
    <label for = "inputPriceRange" class="form-label">Price</label>
    <input
    type="text"
    class="form-control"
    id="price_range"
    value={meal_price}
    onChange={(e) => setMealPrice(e.target.value)}
    placeholder="Price"
    name="s" 
    />
</div>

<div class="dropdown">
  <button class="dropbutton">Choose type</button>
  <div class="dropdown-content">
    <a href="#">Main course</a>
    <a href="#">Side</a>
    <a href="#">Dessert</a>
    <a href="#">Drink</a>
  </div>
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
<button  onClick={(e) => saveCourse(e)} type="submit" class = "btn btn-primary">Add course</button>

    </div>   
    </form>
                
                
                 </div>
        </div>
  )
}

export default CreateCoursesComponent;